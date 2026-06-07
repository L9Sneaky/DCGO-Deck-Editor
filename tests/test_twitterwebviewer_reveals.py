from __future__ import annotations

import json
import io
import sys
import tempfile
import unittest
import urllib.error
import urllib.parse
from datetime import datetime, timedelta, timezone
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "deck_browser"))

import reveals


def tweet_id_for(value: datetime) -> str:
    timestamp_ms = int(value.astimezone(timezone.utc).timestamp() * 1000)
    return str((timestamp_ms - reveals.TWITTER_SNOWFLAKE_EPOCH_MS) << 22)


def tweet_html(tweet_id: str, code: str, name: str, image_suffix: str = "card") -> str:
    return f"""
    <article class="tweet">
      <a href="https://x.com/digimon_tcg_EN/status/{tweet_id}">status</a>
      <p>[REVEALS] Hello Digimon Tamers! Today's card is [{code} {name}]!</p>
      <img src="https://pbs.twimg.com/media/{image_suffix}.jpg" />
    </article>
    """


class TwitterWebViewerParserTests(unittest.TestCase):
    def test_parser_stops_when_seen_tweet_id_is_reached(self) -> None:
        now = datetime(2026, 6, 6, 12, tzinfo=timezone.utc)
        new_id = tweet_id_for(now - timedelta(hours=1))
        seen_id = tweet_id_for(now - timedelta(hours=2))
        ignored_id = tweet_id_for(now - timedelta(hours=3))
        page = (
            tweet_html(new_id, "BT25-063", "Newmon", "new")
            + tweet_html(seen_id, "BT25-064", "Seenmon", "seen")
            + tweet_html(ignored_id, "BT25-065", "Ignoredmon", "ignored")
        )

        result = reveals.parse_twitterwebviewer_reveals(page, seen_tweet_ids={seen_id}, now=now)

        self.assertEqual(result["stoppedAtSeenTweetId"], seen_id)
        self.assertEqual([item["tweetId"] for item in result["items"]], [new_id])
        self.assertEqual(result["items"][0]["code"], "BT25-063")
        self.assertNotIn(ignored_id, [item["tweetId"] for item in result["items"]])

    def test_parser_stops_at_two_week_cutoff(self) -> None:
        now = datetime(2026, 6, 6, 12, tzinfo=timezone.utc)
        recent_id = tweet_id_for(now - timedelta(days=1))
        old_id = tweet_id_for(now - timedelta(days=15))
        page = tweet_html(recent_id, "BT25-063", "Newmon", "new") + tweet_html(old_id, "BT25-064", "Oldmon", "old")

        result = reveals.parse_twitterwebviewer_reveals(page, seen_tweet_ids=set(), now=now, window_days=14)

        self.assertEqual(result["stoppedAtOldTweetId"], old_id)
        self.assertEqual([item["tweetId"] for item in result["items"]], [recent_id])

    def test_parser_accepts_starter_and_advanced_deck_card_codes(self) -> None:
        now = datetime(2026, 6, 6, 12, tzinfo=timezone.utc)
        tweet_id = tweet_id_for(now - timedelta(hours=1))
        page = (
            tweet_html(tweet_id, "ST23-07", "Armalizamon", "st")
            + tweet_html(tweet_id_for(now - timedelta(hours=2)), "AD1-011", "Paildramon", "ad")
            + tweet_html(tweet_id_for(now - timedelta(hours=3)), "LM-001", "Promo Card", "lm")
        )

        result = reveals.parse_twitterwebviewer_reveals(page, seen_tweet_ids=set(), now=now)

        self.assertEqual([item["code"] for item in result["items"]], ["ST23-07", "AD1-011", "LM-001"])


