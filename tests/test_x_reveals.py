from __future__ import annotations

import io
import json
import os
import sys
import tempfile
import unittest
import urllib.error
import urllib.parse
from datetime import datetime
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "deck_browser"))

try:
    import x_reveals
except ModuleNotFoundError:
    raise unittest.SkipTest("optional official X API reveal module is not present")


class FakeResponse:
    def __init__(self, payload: dict) -> None:
        self.payload = payload

    def __enter__(self) -> "FakeResponse":
        return self

    def __exit__(self, exc_type, exc, tb) -> None:
        return None

    def read(self) -> bytes:
        return json.dumps(self.payload).encode("utf-8")


def reveal_payload(post_id: str = "100", text: str | None = None, media_key: str = "m1") -> dict:
    return {
        "data": [
            {
                "id": post_id,
                "text": text or "[Card Reveals]\nToday's card is [EX12-001 Botamon]!",
                "created_at": "2026-06-06T06:00:00Z",
                "attachments": {"media_keys": [media_key]},
            }
        ],
        "includes": {
            "media": [
                {
                    "media_key": media_key,
                    "type": "photo",
                    "url": "https://pbs.twimg.com/media/card.jpg",
                    "alt_text": "Card image",
                }
            ]
        },
    }


class XRevealClientTests(unittest.TestCase):
    def test_username_from_profile_url_or_handle(self) -> None:
        self.assertEqual(x_reveals.username_from_profile_value("https://x.com/digimon_tcg_EN"), "digimon_tcg_EN")
        self.assertEqual(x_reveals.username_from_profile_value("https://twitter.com/digimon_tcg_EN/status/123"), "digimon_tcg_EN")
        self.assertEqual(x_reveals.username_from_profile_value("@digimon_tcg_EN"), "digimon_tcg_EN")
        self.assertEqual(x_reveals.username_from_profile_value("digimon_tcg_EN"), "digimon_tcg_EN")

    def test_username_lookup_url_uses_official_user_lookup_endpoint(self) -> None:
        url = x_reveals.username_lookup_url("https://x.com/digimon_tcg_EN")
        parsed = urllib.parse.urlparse(url)
        query = urllib.parse.parse_qs(parsed.query)
        self.assertEqual(parsed.scheme + "://" + parsed.netloc + parsed.path, "https://api.x.com/2/users/by/username/digimon_tcg_EN")
        self.assertEqual(query["user.fields"], ["id,username,name"])

    def test_request_construction_uses_required_fields_and_since_id(self) -> None:
        captured = {}

        def opener(request, timeout):
            captured["url"] = request.full_url
            captured["auth"] = request.get_header("Authorization")
            captured["timeout"] = timeout
            return FakeResponse({"data": []})

        x_reveals.fetchLatestUserPosts(
            {"userId": "12345", "sinceId": "99", "maxResults": 5},
            bearer_token="token",
            opener=opener,
            sleep=lambda seconds: None,
        )

        parsed = urllib.parse.urlparse(captured["url"])
        query = urllib.parse.parse_qs(parsed.query)
        self.assertEqual(parsed.scheme + "://" + parsed.netloc + parsed.path, "https://api.x.com/2/users/12345/tweets")
        self.assertEqual(captured["auth"], "Bearer token")
        self.assertEqual(captured["timeout"], x_reveals.DEFAULT_TIMEOUT_SECONDS)
        self.assertEqual(query["since_id"], ["99"])
        self.assertEqual(query["max_results"], ["5"])
        self.assertEqual(query["exclude"], ["replies,retweets"])
        self.assertEqual(query["tweet.fields"], ["id,text,created_at,attachments,entities,referenced_tweets"])
        self.assertEqual(query["expansions"], ["attachments.media_keys"])
        self.assertEqual(query["media.fields"], ["url,preview_image_url,type,alt_text"])

    def test_user_lookup_request_construction_uses_bearer_auth(self) -> None:
        captured = {}

        def opener(request, timeout):
            captured["url"] = request.full_url
            captured["auth"] = request.get_header("Authorization")
            captured["timeout"] = timeout
            return FakeResponse({"data": {"id": "98765", "username": "digimon_tcg_EN", "name": "Digimon Card Game"}})

        payload = x_reveals.fetchUserByUsername(
            {"profileUrl": "https://x.com/digimon_tcg_EN"},
            bearer_token="token",
            opener=opener,
            sleep=lambda seconds: None,
        )

        parsed = urllib.parse.urlparse(captured["url"])
        self.assertEqual(parsed.scheme + "://" + parsed.netloc + parsed.path, "https://api.x.com/2/users/by/username/digimon_tcg_EN")
        self.assertEqual(captured["auth"], "Bearer token")
        self.assertEqual(captured["timeout"], x_reveals.DEFAULT_TIMEOUT_SECONDS)
        self.assertEqual(payload["data"]["id"], "98765")

    def test_429_retries_then_success(self) -> None:
        calls = {"count": 0}
        sleeps: list[float] = []

        def opener(request, timeout):
            calls["count"] += 1
            if calls["count"] == 1:
                raise urllib.error.HTTPError(request.full_url, 429, "Too Many Requests", {}, io.BytesIO(b"limited"))
            return FakeResponse({"data": []})

        payload = x_reveals.fetchLatestUserPosts(
            {"userId": "12345"},
            bearer_token="token",
            opener=opener,
            sleep=sleeps.append,
        )
        self.assertEqual(payload, {"data": []})
        self.assertEqual(calls["count"], 2)
        self.assertEqual(sleeps, [1.0])

    def test_500_retries_then_success(self) -> None:
        calls = {"count": 0}

        def opener(request, timeout):
            calls["count"] += 1
            if calls["count"] == 1:
                raise urllib.error.HTTPError(request.full_url, 500, "Server Error", {}, io.BytesIO(b"server"))
            return FakeResponse({"data": []})

        payload = x_reveals.fetchLatestUserPosts(
            {"userId": "12345"},
            bearer_token="token",
            opener=opener,
            sleep=lambda seconds: None,
        )
        self.assertEqual(payload, {"data": []})
        self.assertEqual(calls["count"], 2)


