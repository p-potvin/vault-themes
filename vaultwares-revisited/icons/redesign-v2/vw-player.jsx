/* ═══════════════════════════════════════════════════════════════
   VaultWares Video Player
   A security-camera / surveillance-style video player control
   that matches the VaultWares console aesthetic.
   ═══════════════════════════════════════════════════════════════ */

function VWVideoPlayer({ mode = 'console' }) {
  const [playing, setPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(32);
  const [volume, setVolume] = React.useState(75);
  const [muted, setMuted] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);
  const [currentTime] = React.useState('00:03:14');
  const [duration] = React.useState('00:10:47');

  const isConsole = mode === 'console';

  const playerShellStyles = {
    width: '100%',
    maxWidth: 720,
    borderRadius: 20,
    overflow: 'hidden',
    border: isConsole ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(22,19,32,0.08)',
    background: isConsole ? '#0D0B14' : '#EDE7DA',
    fontFamily: "'JetBrains Mono', monospace",
    position: 'relative',
  };

  const videoAreaStyles = {
    width: '100%',
    aspectRatio: '16/9',
    background: isConsole
      ? 'linear-gradient(145deg, #0a0812 0%, #161320 50%, #1a1528 100%)'
      : 'linear-gradient(145deg, #d4cfc4 0%, #e8e3d6 50%, #ded8cb 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
  };

  /* Scanline overlay for console mode */
  const scanlineOverlay = isConsole ? (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none',
      background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)',
      mixBlendMode: 'multiply',
    }}/>
  ) : null;

  /* Timestamp overlay (top-left) */
  const timestampOverlay = (
    <div style={{
      position: 'absolute', top: 12, left: 14,
      display: 'flex', alignItems: 'center', gap: 8,
      fontSize: 11, letterSpacing: '0.05em',
      color: isConsole ? 'var(--vault-signal-online)' : '#4A5459',
      opacity: 0.9,
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%',
        background: isConsole ? 'var(--vault-signal-alert)' : '#c44',
        boxShadow: isConsole ? '0 0 6px var(--vault-signal-alert)' : 'none',
        animation: playing ? 'ledPulse 2s infinite' : 'none',
      }}/>
      <span>CAM-04 ● SECTOR-7N</span>
    </div>
  );

  /* Timestamp overlay (top-right) */
  const dateOverlay = (
    <div style={{
      position: 'absolute', top: 12, right: 14,
      fontSize: 11, letterSpacing: '0.05em',
      color: isConsole ? 'rgba(237,230,255,0.5)' : 'rgba(22,19,32,0.4)',
    }}>
      2025.06.14 — 02:31:47
    </div>
  );

  /* Center play button */
  const centerPlay = !playing && (
    <div style={{
      width: 64, height: 64, borderRadius: '50%',
      background: isConsole ? 'rgba(214,164,65,0.15)' : 'rgba(22,19,32,0.08)',
      border: isConsole ? '2px solid var(--vault-console-gold)' : '2px solid #161320',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s',
      color: isConsole ? 'var(--vault-console-gold)' : '#161320',
    }}
    onClick={() => setPlaying(true)}
    >
      <IconPlay width={28} height={28} />
    </div>
  );

  /* Corner bracket marks (surveillance style) */
  const bracketColor = isConsole ? 'rgba(214,164,65,0.25)' : 'rgba(22,19,32,0.12)';
  const bLen = 24;
  const bW = 1.5;
  const cornerBrackets = (
    <React.Fragment>
      {/* Top-left */}
      <div style={{ position:'absolute', top:32, left:14 }}>
        <div style={{ width:bLen, height:bW, background:bracketColor }}/>
        <div style={{ width:bW, height:bLen, background:bracketColor }}/>
      </div>
      {/* Top-right */}
      <div style={{ position:'absolute', top:32, right:14 }}>
        <div style={{ width:bLen, height:bW, background:bracketColor, marginLeft:'auto' }}/>
        <div style={{ width:bW, height:bLen, background:bracketColor, marginLeft:'auto' }}/>
      </div>
      {/* Bottom-left */}
      <div style={{ position:'absolute', bottom:8, left:14, display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
        <div style={{ width:bW, height:bLen, background:bracketColor }}/>
        <div style={{ width:bLen, height:bW, background:bracketColor }}/>
      </div>
      {/* Bottom-right */}
      <div style={{ position:'absolute', bottom:8, right:14, display:'flex', flexDirection:'column', alignItems:'flex-end', justifyContent:'flex-end' }}>
        <div style={{ width:bW, height:bLen, background:bracketColor, marginLeft:'auto' }}/>
        <div style={{ width:bLen, height:bW, background:bracketColor, marginLeft:'auto' }}/>
      </div>
    </React.Fragment>
  );

  /* Progress bar */
  const progressBarStyles = {
    width: '100%', height: 4, borderRadius: 2,
    background: isConsole ? 'rgba(255,255,255,0.08)' : 'rgba(22,19,32,0.08)',
    cursor: 'pointer',
    position: 'relative',
  };

  const progressFillStyles = {
    width: `${progress}%`, height: '100%', borderRadius: 2,
    background: isConsole ? 'var(--vault-console-gold)' : '#161320',
    transition: 'width 0.1s linear',
    position: 'relative',
  };

  const progressKnob = {
    position: 'absolute', right: -5, top: -3,
    width: 10, height: 10, borderRadius: '50%',
    background: isConsole ? 'var(--vault-console-gold)' : '#161320',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.2s',
  };

  /* Volume bar */
  const volumeBarStyles = {
    width: 60, height: 3, borderRadius: 2,
    background: isConsole ? 'rgba(255,255,255,0.08)' : 'rgba(22,19,32,0.08)',
    cursor: 'pointer',
    position: 'relative',
  };

  const volumeFillStyles = {
    width: muted ? 0 : `${volume}%`, height: '100%', borderRadius: 2,
    background: isConsole ? 'rgba(237,230,255,0.5)' : 'rgba(22,19,32,0.4)',
  };

  const controlColor = isConsole ? 'rgba(237,230,255,0.55)' : 'rgba(22,19,32,0.5)';
  const controlHoverColor = isConsole ? 'var(--vault-console-gold)' : '#161320';

  const IconBtn = ({ children, onClick, active, style: extraStyle }) => {
    const [h, setH] = React.useState(false);
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          background: 'none', border: 'none', padding: 4, cursor: 'pointer',
          color: active ? controlHoverColor : (h ? controlHoverColor : controlColor),
          transition: 'color 0.15s',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          ...extraStyle,
        }}>
        {children}
      </button>
    );
  };

  return (
    <div style={playerShellStyles}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}>
      {/* Video area */}
      <div style={videoAreaStyles} onClick={() => setPlaying(!playing)}>
        {scanlineOverlay}
        {timestampOverlay}
        {dateOverlay}
        {cornerBrackets}
        {centerPlay}

        {/* Center icon grid pattern */}
        {playing && (
          <div style={{ opacity: 0.04, position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: isConsole
              ? 'radial-gradient(circle, rgba(214,164,65,0.4) 1px, transparent 1px)'
              : 'radial-gradient(circle, rgba(22,19,32,0.3) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}/>
        )}
      </div>

      {/* Controls */}
      <div style={{
        padding: '10px 16px 12px',
        display: 'flex', flexDirection: 'column', gap: 8,
        background: isConsole ? '#0D0B14' : '#EDE7DA',
      }}>
        {/* Progress */}
        <div style={progressBarStyles}
             onClick={e => {
               const r = e.currentTarget.getBoundingClientRect();
               setProgress(Math.round(((e.clientX - r.left) / r.width) * 100));
             }}>
          <div style={progressFillStyles}>
            <div style={progressKnob}/>
          </div>
        </div>

        {/* Controls row */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          {/* Left controls */}
          <div style={{ display:'flex', alignItems:'center', gap: 4 }}>
            <IconBtn onClick={() => setPlaying(!playing)}>
              {playing ? <IconPause width={18} height={18}/> : <IconPlay width={18} height={18}/>}
            </IconBtn>
            <IconBtn><IconSkipBack width={16} height={16}/></IconBtn>
            <IconBtn><IconSkipForward width={16} height={16}/></IconBtn>

            <span style={{
              fontSize: 11, letterSpacing: '0.04em', marginLeft: 8,
              color: controlColor, fontFamily: "'JetBrains Mono', monospace",
            }}>
              {currentTime} <span style={{ opacity: 0.4 }}>/</span> {duration}
            </span>
          </div>

          {/* Right controls */}
          <div style={{ display:'flex', alignItems:'center', gap: 4 }}>
            <IconBtn onClick={() => setMuted(!muted)}>
              {muted ? <IconVolumeMute width={16} height={16}/> : <IconVolume width={16} height={16}/>}
            </IconBtn>
            <div style={volumeBarStyles}
                 onClick={e => {
                   const r = e.currentTarget.getBoundingClientRect();
                   setVolume(Math.round(((e.clientX - r.left) / r.width) * 100));
                   setMuted(false);
                 }}>
              <div style={volumeFillStyles}/>
            </div>
            <IconBtn><IconPip width={16} height={16}/></IconBtn>
            <IconBtn><IconSubtitles width={16} height={16}/></IconBtn>
            <IconBtn><IconFullscreen width={16} height={16}/></IconBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { VWVideoPlayer });
