from __future__ import annotations

from dataclasses import dataclass, field
from typing import Dict, List


@dataclass
class VaultTheme:
    """
    Full semantic color token set for a VaultWares theme.

    Tokens
    ------
    name        : User-facing display name (Title Case).
    mode        : "light" or "dark".
    primary     : Main window background color.
    surface     : Panel / card background (slightly offset from primary).
    surface_alt : Secondary surface for nested elements.
    accent      : Brand accent — primary interactive color.
    accent_muted: A 60%-opacity or desaturated version of the accent.
    text        : Primary body text color.
    text_muted  : Secondary / caption text color.
    text_inverse: Text on accent-colored surfaces.
    border      : Subtle border color for panels and inputs.
    error       : Semantic error / destructive state color.
    error_bg    : Translucent background for error banners.
    warning     : Semantic warning / caution state color.
    warning_bg  : Translucent background for warning banners.
    success     : Semantic success / positive state color.
    success_bg  : Translucent background for success banners.
    info        : Semantic informational state color.
    info_bg     : Translucent background for info banners.
    muted       : Muted/disabled UI elements and placeholder text.
    """
    name: str
    mode: str                # "light" | "dark"
    primary: str             # legacy alias for background (back-compat)
    background: str          # Main window background
    surface: str             # Panel / card background
    surface_alt: str         # Secondary surface
    surface_elevated: str    # Elevated surface (e.g. hovered cards)
    text_primary: str        # Main text
    text_secondary: str      # Secondary text
    accent: str              # Brand accent
    accent_muted: str
    text: str
    text_muted: str
    text_inverse: str
    border: str
    error: str
    error_bg: str
    warning: str
    warning_bg: str
    success: str
    success_bg: str
    info: str
    info_bg: str
    muted: str


