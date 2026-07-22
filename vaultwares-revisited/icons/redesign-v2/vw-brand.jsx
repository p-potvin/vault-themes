/* ═══════════════════════════════════════════════════════════════
   VaultWares Brand Assets v2
   Golden V Mark · Accent Ring · Wordmark · Favicon · Lockups
   ─────────────────────────────────────────────────────────────
   The logo is the original golden "V" letterform with a refined
   accent element (dot + ¾-arc ring) in copper-rose. The accent
   replaces the old cyan ring with a warm metallic tone that
   complements the gold without competing with it.
   ═══════════════════════════════════════════════════════════════ */

const VW_GOLD = '#D6A441';
const VW_ACCENT = '#C0785E'; /* copper-rose — the new official accent */
const VW_DARK = '#161320';
const VW_CREAM = 'rgba(237,230,255,0.75)';

/* ── Logo Mark: The Golden V ─────────────────────────────────── 
   A bold, architectural V with a vault-dial accent: copper-rose
   ring + indicator line pointing down (like a safe lock indicator).
   The V is now more weight-forward and iconic.
   ────────────────────────────────────────────────────────────── */

function VaultWaresLogoMark({ size = 64, mode = 'console', showAccent = true, accentStyle = 'key', outlineColor = 'none', className = '', ...props }) {
  const isConsole = mode === 'console';
  const vFill = isConsole ? VW_GOLD : VW_DARK;
  const accentColor = accentStyle === 'violet' ? '#9A7BBF' : VW_ACCENT;
  
  // Outline colors: 'bronze' = copper-rose with opacity, 'violet' = signal violet with opacity, 'none' = no outline
  let outlineStroke = 'none';
  let outlineStrokeWidth = 0;
  if (outlineColor === 'bronze') {
    outlineStroke = VW_ACCENT;
    outlineStrokeWidth = 1.5;
  } else if (outlineColor === 'violet') {
    outlineStroke = '#9A7BBF';
    outlineStrokeWidth = 1.5;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    viewBox="0 0 64 64" fill="none"
    className={className} {...props}>
      {/* The V — thicker, more monumental */}
      <path d="M 4 4 L 27 60 L 37 60 L 60 4 L 46 4 L 32 44 L 18 4 Z"
      fill={vFill} stroke={outlineStroke} strokeWidth={outlineStrokeWidth} />

      {showAccent &&
      <g>
          {accentStyle === 'key' ? (
            <>
              {/* Small dot at the bottom center of V (where stems meet) */}
              <circle cx="32" cy="50" r="3.5" fill={accentColor} stroke="none" />
              
              {/* Line from top of circle going upward (like a key) */}
              <line x1="32" y1="46.5" x2="32" y2="28" stroke={accentColor} strokeWidth="2.2" strokeLinecap="round" />
              
              {/* Small top endpoint decoration */}
              <circle cx="32" cy="26" r="1.8" fill={accentColor} />
            </>
          ) : (
            <>
              {/* Original design: ring + downward line */}
              <circle cx="32" cy="20" r="7.5" stroke={accentColor} strokeWidth="2" fill="none" />
              <line x1="32" y1="27.5" x2="32" y2="35" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
              <circle cx="32" cy="36" r="1.5" fill={accentColor} />
            </>
          )}
        </g>
      }
    </svg>);

}

/* ── Favicon: Compact V ──────────────────────────────────────── 
   Simplified for 16–32px. Thinner V, smaller accent, no arc gap.
   ────────────────────────────────────────────────────────────── */

function VaultWaresFavicon({ size = 32, mode = 'console', showAccent = true, accentStyle = 'key', outlineColor = 'none', className = '', ...props }) {
  const isConsole = mode === 'console';
  const vFill = isConsole ? VW_GOLD : VW_DARK;
  const accentColor = accentStyle === 'violet' ? '#9A7BBF' : VW_ACCENT;
  
  let outlineStroke = 'none';
  let outlineStrokeWidth = 0;
  if (outlineColor === 'bronze') {
    outlineStroke = VW_ACCENT;
    outlineStrokeWidth = 1;
  } else if (outlineColor === 'violet') {
    outlineStroke = '#9A7BBF';
    outlineStrokeWidth = 1;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    viewBox="0 0 32 32" fill="none"
    className={className} {...props}>
      {/* V letterform — compact */}
      <path d="M 2 2 L 14 28 L 18 28 L 30 2 L 24 2 L 16 20 L 8 2 Z"
      fill={vFill} stroke={outlineStroke} strokeWidth={outlineStrokeWidth} />
      
      {showAccent &&
      <g>
          {accentStyle === 'key' ? (
            <>
              {/* Small dot at bottom of V */}
              <circle cx="16" cy="24" r="2" fill={accentColor} stroke="none" />
              {/* Upward line (key stem) */}
              <line x1="16" y1="22" x2="16" y2="12" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
              {/* Top dot */}
              <circle cx="16" cy="10.5" r="1" fill={accentColor} />
            </>
          ) : (
            <>
              {/* Original: ring + downward indicator */}
              <circle cx="16" cy="10" r="4" stroke={accentColor} strokeWidth="1.2" fill="none" />
              <line x1="16" y1="14" x2="16" y2="19" stroke={accentColor} strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="16" cy="20" r="1" fill={accentColor} />
            </>
          )}
        </g>
      }
    </svg>);

}