class TwitterWebViewerRefreshTests(unittest.TestCase):
    def test_refresh_seeds_seen_ids_from_cache_and_stops_at_first_seen_tweet(self) -> None:
        now = datetime.now(timezone.utc)
        new_id = tweet_id_for(now - timedelta(hours=1))
        seen_id = tweet_id_for(now - timedelta(hours=2))
        ignored_id = tweet_id_for(now - timedelta(hours=3))
        page = (
            tweet_html(new_id, "BT25-063", "Newmon", "new")
            + tweet_html(seen_id, "BT25-064", "Seenmon", "seen")
            + tweet_html(ignored_id, "BT25-065", "Ignoredmon", "ignored")
        )

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)
            existing_item = {
                "id": f"{seen_id}-1",
                "tweetId": seen_id,
                "tweetUrl": f"https://x.com/digimon_tcg_EN/status/{seen_id}",
                "createdAt": (now - timedelta(hours=2)).isoformat(),
                "date": (now - timedelta(hours=2)).date().isoformat(),
                "code": "BT25-064",
                "name": "Seenmon",
                "source": "twitterwebviewer",
                "imageUrl": "https://pbs.twimg.com/media/seen.jpg",
            }
            reveals.write_json(reveals.reveals_cache_path(app_support_dir), {"items": [existing_item], "lastChecked": now.timestamp()})

            calls: list[str] = []

            def fetcher(url: str) -> str:
                calls.append(url)
                return page

            result = reveals.check_twitterwebviewer_reveals_now(app_support_dir, fetcher=fetcher, now=now)
            cache = json.loads(reveals.reveals_cache_path(app_support_dir).read_text(encoding="utf-8"))
            state = reveals.load_twitterwebviewer_state(app_support_dir)
            cached_ids = [item["tweetId"] for item in cache["items"]]

            self.assertEqual(len(calls), 1)
            self.assertEqual(result["stoppedAtSeenTweetId"], seen_id)
            self.assertEqual(result["newRevealCount"], 1)
            self.assertIn(new_id, cached_ids)
            self.assertIn(seen_id, cached_ids)
            self.assertNotIn(ignored_id, cached_ids)
            self.assertIn(new_id, state["tweets"])
            self.assertIn(seen_id, state["tweets"])
            self.assertNotIn(ignored_id, state["tweets"])

    def test_rate_limit_writes_error_state_without_cooldown(self) -> None:
        now = datetime.now(timezone.utc)

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)

            def fetcher(url: str) -> str:
                raise urllib.error.HTTPError(url, 429, "Too Many Requests", {}, io.BytesIO(b"limited"))

            with self.assertRaisesRegex(RuntimeError, "HTTP 429"):
                reveals.check_twitterwebviewer_reveals_now(app_support_dir, fetcher=fetcher, now=now)

            state = reveals.load_twitterwebviewer_state(app_support_dir)
            self.assertEqual(state["lastError"], "HTTP 429")
            self.assertEqual(state["lastCheckedAt"], now.isoformat())
            self.assertNotIn("cooldownUntil", state)


class RevealCacheRetentionTests(unittest.TestCase):
    def test_load_reveals_does_not_prune_old_cached_items(self) -> None:
        now = datetime.now(timezone.utc)
        old_item = {
            "id": "old-1",
            "tweetId": tweet_id_for(now - timedelta(days=90)),
            "createdAt": (now - timedelta(days=90)).isoformat(),
            "date": (now - timedelta(days=90)).date().isoformat(),
            "code": "BT25-001",
            "name": "Oldmon",
            "source": "twitterwebviewer",
            "imageUrl": "https://pbs.twimg.com/media/old.jpg",
        }

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)
            reveals.write_json(reveals.reveals_cache_path(app_support_dir), {"items": [old_item], "lastChecked": now.timestamp()})

            payload = reveals.load_reveals(app_support_dir, [], force_refresh=False)
            cache = json.loads(reveals.reveals_cache_path(app_support_dir).read_text(encoding="utf-8"))

            self.assertEqual([item["code"] for item in payload["items"]], ["BT25-001"])
            self.assertEqual([item["code"] for item in cache["items"]], ["BT25-001"])

    def test_load_reveals_uses_digimoncard_io_fallback_after_twitterwebviewer_error(self) -> None:
        now = datetime.now(timezone.utc)
        fallback_item = {
            "id": "digimoncardio-EX12-076",
            "postId": "digimoncardio-EX12-076",
            "createdAt": now.isoformat(),
            "date": now.date().isoformat(),
            "code": "EX12-076",
            "name": "Susanoomon",
            "source": "digimoncard_io",
            "sourceLabel": "DigimonCard.io",
            "imageUrl": "https://images.digimoncard.io/images/cards/EX12-076.jpg",
        }

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)

            def fallback(path: Path) -> dict:
                reveals.write_json(
                    reveals.reveals_cache_path(path),
                    {"items": [fallback_item], "lastChecked": now.timestamp(), "source": "digimoncard_io", "errors": []},
                )
                return {"ok": True, "source": "digimoncard_io", "newRevealCount": 1, "errors": []}

            with mock.patch.object(reveals, "check_twitterwebviewer_reveals_now", side_effect=RuntimeError("TwitterWebViewer returned HTTP 429.")):
                with mock.patch.object(reveals, "check_digimoncard_io_reveals_now", side_effect=fallback):
                    with mock.patch.object(
                        reveals,
                        "check_wikimon_reveals_now",
                        return_value={"ok": True, "source": "wikimon", "newRevealCount": 0, "errors": []},
                    ):
                        payload = reveals.load_reveals(app_support_dir, [], force_refresh=True)

            self.assertEqual(payload["source"], "digimoncard_io")
            self.assertEqual([item["code"] for item in payload["items"]], ["EX12-076"])
            self.assertIn("DigimonCard.io fallback complete: 1 new reveal cards", payload["sourceMessage"])
            self.assertIn("Wikimon fallback complete: 0 new reveal cards", payload["sourceMessage"])