class VaultThemeManager:
    """
    Centralized theme manager for VaultWares projects.
    Handles theme definitions, color extraction, and glass-ui style generation.

    All colors are derived from VaultWares brand tokens (Brand/tokens.ts) and
    per-theme complementary/analogous palettes designed for WCAG AA compliance.
    """

    def __init__(self):
        self._themes = [
            VaultTheme(
                name="Golden Slate",
                mode="dark",
                primary="#002B36",
                background="#002B36",
                surface="#0E3A47",
                surface_alt="#001B23",
                surface_elevated="#0E3A47",
                text_primary="#FDF6E3",
                text_secondary="#D8D0B8",
                accent="#CC9B21",
                accent_muted="#B78C1E",
                text="#FDF6E3",
                text_muted="#D8D0B8",
                text_inverse="#002B36",
                border="rgba(253,246,227,0.18)",
                error="#A63D40",
                error_bg="rgba(166,61,64,0.14)",
                warning="#CC9B21",
                warning_bg="rgba(204,155,33,0.15)",
                success="#4ECC21",
                success_bg="rgba(78,204,33,0.13)",
                info="#21B8CC",
                info_bg="rgba(33,184,204,0.13)",
                muted="#586E75",
            ),
            VaultTheme(
                name="Codex Solar Light",
                mode="light",
                primary="#FDF6E3",
                background="#FDF6E3",
                surface="#FDFCF7",
                surface_alt="#F2E9CC",
                surface_elevated="#FDFCF7",
                text_primary="#002B36",
                text_secondary="#586E75",
                accent="#CC9B21",
                accent_muted="#B78C1E",
                text="#002B36",
                text_muted="#586E75",
                text_inverse="#FDF6E3",
                border="rgba(0,43,54,0.14)",
                error="#A63D40",
                error_bg="rgba(166,61,64,0.13)",
                warning="#B78C1E",
                warning_bg="rgba(204,155,33,0.16)",
                success="#4F8B12",
                success_bg="rgba(79,139,18,0.13)",
                info="#0d6473",
                info_bg="rgba(33,184,204,0.13)",
                muted="#93A1A1",
            ),
            VaultTheme(
                name="Catppuccin · Latte",
                mode="light",
                primary="#EFF1F5",
                background="#EFF1F5",
                surface="#F8F9FB",
                surface_alt="#E6E9EF",
                surface_elevated="#F8F9FB",
                text_primary="#4C4F69",
                text_secondary="#6C6F85",
                accent="#8839EF",
                accent_muted="#6C28C7",
                text="#4C4F69",
                text_muted="#6C6F85",
                text_inverse="#EFF1F5",
                border="rgba(76,79,105,0.14)",
                error="#D20F39",
                error_bg="rgba(210,15,57,0.10)",
                warning="#DF8E1D",
                warning_bg="rgba(223,142,29,0.14)",
                success="#40A02B",
                success_bg="rgba(64,160,43,0.12)",
                info="#1E66F5",
                info_bg="rgba(30,102,245,0.10)",
                muted="#9CA0B0",
            ),
            VaultTheme(
                name="Catppuccin · Mocha",
                mode="dark",
                primary="#1E1E2E",
                background="#1E1E2E",
                surface="#313244",
                surface_alt="#181825",
                surface_elevated="#313244",
                text_primary="#CDD6F4",
                text_secondary="#A6ADC8",
                accent="#CBA6F7",
                accent_muted="#A687D9",
                text="#CDD6F4",
                text_muted="#A6ADC8",
                text_inverse="#1E1E2E",
                border="rgba(205,214,244,0.12)",
                error="#F38BA8",
                error_bg="rgba(243,139,168,0.13)",
                warning="#F9E2AF",
                warning_bg="rgba(249,226,175,0.14)",
                success="#A6E3A1",
                success_bg="rgba(166,227,161,0.13)",
                info="#89DCEB",
                info_bg="rgba(137,220,235,0.13)",
                muted="#6C7086",
            ),
            VaultTheme(
                name="Monokai Vault",
                mode="dark",
                primary="#272822",
                background="#272822",
                surface="#2D2E26",
                surface_alt="#1B1C18",
                surface_elevated="#2D2E26",
                text_primary="#F8F8F2",
                text_secondary="#CFC6B4",
                accent="#F92672",
                accent_muted="#C81A5C",
                text="#F8F8F2",
                text_muted="#CFC6B4",
                text_inverse="#272822",
                border="rgba(248,248,242,0.12)",
                error="#FB4934",
                error_bg="rgba(251,73,52,0.14)",
                warning="#E6DB74",
                warning_bg="rgba(230,219,116,0.14)",
                success="#A6E22E",
                success_bg="rgba(166,226,46,0.13)",
                info="#66D9EF",
                info_bg="rgba(102,217,239,0.13)",
                muted="#75715E",
            ),
            VaultTheme(
                name="Dracula Vault",
                mode="dark",
                primary="#282A36",
                background="#282A36",
                surface="#343746",
                surface_alt="#21222C",
                surface_elevated="#343746",
                text_primary="#F8F8F2",
                text_secondary="#C5C5BD",
                accent="#BD93F9",
                accent_muted="#9D70DD",
                text="#F8F8F2",
                text_muted="#C5C5BD",
                text_inverse="#282A36",
                border="rgba(248,248,242,0.12)",
                error="#FF5555",
                error_bg="rgba(255,85,85,0.13)",
                warning="#F1FA8C",
                warning_bg="rgba(241,250,140,0.14)",
                success="#50FA7B",
                success_bg="rgba(80,250,123,0.13)",
                info="#8BE9FD",
                info_bg="rgba(139,233,253,0.13)",
                muted="#6272A4",
            ),
            VaultTheme(
                name="Nord Vault",
                mode="dark",
                primary="#2E3440",
                background="#2E3440",
                surface="#3B4252",
                surface_alt="#242933",
                surface_elevated="#3B4252",
                text_primary="#ECEFF4",
                text_secondary="#D8DEE9",
                accent="#88C0D0",
                accent_muted="#6CA2B5",
                text="#ECEFF4",
                text_muted="#D8DEE9",
                text_inverse="#2E3440",
                border="rgba(236,239,244,0.12)",
                error="#BF616A",
                error_bg="rgba(191,97,106,0.14)",
                warning="#EBCB8B",
                warning_bg="rgba(235,203,139,0.14)",
                success="#A3BE8C",
                success_bg="rgba(163,190,140,0.14)",
                info="#81A1C1",
                info_bg="rgba(129,161,193,0.14)",
                muted="#4C566A",
            ),
            VaultTheme(
                name="Tokyo Night Vault",
                mode="dark",
                primary="#1A1B26",
                background="#1A1B26",
                surface="#24283B",
                surface_alt="#16161E",
                surface_elevated="#24283B",
                text_primary="#C0CAF5",
                text_secondary="#A9B1D6",
                accent="#7AA2F7",
                accent_muted="#5C82D6",
                text="#C0CAF5",
                text_muted="#A9B1D6",
                text_inverse="#1A1B26",
                border="rgba(192,202,245,0.10)",
                error="#F7768E",
                error_bg="rgba(247,118,142,0.13)",
                warning="#E0AF68",
                warning_bg="rgba(224,175,104,0.14)",
                success="#9ECE6A",
                success_bg="rgba(158,206,106,0.13)",
                info="#7DCFFF",
                info_bg="rgba(125,207,255,0.13)",
                muted="#565F89",
            ),
            VaultTheme(
                name="Gruvbox Vault · Dark",
                mode="dark",
                primary="#1D2021",
                background="#1D2021",
                surface="#282828",
                surface_alt="#161616",
                surface_elevated="#282828",
                text_primary="#EBDBB2",
                text_secondary="#BDAE93",
                accent="#FABD2F",
                accent_muted="#D9A21A",
                text="#EBDBB2",
                text_muted="#BDAE93",
                text_inverse="#1D2021",
                border="rgba(235,219,178,0.14)",
                error="#FB4934",
                error_bg="rgba(251,73,52,0.13)",
                warning="#FE8019",
                warning_bg="rgba(254,128,25,0.14)",
                success="#B8BB26",
                success_bg="rgba(184,187,38,0.13)",
                info="#83A598",
                info_bg="rgba(131,165,152,0.14)",
                muted="#665C54",
            ),
            VaultTheme(
                name="Gruvbox Vault · Light",
                mode="light",
                primary="#FBF1C7",
                background="#FBF1C7",
                surface="#F9F5D7",
                surface_alt="#EBDBB2",
                surface_elevated="#F9F5D7",
                text_primary="#3C3836",
                text_secondary="#665C54",
                accent="#B57614",
                accent_muted="#8F5D10",
                text="#3C3836",
                text_muted="#665C54",
                text_inverse="#FBF1C7",
                border="rgba(60,56,54,0.16)",
                error="#9D0006",
                error_bg="rgba(157,0,6,0.10)",
                warning="#AF3A03",
                warning_bg="rgba(175,58,3,0.13)",
                success="#79740E",
                success_bg="rgba(121,116,14,0.13)",
                info="#076678",
                info_bg="rgba(7,102,120,0.12)",
                muted="#A89984",
            ),
            VaultTheme(
                name="Rosé Pine",
                mode="dark",
                primary="#191724",
                background="#191724",
                surface="#1F1D2E",
                surface_alt="#110F1A",
                surface_elevated="#1F1D2E",
                text_primary="#E0DEF4",
                text_secondary="#908CAA",
                accent="#EBBCBA",
                accent_muted="#C99A98",
                text="#E0DEF4",
                text_muted="#908CAA",
                text_inverse="#191724",
                border="rgba(224,222,244,0.10)",
                error="#EB6F92",
                error_bg="rgba(235,111,146,0.13)",
                warning="#F6C177",
                warning_bg="rgba(246,193,119,0.14)",
                success="#9CCFD8",
                success_bg="rgba(156,207,216,0.13)",
                info="#C4A7E7",
                info_bg="rgba(196,167,231,0.13)",
                muted="#6E6A86",
            ),
            VaultTheme(
                name="One Dark Vault",
                mode="dark",
                primary="#282C34",
                background="#282C34",
                surface="#2C313A",
                surface_alt="#21252B",
                surface_elevated="#2C313A",
                text_primary="#ABB2BF",
                text_secondary="#828997",
                accent="#61AFEF",
                accent_muted="#4D90C9",
                text="#ABB2BF",
                text_muted="#828997",
                text_inverse="#282C34",
                border="rgba(171,178,191,0.12)",
                error="#E06C75",
                error_bg="rgba(224,108,117,0.13)",
                warning="#E5C07B",
                warning_bg="rgba(229,192,123,0.14)",
                success="#98C379",
                success_bg="rgba(152,195,121,0.13)",
                info="#56B6C2",
                info_bg="rgba(86,182,194,0.13)",
                muted="#5C6370",
            ),
            VaultTheme(
                name="Ayu Vault · Light",
                mode="light",
                primary="#FAFAF7",
                background="#FAFAF7",
                surface="#FFFFFE",
                surface_alt="#EFEDE5",
                surface_elevated="#FFFFFE",
                text_primary="#5C6166",
                text_secondary="#787B80",
                accent="#FA8D3E",
                accent_muted="#D9762A",
                text="#5C6166",
                text_muted="#787B80",
                text_inverse="#FAFAF7",
                border="rgba(92,97,102,0.14)",
                error="#E65050",
                error_bg="rgba(230,80,80,0.11)",
                warning="#F2AE49",
                warning_bg="rgba(242,174,73,0.14)",
                success="#86B300",
                success_bg="rgba(134,179,0,0.12)",
                info="#399EE6",
                info_bg="rgba(57,158,230,0.12)",
                muted="#ACB6BE",
            ),
            VaultTheme(
                name="GitHub Vault · Light",
                mode="light",
                primary="#FAFAF7",
                background="#FAFAF7",
                surface="#FFFFFE",
                surface_alt="#F0F0EB",
                surface_elevated="#FFFFFE",
                text_primary="#1F2328",
                text_secondary="#59636E",
                accent="#0969DA",
                accent_muted="#054FB1",
                text="#1F2328",
                text_muted="#59636E",
                text_inverse="#FFFFFF",
                border="rgba(31,35,40,0.14)",
                error="#CF222E",
                error_bg="rgba(207,34,46,0.10)",
                warning="#BC8001",
                warning_bg="rgba(188,128,1,0.13)",
                success="#1A7F37",
                success_bg="rgba(26,127,55,0.11)",
                info="#0550AE",
                info_bg="rgba(5,80,174,0.11)",
                muted="#818B98",
            ),
        ]

    def get_themes(self) -> List[VaultTheme]:
        return self._themes

    def get_theme(self, name: str = None, index: int = 0) -> VaultTheme:
        if name:
            for t in self._themes:
                if t.name == name:
                    return t
        if 0 <= index < len(self._themes):
            return self._themes[index]
        return self._themes[0]

    def get_theme_by_name(self, name: str) -> VaultTheme:
        for theme in self._themes:
            if theme.name == name:
                return theme
        return self._themes[0]


    @staticmethod
    def hex_to_rgba(hex_color: str, alpha: float) -> str:
        """Converts hex to rgba for glass-ui elements. Alpha in 0.0–1.0."""
        hex_color = hex_color.lstrip('#')
        r, g, b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
        return f"rgba({r}, {g}, {b}, {alpha})"

    # Legacy alias
    @staticmethod
    def get_glass_rgba(hex_color: str, alpha: int) -> str:
        return VaultThemeManager.hex_to_rgba(hex_color, alpha / 255)