class XRevealParserTests(unittest.TestCase):
    def test_no_new_posts_fixture(self) -> None:
        self.assertEqual(x_reveals.parse_reveal_posts({"data": []}), [])

    def test_one_new_reveal_post_with_image(self) -> None:
        items = x_reveals.parse_reveal_posts(reveal_payload())
        self.assertEqual(len(items), 1)
        self.assertEqual(items[0]["source"], "x_api")
        self.assertEqual(items[0]["sourceLabel"], "Official X Reveal")
        self.assertEqual(items[0]["code"], "EX12-001")
        self.assertEqual(items[0]["imageUrl"], "https://pbs.twimg.com/media/card.jpg")
        self.assertEqual(items[0]["postUrl"], "https://x.com/i/web/status/100")

    def test_multiple_posts_replies_and_retweets_excluded(self) -> None:
        payload = reveal_payload("100")
        payload["data"].extend(
            [
                {
                    "id": "101",
                    "text": "[Card Reveals] Today's card is [EX12-002 Koromon]!",
                    "created_at": "2026-06-06T06:00:00Z",
                    "attachments": {"media_keys": ["m1"]},
                    "referenced_tweets": [{"type": "replied_to", "id": "1"}],
                },
                {
                    "id": "102",
                    "text": "[Card Reveals] Today's card is [EX12-003 Tokomon]!",
                    "created_at": "2026-06-06T06:00:00Z",
                    "attachments": {"media_keys": ["m1"]},
                    "referenced_tweets": [{"type": "retweeted", "id": "2"}],
                },
            ]
        )
        items = x_reveals.parse_reveal_posts(payload)
        self.assertEqual([item["postId"] for item in items], ["100"])

    def test_duplicate_post_id_does_not_create_duplicate_entry(self) -> None:
        payload = reveal_payload("100")
        payload["data"].append(dict(payload["data"][0]))
        items = x_reveals.parse_reveal_posts(payload)
        self.assertEqual(len(items), 1)


