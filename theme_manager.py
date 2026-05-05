from __future__ import annotations

from dataclasses import dataclass
from typing import Dict, List


@dataclass
class VaultTheme:
    name: str
    mode: str                # "light" | "dark"
    primary: str             # legacy alias for background (back-compat)
    background: str
    surface: str
    surface_elevated: str
    text_primary: str
    text_secondary: str
    text_muted: str
    accent: str
    accent_hover: str
    border_subtle: str
    focus_ring: str
    success: str
    warning: str
    danger: str

    def to_qss_map(self) -> Dict[str, str]:
        return {
            "background": self.background,
            "surface": self.surface,
            "surface_elevated": self.surface_elevated,
            "text_primary": self.text_primary,
            "text_secondary": self.text_secondary,
            "text_muted": self.text_muted,
            "accent": self.accent,
            "accent_hover": self.accent_hover,
            "border_subtle": self.border_subtle,
            "focus_ring": self.focus_ring,
            "success": self.success,
            "warning": self.warning,
            "danger": self.danger,
            "primary": self.primary,
        }


class VaultThemeManager:
    """Centralised theme manager for VaultWares projects."""

    def __init__(self) -> None:
        self._themes: List[VaultTheme] = [
            VaultTheme(
                "Vintage Velvet", "light",
                primary="#F5F5DC", background="#F5F5DC", surface="#EEEAD0",
                surface_elevated="#F8F6E8", text_primary="#1a1a1a", text_secondary="#4a3527",
                text_muted="#8a7060", accent="#800020", accent_hover="#9a0025",
                border_subtle="#d4ccaa", focus_ring="#800020",
                success="#2d6a2d", warning="#a07000", danger="#cc1836",
            ),
            VaultTheme(
                "Cyberpunk Cinder", "dark",
                primary="#073642", background="#002b36", surface="#073642",
                surface_elevated="#0d4558", text_primary="#fdf6e3", text_secondary="#93a1a1",
                text_muted="#657b83", accent="#CB4B16", accent_hover="#e05818",
                border_subtle="#144250", focus_ring="#CB4B16",
                success="#859900", warning="#b58900", danger="#dc322f",
            ),
            VaultTheme(
                "Golden Slate", "dark",
                primary="#4A5459", background="#2b3035", surface="#333d42",
                surface_elevated="#3e484e", text_primary="#f0ede8", text_secondary="#a9b4ba",
                text_muted="#6e7e86", accent="#D4AF37", accent_hover="#e8c84a",
                border_subtle="#445058", focus_ring="#D4AF37",
                success="#5a9048", warning="#D4AF37", danger="#c0392b",
            ),
            VaultTheme(
                "Modern Monolith", "light",
                primary="#FAF9F6", background="#FAF9F6", surface="#F0EEE9",
                surface_elevated="#F8F7F4", text_primary="#1a1a1a", text_secondary="#4a4a4a",
                text_muted="#9a9a9a", accent="#333333", accent_hover="#555555",
                border_subtle="#DDDBD5", focus_ring="#333333",
                success="#2e7d32", warning="#e65100", danger="#c62828",
            ),
            VaultTheme(
                "Crimson Bloom", "dark",
                primary="#8B0000", background="#1a0000", surface="#2d0000",
                surface_elevated="#400000", text_primary="#fdf0f0", text_secondary="#cc9999",
                text_muted="#aa6666", accent="#FFC0CB", accent_hover="#FFD5DB",
                border_subtle="#4d0000", focus_ring="#FFC0CB",
                success="#66aa66", warning="#cc8822", danger="#ff4444",
            ),
            VaultTheme(
                "Ocean Mist", "light",
                primary="#D3D3D3", background="#D3D3D3", surface="#C5C5C5",
                surface_elevated="#DCDCDC", text_primary="#1a2a3a", text_secondary="#3a5a70",
                text_muted="#6a8a9a", accent="#006994", accent_hover="#0080b8",
                border_subtle="#b9b9b9", focus_ring="#006994",
                success="#2e7d32", warning="#e65100", danger="#c62828",
            ),
            VaultTheme(
                "Neon Void", "dark",
                primary="#222222", background="#111111", surface="#1a1a1a",
                surface_elevated="#222222", text_primary="#e8e8e8", text_secondary="#aaaaaa",
                text_muted="#666666", accent="#00FFFF", accent_hover="#33FFFF",
                border_subtle="#2e2e2e", focus_ring="#00FFFF",
                success="#00cc66", warning="#cc9900", danger="#ff3355",
            ),
            VaultTheme(
                "Royal Tangerine", "dark",
                primary="#4B0082", background="#2a0050", surface="#370070",
                surface_elevated="#440090", text_primary="#f5f0ff", text_secondary="#bb99dd",
                text_muted="#8855bb", accent="#F28500", accent_hover="#FF9910",
                border_subtle="#4d0090", focus_ring="#F28500",
                success="#66bb44", warning="#F28500", danger="#ff3344",
            ),
            VaultTheme(
                "Amethyst Frost", "light",
                primary="#FDFDFD", background="#FDFDFD", surface="#F5F0F8",
                surface_elevated="#FEFBFF", text_primary="#1a001a", text_secondary="#5a2a5a",
                text_muted="#9a6a9a", accent="#800080", accent_hover="#aa00aa",
                border_subtle="#e8dde8", focus_ring="#800080",
                success="#2e7d32", warning="#e65100", danger="#c62828",
            ),
            VaultTheme(
                "Solarized Light Revisited", "light",
                primary="#fef6e2", background="#fef6e2", surface="#f5ecce",
                surface_elevated="#fdfaf0", text_primary="#002B36", text_secondary="#657b83",
                text_muted="#839496", accent="#b58900", accent_hover="#CC9B21",
                border_subtle="#e0d4b0", focus_ring="#b58900",
                success="#859900", warning="#CC9B21", danger="#dc322f",
            ),
        ]

    def get_themes(self) -> List[VaultTheme]:
        return self._themes

    def get_theme(self, index: int) -> VaultTheme:
        if 0 <= index < len(self._themes):
            return self._themes[index]
        return self._themes[2]  # Default: Golden Slate

    def get_theme_by_name(self, name: str) -> VaultTheme:
        for theme in self._themes:
            if theme.name == name:
                return theme
        return self._themes[2]  # Default: Golden Slate

    @staticmethod
    def get_glass_rgba(hex_color: str, alpha: int) -> str:
        """Convert hex to rgba for glass-ui elements."""
        hex_color = hex_color.lstrip("#")
        r, g, b = tuple(int(hex_color[i : i + 2], 16) for i in (0, 2, 4))
        return f"rgba({r}, {g}, {b}, {alpha})"