class DigimonCardIoFallbackTests(unittest.TestCase):
    def test_digimoncard_io_refresh_merges_new_cards_without_duplicate_printings(self) -> None:
        now = datetime(2026, 6, 7, 2, tzinfo=timezone.utc)
        payload = [
            {
                "id": "EX12-076",
                "name": "Susanoomon",
                "pretty_url": "EX12-076-susanoomon",
                "date_added": "2026-06-07 01:00:19",
                "set_name": ["EX-12: EXTRA BOOSTER DIGITAL WORLD SHAMBALA"],
            },
            {
                "id": "EX12-076",
                "name": "Susanoomon",
                "pretty_url": "EX12-076-susanoomon",
                "date_added": "2026-06-07 01:00:19",
                "set_name": ["EX-12: EXTRA BOOSTER DIGITAL WORLD SHAMBALA"],
            },
            {
                "id": "EX12-017",
                "name": "WarGreymon",
                "pretty_url": "EX12-017-wargreymon",
                "date_added": "2026-06-07 01:01:23",
                "set_name": ["EX-12: EXTRA BOOSTER DIGITAL WORLD SHAMBALA"],
            },
        ]

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)
            calls: list[str] = []

            def fetcher(url: str) -> list[dict]:
                calls.append(url)
                return payload

            result = reveals.check_digimoncard_io_reveals_now(app_support_dir, prefixes=["EX12"], fetcher=fetcher, now=now)
            cache = json.loads(reveals.reveals_cache_path(app_support_dir).read_text(encoding="utf-8"))

            self.assertEqual(len(calls), 1)
            self.assertEqual(result["newRevealCount"], 2)
            self.assertEqual([item["code"] for item in cache["items"]], ["EX12-017", "EX12-076"])
            self.assertEqual(cache["items"][0]["sourceLabel"], "DigimonCard.io")
            self.assertEqual(cache["items"][0]["imageUrl"], "https://images.digimoncard.io/images/cards/EX12-017.jpg")