class XRevealPersistenceTests(unittest.TestCase):
    def test_default_username_resolves_to_user_id_and_is_cached(self) -> None:
        with tempfile.TemporaryDirectory() as directory, mock.patch.dict(os.environ, {}, clear=True):
            app_support_dir = Path(directory)
            seen_params: list[dict] = []
            resolver_calls: list[dict] = []

            def user_resolver(params, **kwargs):
                resolver_calls.append(dict(params))
                self.assertEqual(kwargs.get("bearer_token"), "token")
                return {"data": {"id": "98765", "username": "digimon_tcg_EN", "name": "Digimon Card Game"}}

            def client(params, **kwargs):
                seen_params.append(dict(params))
                return reveal_payload("100") if len(seen_params) == 1 else {"data": []}

            first = x_reveals.check_x_reveals_now(
                app_support_dir,
                bearer_token="token",
                client=client,
                user_resolver=user_resolver,
            )
            second = x_reveals.check_x_reveals_now(
                app_support_dir,
                bearer_token="token",
                client=client,
                user_resolver=lambda params, **kwargs: self.fail("cached username should not resolve again"),
            )
            state = x_reveals.load_x_reveal_state(app_support_dir)

            self.assertEqual(resolver_calls, [{"username": "digimon_tcg_EN"}])
            self.assertEqual(first["sourceAccountId"], "98765")
            self.assertEqual(first["sourceUsername"], "digimon_tcg_EN")
            self.assertFalse(first["sourceAccountFromCache"])
            self.assertTrue(second["sourceAccountFromCache"])
            self.assertEqual(seen_params[0]["userId"], "98765")
            self.assertEqual(seen_params[1]["sinceId"], "100")
            self.assertEqual(state["source_account_id"], "98765")
            self.assertEqual(state["source_username"], "digimon_tcg_EN")

    def test_local_config_file_supplies_token_and_profile_url(self) -> None:
        with tempfile.TemporaryDirectory() as directory, mock.patch.dict(os.environ, {}, clear=True):
            app_support_dir = Path(directory)
            x_reveals.write_json(
                x_reveals.x_reveal_config_path(app_support_dir),
                {
                    "bearerToken": "token-from-config",
                    "profileUrl": "https://x.com/digimon_tcg_EN",
                },
            )
            seen_bearer_tokens: list[str] = []

            def user_resolver(params, **kwargs):
                seen_bearer_tokens.append(kwargs.get("bearer_token"))
                self.assertEqual(params, {"username": "digimon_tcg_EN"})
                return {"data": {"id": "98765", "username": "digimon_tcg_EN"}}

            def client(params, **kwargs):
                seen_bearer_tokens.append(kwargs.get("bearer_token"))
                self.assertEqual(params["userId"], "98765")
                return {"data": []}

            result = x_reveals.check_x_reveals_now(
                app_support_dir,
                client=client,
                user_resolver=user_resolver,
            )

            self.assertTrue(result["ok"])
            self.assertEqual(seen_bearer_tokens, ["token-from-config", "token-from-config"])

    def test_last_seen_persists_and_since_id_is_sent_after_success(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)
            seen_params: list[dict] = []

            def client(params, **kwargs):
                seen_params.append(dict(params))
                if len(seen_params) == 1:
                    return reveal_payload("100")
                return {"data": []}

            first = x_reveals.check_x_reveals_now(app_support_dir, user_id="12345", bearer_token="token", client=client)
            second = x_reveals.check_x_reveals_now(app_support_dir, user_id="12345", bearer_token="token", client=client)
            state = x_reveals.load_x_reveal_state(app_support_dir)

            self.assertEqual(first["last_seen_x_post_id"], "100")
            self.assertEqual(second["sinceId"], "100")
            self.assertEqual(seen_params[1]["sinceId"], "100")
            self.assertEqual(state["last_seen_x_post_id"], "100")
            self.assertEqual(state["source_account_id"], "12345")

    def test_duplicate_post_id_is_not_written_twice(self) -> None:
        with tempfile.TemporaryDirectory() as directory:
            app_support_dir = Path(directory)

            def client(params, **kwargs):
                return reveal_payload("100")

            x_reveals.check_x_reveals_now(app_support_dir, user_id="12345", bearer_token="token", client=client)
            result = x_reveals.check_x_reveals_now(app_support_dir, user_id="12345", bearer_token="token", client=client)
            cache = x_reveals.read_json(x_reveals.reveals_cache_path(app_support_dir), {})

            self.assertEqual(result["newRevealCount"], 0)
            self.assertEqual(len([item for item in cache["items"] if item.get("source") == "x_api"]), 1)


class XRevealSchedulerTests(unittest.TestCase):
    def test_next_reveal_check_uses_riyadh_windows_and_retries(self) -> None:
        tz = x_reveals.timezone_for_name()
        now = datetime(2026, 6, 6, 3, 32, tzinfo=tz)
        self.assertEqual(x_reveals.next_reveal_check_time(now).strftime("%H:%M"), "03:33")

        after_base = datetime(2026, 6, 6, 3, 34, tzinfo=tz)
        self.assertEqual(x_reveals.next_reveal_check_time(after_base).strftime("%H:%M"), "03:35")

        after_retries = datetime(2026, 6, 6, 15, 44, tzinfo=tz)
        next_time = x_reveals.next_reveal_check_time(after_retries)
        self.assertEqual(next_time.strftime("%Y-%m-%d %H:%M"), "2026-06-07 03:33")


@unittest.skipUnless(os.environ.get("RUN_X_LIVE_TEST") == "true" and os.environ.get("X_BEARER_TOKEN"), "live X smoke test is opt-in")
class XRevealLiveSmokeTests(unittest.TestCase):
    def test_live_fetch_is_read_only_unless_write_enabled(self) -> None:
        user_id = os.environ.get("X_REVEAL_USER_ID", "")
        username = os.environ.get("X_REVEAL_USERNAME", x_reveals.DEFAULT_REVEAL_USERNAME)
        profile_url = os.environ.get("X_REVEAL_PROFILE_URL", "")
        if user_id:
            payload = x_reveals.fetchLatestUserPosts({"userId": user_id, "maxResults": 5})
        else:
            lookup_params = {"profileUrl": profile_url} if profile_url else {"username": username}
            user_payload = x_reveals.fetchUserByUsername(lookup_params)
            user_id = str(user_payload.get("data", {}).get("id") or "")
            payload = x_reveals.fetchLatestUserPosts({"userId": user_id, "maxResults": 5})
        self.assertIsInstance(payload, dict)
        if os.environ.get("LIVE_TEST_WRITE") == "true":
            with tempfile.TemporaryDirectory() as directory:
                result = x_reveals.check_x_reveals_now(Path(directory), user_id=user_id, username=username, profile_url=profile_url)
                self.assertTrue(result["ok"])


if __name__ == "__main__":
    unittest.main()