/* ── Wordmark: V + aultWares ─────────────────────────────────── 
   The V mark acts as the initial letter, with "aultWares"
   continuing in lighter weight to complete the brand name.
   ────────────────────────────────────────────────────────────── */

function VaultWaresWordmark({ height = 48, mode = 'console', accentStyle = 'key', outlineColor = 'none', className = '', ...props }) {
  const isConsole = mode === 'console';
  const vFill = isConsole ? VW_GOLD : VW_DARK;
  const textFill = isConsole ? VW_CREAM : VW_DARK;
  const accentColor = accentStyle === 'violet' ? '#9A7BBF' : VW_ACCENT;
  const ratio = height / 56;
  const w = Math.round(300 * ratio);

  let outlineStroke = 'none';
  let outlineStrokeWidth = 0;
  if (outlineColor === 'bronze') {
    outlineStroke = VW_ACCENT;
    outlineStrokeWidth = 1;
  } else if (outlineColor === 'violet') {
    outlineStroke = '#9A7BBF';
    outlineStrokeWidth = 1;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={height}
    viewBox="0 0 300 56" fill="none"
    className={className} {...props} style={{ height: "48px" }}>
      {/* V mark — stronger weight */}
      <path d="M 3 3 L 24 52 L 31 52 L 52 3 L 39 3 L 27 38 L 15 3 Z"
      fill={vFill} stroke={outlineStroke} strokeWidth={outlineStrokeWidth} />
      
      {accentStyle === 'key' ? (
        <>
          {/* Small dot at bottom of V */}
          <circle cx="27" cy="45" r="2.5" fill={accentColor} stroke="none" />
          {/* Upward line */}
          <line x1="27" y1="42.5" x2="27" y2="22" stroke={accentColor} strokeWidth="1.6" strokeLinecap="round" />
          {/* Top dot */}
          <circle cx="27" cy="20" r="1.3" fill={accentColor} />
        </>
      ) : (
        <>
          {/* Original: ring + downward line */}
          <circle cx="27" cy="15" r="5.5" stroke={accentColor} strokeWidth="1.4" fill="none" />
          <line x1="27" y1="20.5" x2="27" y2="26" stroke={accentColor} strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="27" cy="27" r="1.2" fill={accentColor} />
        </>
      )}
      
      {/* "aultWares" text */}
      <text x="58" y="38" fill={textFill}
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="28" fontWeight="400" letterSpacing="0.5">ault</text>
      <text x="138" y="38" fill={textFill}
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="28" fontWeight="600" letterSpacing="0.5">W</text>
      <text x="164" y="38" fill={textFill}
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="28" fontWeight="400" letterSpacing="0.5">ares</text>
    </svg>);

}

/* ── Text Logo: VAULT WARES (separated) ──────────────────────── */

function VaultWaresTextLogo({ height = 28, color, mode = 'console', className = '', ...props }) {
  const textColor = color || (mode === 'console' ? VW_GOLD : VW_DARK);
  const ratio = height / 28;
  const w = Math.round(260 * ratio);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={w} height={height}
    viewBox="0 0 260 28" fill={textColor} stroke="none"
    className={className} {...props}>
      <text x="0" y="22" fontFamily="Inter, system-ui, sans-serif"
      fontSize="24" fontWeight="700" letterSpacing="3">VAULT</text>
      <text x="112" y="22" fontFamily="Inter, system-ui, sans-serif"
      fontSize="24" fontWeight="400" letterSpacing="3">WARES</text>
    </svg>);

}

/* ── Full Lockup: Mark + Text Logo ───────────────────────────── */

function VaultWaresLockup({ size = 'md', mode = 'console', className = '', layout = 'horizontal', ...props }) {
  const sizes = { sm: { mark: 28, text: 14, gap: 8 }, md: { mark: 40, text: 20, gap: 12 }, lg: { mark: 56, text: 26, gap: 16 } };
  const s = sizes[size] || sizes.md;
  const isVert = layout === 'vertical';

  return (
    <div style={{
      display: 'flex', flexDirection: isVert ? 'column' : 'row',
      alignItems: 'center', gap: s.gap
    }} className={className} {...props}>
      <VaultWaresLogoMark size={s.mark} mode={mode} />
      <VaultWaresTextLogo height={s.text} mode={mode} />
    </div>);

}

/* ── Lockup with Divider ─────────────────────────────────────── */

function VaultWaresLockupDivider({ mode = 'console', className = '' }) {
  const isConsole = mode === 'console';
  const divColor = isConsole ? 'rgba(237,230,255,0.12)' : 'rgba(22,19,32,0.12)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }} className={className}>
      <VaultWaresLogoMark size={40} mode={mode} />
      <div style={{ width: 1, height: 28, background: divColor }}></div>
      <VaultWaresTextLogo height={18} mode={mode} />
    </div>);

}

/* ── Wordmark Lockup ─────────────────────────────────────────── */

function VaultWaresWordmarkLockup({ mode = 'console', className = '' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} className={className}>
      <VaultWaresWordmark height={44} mode={mode} />
    </div>);

}

// Export brand components
Object.assign(window, {
  VW_GOLD, VW_ACCENT, VW_DARK, VW_CREAM,
  VaultWaresLogoMark,
  VaultWaresFavicon,
  VaultWaresWordmark,
  VaultWaresTextLogo,
  VaultWaresLockup,
  VaultWaresLockupDivider,
  VaultWaresWordmarkLockup
});