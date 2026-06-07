from __future__ import annotations

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "deck_browser"))

import deck_data


class DeckDataImageFallbackTests(unittest.TestCase):
    def test_unreleased_card_gets_sample_image_fallback(self) -> None:
        entry = {
            "id": "EX12-037",
            "cardNumber": "EX12-037",
            "cardImage": "assets/images/cards/EX12-037.webp",
            "name": {"english": "Omnimon"},
        }

        meta = deck_data.card_metadata_for_code("EX12-037", "Omnimon", {"EX12-037": entry}, {"EX12-037": entry})

        self.assertEqual(
            meta["imageUrl"],
            deck_data.IMAGE_BASE_URL + "assets/images/cards/EX12-037.webp",
        )
        self.assertIn(
            deck_data.IMAGE_BASE_URL + "assets/images/cards/EX12-037-Sample.webp",
            meta["imageFallbackUrls"],
        )

    def test_alt_art_falls_back_to_base_sample_image(self) -> None:
        entry = {
            "id": "EX12-037_P1",
            "cardNumber": "EX12-037",
            "cardImage": "assets/images/cards/EX12-037_P1.webp",
            "name": {"english": "Omnimon"},
        }

        meta = deck_data.card_metadata_for_code("EX12-037_P1", "Omnimon", {"EX12-037_P1": entry}, {"EX12-037": entry})

        self.assertIn(
            deck_data.IMAGE_BASE_URL + "assets/images/cards/EX12-037-Sample.webp",
            meta["imageFallbackUrls"],
        )


if __name__ == "__main__":
    unittest.main()
