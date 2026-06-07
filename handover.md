# New Reveals Mobile Handover

## Goal

Mirror the desktop Deck Browser New Reveals behavior in the mobile version without creating excessive requests.

Current desktop behavior:

- Source: `https://twitterwebviewer.com/?user=digimon_tcg_EN`
- Reveal window: 14 days
- Normal page/view load uses local cache only
- Manual refresh fetches TwitterWebViewer at most once
- Refresh scans newest tweets first
- Refresh stops immediately when it reaches a seen tweet id
- Refresh also stops when it reaches a tweet older than 14 days
- Rate limits/errors write `lastError` and keep cached cards visible

## Important Files

- Desktop implementation: `deck_browser/reveals.py`
- Main parser: `parse_twitterwebviewer_reveals`
- Refresh pipeline: `check_twitterwebviewer_reveals_now`
- State path helper: `twitterwebviewer_state_path`
- Tests: `tests/test_twitterwebviewer_reveals.py`

## State File

Use a local JSON state file. Desktop stores it at:

```text
deck_browser/reveals/twitterwebviewer_state.json
```

Suggested mobile equivalent: app-private storage, not bundled assets.

Example:

```json
{
  "cards": {
    "BT25-063": {
      "status": "seen",
      "tweetId": "1234567890123456789",
      "date": "2026-06-06",
      "firstSeenAt": "2026-06-06T18:46:44+00:00"
    }
  },
  "tweets": {
    "1234567890123456789": {
      "status": "seen",
      "date": "2026-06-06"
    }
  },
  "lastCheckedAt": "2026-06-06T18:46:44+00:00",
  "lastError": null,
  "stoppedAtSeenTweetId": "1234567890123456789",
  "source": "twitterwebviewer",
  "windowDays": 14
}
```

## Refresh Algorithm

1. Load cached reveal cards and `twitterwebviewer_state.json`.
2. Prune cached reveal cards older than 14 days.
3. Seed `state.tweets` and `state.cards` from the current cache.
4. Fetch `https://twitterwebviewer.com/?user=digimon_tcg_EN` once.
5. Split the page into tweet segments by status links.
6. For each tweet segment, newest first:
   - If `tweetId` is already in `state.tweets`, stop scanning immediately.
   - Derive tweet time from the snowflake id.
   - If tweet time is older than 14 days, stop scanning immediately.
   - Parse card refs like `[BT25-063 Card Name]`.
   - Parse media URLs from `pbs.twimg.com/media/...`.
   - Add only new reveal items.
7. Merge new items into cache without duplicate `(tweetId, cardId)` pairs.
8. Save updated cache and state.
9. On error/429, save `lastError` and `lastCheckedAt`, but do not block the next manual refresh.

## Tweet Timestamp

Twitter/X status ids are snowflakes. Desktop uses:

```text
timestampMs = (tweetId >> 22) + 1288834974657
```

Use this when TwitterWebViewer has vague or missing dates.

## Parser Notes

Desktop accepts status links matching:

```text
https://x.com/{user}/status/{tweetId}
https://twitter.com/{user}/status/{tweetId}
/{user}/status/{tweetId}
```

Card refs are extracted from bracketed reveal text:

```text
[BT25-063 Card Name]
[EX12-060 Chaosdramon]
[P-123 Promo Name]
```

The desktop card code pattern supports:

```text
BT##-###
EX##-###
P-###
```

## UX Behavior

If TwitterWebViewer returns 429, show cached cards and a message like:

```text
Could not check TwitterWebViewer reveals: TwitterWebViewer returned HTTP 429.
```

Do not clear cached reveals on fetch failure.

## Test Cases To Port

Port these behaviors from `tests/test_twitterwebviewer_reveals.py`:

- Parser stops when it reaches a seen tweet id.
- Parser stops at the 14-day cutoff.
- Refresh seeds seen tweet ids from existing cache before fetching.
- Refresh does not add tweets after the seen id.
- Rate limit writes `lastError` without a cooldown block.

## Current Runtime Observation

At the time this was written, TwitterWebViewer had recently returned HTTP 429 on the desktop machine. The desktop app records the error and keeps cached reveal cards visible, but the next manual refresh will still attempt another check.