class WikimonFallbackTests(unittest.TestCase):
    def test_wikimon_discovers_recent_set_prefixes_from_allpages(self) -> None:
        payloads = {
            "BT-": {"query": {"allpages": [{"title": "BT-24"}, {"title": "BT-25"}, {"title": "BT-26"}]}},
            "EX-": {"query": {"allpages": [{"title": "EX-11"}, {"title": "EX-12"}, {"title": "EX-13"}]}},
            "ST-": {"query": {"allpages": [{"title": "ST-24"}, {"title": "ST-25"}]}},
            "AD-": {"query": {"allpages": [{"title": "AD-01"}, {"title": "AD-02"}]}},
            "LM-": {"query": {"allpages": [{"title": "LM-08"}, {"title": "LM-09"}]}},
        }

        def fetcher(url: str) -> dict:
            query = urllib.parse.parse_qs(urllib.parse.urlparse(url).query)
            return payloads[str(query["apprefix"][0])]

        prefixes, errors = reveals.fetch_wikimon_discovered_prefixes(fetcher=fetcher)

        self.assertEqual(errors, [])
        self.assertEqual(prefixes, ["BT26", "BT25", "EX13", "EX12", "ST25", "ST24", "AD2", "AD1", "LM9", "LM8"])

    def test_wikimon_prefixes_include_next_prefix_for_future_sets(self) -> None:
        items = [{"code": "EX12-031"}, {"code": "BT25-063"}]

        prefixes = reveals.wikimon_prefixes_from_items(items, discovered_prefixes=["ST24"])

        self.assertEqual(prefixes[:4], ["EX12", "EX13", "BT25", "BT26"])
        self.assertIn("ST25", prefixes)

    def test_wikimon_refresh_merges_new_cards_from_raw_set_page_and_images(self) -> None:
        now = datetime(2026, 6, 7, 2, tzinfo=timezone.utc)
        raw_page = """
        {{DCGTable
        |no=017
        |n=War Greymon
        |col=r
        |r=SR
        }}
        {{DCGTable
        |no=031
        |n=Marin Bullmon
        |col=b
        |col2=y
        |r=U
        }}
        """
        html_page = """
        <img alt="Dcg-EX12-017.jpg" src="/images/thumb/4/48/Dcg-EX12-017.jpg/60px-Dcg-EX12-017.jpg" />
        <img alt="Dcg-EX12-031.jpg" src="/images/thumb/7/75/Dcg-EX12-031.jpg/60px-Dcg-EX12-031.jpg" />
        """
        existing_item = {
            "id": "digimoncardio-EX12-017",
            "postId": "digimoncardio-EX12-017",
            "createdAt": now.isoformat(),
            "date": now.date().isoformat(),
            "code": "EX12-017",
            "name": "WarGreymon",
            "source": "digimoncard_io",
            "sourceLabel": "DigimonCard.io",
            "imageUrl": "https://images.digimoncard.io/images/cards/EX12-017.jpg",
        }

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)
            reveals.write_json(reveals.reveals_cache_path(app_support_dir), {"items": [existing_item], "lastChecked": now.timestamp()})
            calls: list[str] = []

            def fetcher(url: str) -> str:
                calls.append(url)
                return raw_page if "action=raw" in url else html_page

            result = reveals.check_wikimon_reveals_now(app_support_dir, prefixes=["EX12"], fetcher=fetcher, now=now)
            cache = json.loads(reveals.reveals_cache_path(app_support_dir).read_text(encoding="utf-8"))

            self.assertEqual(len(calls), 2)
            self.assertEqual(result["newRevealCount"], 1)
            self.assertEqual([item["code"] for item in cache["items"]], ["EX12-031", "EX12-017"])
            self.assertEqual(cache["items"][0]["sourceLabel"], "Wikimon")
            self.assertEqual(cache["items"][0]["name"], "Marin Bullmon")
            self.assertEqual(cache["items"][0]["imageUrl"], "https://wikimon.net/images/7/75/Dcg-EX12-031.jpg")

    def test_wikimon_refresh_can_add_future_prefix_without_existing_cache(self) -> None:
        now = datetime(2026, 7, 1, 2, tzinfo=timezone.utc)
        raw_page = """
        {{DCGTable
        |no=001
        |n=Futuremon
        |col=r
        |r=U
        }}
        """
        html_page = """
        <img alt="Dcg-EX13-001.jpg" src="/images/thumb/a/aa/Dcg-EX13-001.jpg/60px-Dcg-EX13-001.jpg" />
        """

        def discovery_fetcher(url: str) -> dict:
            query = urllib.parse.parse_qs(urllib.parse.urlparse(url).query)
            apprefix = str(query["apprefix"][0])
            return {"query": {"allpages": [{"title": "EX-13"}]}} if apprefix == "EX-" else {"query": {"allpages": []}}

        def fetcher(url: str) -> str:
            decoded_url = urllib.parse.unquote(url)
            if "EX-13" not in decoded_url:
                return ""
            return raw_page if "action=raw" in decoded_url else html_page

        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)
            result = reveals.check_wikimon_reveals_now(
                app_support_dir,
                fetcher=fetcher,
                discovery_fetcher=discovery_fetcher,
                now=now,
            )
            cache = json.loads(reveals.reveals_cache_path(app_support_dir).read_text(encoding="utf-8"))

            self.assertIn("EX13", result["prefixes"])
            self.assertEqual(result["newRevealCount"], 1)
            self.assertEqual(cache["items"][0]["code"], "EX13-001")
            self.assertEqual(cache["items"][0]["name"], "Futuremon")


if __name__ == "__main__":
    unittest.main()
