## 2026-05-05 - VaultCoreBadge Accessibility and UX Improvements
**Learning:** Adding a native HTML title attribute and cursor: help is a simple, lightweight way to add tooltip-like hints without needing heavy components. And role="status" + aria-label ensures screen readers get the context they need for important status badges.
**Action:** Use this simple pattern for status badges instead of heavier tooltip wrappers when only simple text explanation is needed.
## 2026-05-06 - VaultCoreBadge Accessibility and UX Improvements
**Learning:** Adding a native HTML title attribute and cursor: help is a simple, lightweight way to add tooltip-like hints without needing heavy components. And role="status" + aria-label ensures screen readers get the context they need for important status badges.
**Action:** Use this simple pattern for status badges instead of heavier tooltip wrappers when only simple text explanation is needed.

## 2026-05-07 - Brand Guide Token Swatch Copy-to-Clipboard Enhancement
**Learning:** When displaying reference data like hex color codes in a brand guide or style dictionary, users frequently need to copy them. Providing a one-click copy mechanism wrapped in a semantic `<button>` with clear focus states (`focus-visible:ring-2`) and aria-labels improves workflow efficiency and keyboard accessibility significantly compared to static text.
**Action:** When creating visual reference UI (swatches, tokens, IDs), always consider adding an inline copy action with visual and screen-reader accessible feedback (e.g., swapping a copy icon to a check icon temporarily).
