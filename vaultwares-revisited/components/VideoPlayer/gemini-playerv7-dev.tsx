import React, { useState, useRef, useEffect, ReactNode } from 'react';

// ============================================================================
// 1. ATOMIC VECTOR PRIMITIVES (FIXED & ALIGNED)
// ============================================================================

export const PlayIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 8 5 L 19 12 L 8 19" />
    <line x1={8} y1={19} x2={8} y2={15} /><line x1={8} y1={9} x2={8} y2={5} />
  </svg>
);

export const PrevIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 18 5 L 7 12 L 18 19 Z" />
    <line x1="4" y1="19" x2="4" y2="15" /><line x1="4" y1="9" x2="4" y2="5" />
  </svg>
);

export const NextIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 6 5 L 17 12 L 6 19 Z" />
    <line x1="20" y1="19" x2="20" y2="15" /><line x1="20" y1="9" x2="20" y2="5" />
  </svg>
);

export const UpscaleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 12 20 V 14" /><path d="M 12 10 V 4" />
    <path d="M 7 9 L 12 4 L 17 9" />
    <path d="M 18 14 L 19 16 L 21 17 L 19 18 L 18 20 L 17 18 L 15 17 L 17 16 Z" />
  </svg>
);

export const SubtitlesIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 21 9 L 21 17 C 21 18.1 20.1 19 19 19 L 5 19 C 3.9 19 3 18.1 3 17 L 3 7 C 3 5.9 3.9 5 5 5 L 15 5" />
    <line x1="18" y1="5" x2="19" y2="5" />
    <path d="M 7 10 L 13 10" /><path d="M 7 14 L 17 14" />
  </svg>
);

export const SpeedIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 4 17 A 8 8 0 0 1 18 7" /><path d="M 20 10 A 8 8 0 0 1 20 17" />
    <line x1="12" y1="15" x2="15" y2="10" />
  </svg>
);

export const FullscreenIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 5 9 L 5 5 L 9 5" /><path d="M 15 5 L 19 5 L 19 9" />
    <path d="M 19 15 L 19 19 L 15 19" /><path d="M 5 15 L 5 19" />
  </svg>
);

export const VolumeIcon: React.FC<{ level: 'high' | 'low' | 'mute' }> = ({ level }) => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 7 11 L 7 9 L 11 9 L 15 5 L 15 19 L 11 15 L 7 15 L 7 13" />
    {level === 'mute' && (
      <>
        <line x1="18" y1="9" x2="22" y2="13" />
        <line x1="18" y1="13" x2="21" y2="10" />
      </>
    )}
    {level === 'low' && <path d="M 18 9 A 3 3 0 0 1 18 15" />}
    {level === 'high' && (
      <>
        <path d="M 18 9 A 3 3 0 0 1 18 15" />
        <path d="M 21 7 A 6 6 0 0 1 21 17" />
      </>
    )}
  </svg>
);

export const AutoplayIcon: React.FC<{ isActive: boolean }> = ({ isActive }) => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M 9 7 L 17 7 C 19.8 7 22 9.2 22 12 C 22 14.8 19.8 17 17 17 L 7 17 C 4.2 17 2 14.8 2 12 C 2 9.8 3.7 8 6 7.1" />
    <circle cx={isActive ? "16" : "8"} cy="12" r="3" className={`transition-all duration-200 ease-out ${isActive ? 'stroke-console-text' : 'stroke-currentColor'}`} />
  </svg>
);

// ============================================================================
// 2. REUSABLE MENU CONTROLS & NON-GLOW PILLS
// ============================================================================

interface PlayerMenuButtonProps {
  children: ReactNode;
  tooltipText: string;
  ariaLabel: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  menuContent: ReactNode;
  isActive?: boolean;
}

export const PlayerMenuButton: React.FC<PlayerMenuButtonProps> = ({ children, tooltipText, ariaLabel, isOpen, onToggle, onClose, menuContent, isActive = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);

  return (
    <div ref={containerRef} className="relative flex items-center group">
      <button 
        onClick={onToggle}
        className={`p-2 bg-console-bg border rounded text-console-text hover:bg-console-raised hover:text-white active:scale-95 transition-all duration-150 cursor-pointer focus:outline-none focus:ring-1 focus:ring-console-active 
        ${isOpen || isActive ? 'border-console-text text-white bg-console-raised' : 'border-console-raised hover:border-console-elevated'}`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
      {!isOpen && (
        <span role="tooltip" className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-console-raised border border-console-elevated text-white text-[11px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-20 font-mono tracking-wide">
          {tooltipText}
        </span>
      )}
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 min-w-36 bg-console-surface border border-console-raised rounded shadow-xl py-1 z-30">
          {menuContent}
        </div>
      )}
    </div>
  );
};

interface VaultPillProps {
  text: string;
  variant?: 'standard' | 'online' | 'relay' | 'sync' | 'warning';
  pulse?: boolean;
}

export const VaultPill: React.FC<VaultPillProps> = ({ text, variant = 'standard', pulse = false }) => {
  const scheme = {
    standard: 'border-console-raised text-console-text/60 bg-console-raised/30',
    online: 'border-signal-online/20 text-signal-online/80 bg-signal-online/10',
    relay: 'border-signal-relay/20 text-signal-relay/80 bg-signal-relay/10',
    sync: 'border-signal-sync/20 text-signal-sync/80 bg-signal-sync/10',
    warning: 'border-signal-warning/20 text-signal-warning/80 bg-signal-warning/10',
  };

  return (
    <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border backdrop-blur-[1px] transition-colors duration-200 ${scheme[variant]}`}>
      {pulse && <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 vw-led" />}
      <span className="text-[10px] font-mono tracking-wider font-semibold uppercase">{text}</span>
    </div>
  );
};

// ============================================================================
// 3. MAIN CONSOLE INTERACTION PLATFORM
// ============================================================================

export function VaultWaresVideoPlayer() {
  const [speed, setSpeed] = useState<string>('1.0x');
  const [subtitles, setSubtitles] = useState<string>('Off');
  const [upscaleModel, setUpscaleModel] = useState<string>('Linear');
  const [volume, setVolume] = useState<'high' | 'low' | 'mute'>('high');
  const [autoplay, setAutoplay] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<'speed' | 'subtitles' | 'upscale' | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-[720px] rounded bg-console-surface p-4 border border-console-raised hover:border-console-elevated transition-colors duration-200 shadow-2xl font-mono select-none">
      
      {/* HTML5 Dynamic Stream Element */}
      <div className="w-full h-[405px] bg-console-bg border border-console-raised mb-4 flex items-center justify-center relative overflow-hidden">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          loop
          muted
          playsInline
        />
        
        {/* Absolute Matrix Overlays */}
        <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none z-10 bg-gradient-to-b from-console-bg/30 via-transparent to-console-bg/20">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <VaultPill text="Encrypted Stream" variant="online" pulse />
              <VaultPill text="UHD 4K" variant="relay" />
            </div>
            <VaultPill text="Featured" variant="warning" />
          </div>
          <div className="flex items-center justify-end gap-2">
            <VaultPill text="Latest" variant="sync" />
            <VaultPill text="Top Asset" variant="standard" />
          </div>
        </div>
      </div>

      {/* Progress Metric Deck */}
      <div className="group/timeline mb-4">
        <div className="w-full h-1.5 bg-console-raised rounded-sm relative cursor-pointer hover:bg-console-elevated transition-colors duration-150">
          <div className="h-full w-[35%] bg-console-text/40 rounded-sm group-hover/timeline:bg-console-active transition-colors duration-150" />
          <div className="absolute left-[35%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-console-text rounded-full opacity-0 group-hover/timeline:opacity-100 transition-opacity duration-150" />
        </div>
        <div className="flex justify-between items-center mt-1.5 text-[11px] tracking-wider text-console-text/80">
          <div>02:21</div>
          <div>-04:24 / 06:45</div>
        </div>
      </div>

      {/* Operations Matrix Panel */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <button onClick={togglePlay} className="p-2 bg-console-bg border border-console-raised rounded text-console-text hover:bg-console-raised hover:text-white transition-colors duration-150 cursor-pointer">
            <PlayIcon />
          </button>
          <button className="p-2 bg-console-bg border border-console-raised rounded text-console-text hover:bg-console-raised hover:text-white transition-colors duration-150 cursor-pointer"><PrevIcon /></button>
          <button className="p-2 bg-console-bg border border-console-raised rounded text-console-text hover:bg-console-raised hover:text-white transition-colors duration-150 cursor-pointer"><NextIcon /></button>
          <button 
            onClick={() => setVolume(v => v === 'high' ? 'low' : v === 'low' ? 'mute' : 'high')}
            className="p-2 bg-console-bg border border-console-raised rounded text-white border-console-active transition-colors duration-150 cursor-pointer"
          >
            <VolumeIcon level={volume} />
          </button>
        </div>

        <div className="flex items-center gap-2.5">
          <PlayerMenuButton
            tooltipText="AI Upscaling"
            ariaLabel="AI Upscaling Selector"
            isOpen={activeMenu === 'upscale'}
            onToggle={() => setActiveMenu(prev => prev === 'upscale' ? null : 'upscale')}
            onClose={() => setActiveMenu(null)}
            isActive={upscaleModel !== 'Linear'}
            menuContent={
              ['Linear', 'Neural 2x', 'Aegis Core V3'].map(model => (
                <button
                  key={model}
                  onClick={() => { setUpscaleModel(model); setActiveMenu(null); }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors duration-100 cursor-pointer ${upscaleModel === model ? 'text-white bg-console-active' : 'text-console-text hover:text-white hover:bg-console-bg'}`}
                >
                  {model}
                </button>
              ))
            }
          >
            <UpscaleIcon />
          </PlayerMenuButton>

          <PlayerMenuButton
            tooltipText="Subtitles"
            ariaLabel="Subtitles Selector"
            isOpen={activeMenu === 'subtitles'}
            onToggle={() => setActiveMenu(prev => prev === 'subtitles' ? null : 'subtitles')}
            onClose={() => setActiveMenu(null)}
            isActive={subtitles !== 'Off'}
            menuContent={
              ['Off', 'English [CC]', 'Spanish'].map(lang => (
                <button
                  key={lang}
                  onClick={() => { setSubtitles(lang); setActiveMenu(null); }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors duration-100 cursor-pointer ${subtitles === lang ? 'text-white bg-console-active' : 'text-console-text hover:text-white hover:bg-console-bg'}`}
                >
                  {lang}
                </button>
              ))
            }
          >
            <SubtitlesIcon />
          </PlayerMenuButton>

          <PlayerMenuButton
            tooltipText="Playback Speed"
            ariaLabel="Speed Selector"
            isOpen={activeMenu === 'speed'}
            onToggle={() => setActiveMenu(prev => prev === 'speed' ? null : 'speed')}
            onClose={() => setActiveMenu(null)}
            isActive={speed !== '1.0x'}
            menuContent={
              ['0.5x', '1.0x', '1.5x', '2.0x'].map(rate => (
                <button
                  key={rate}
                  onClick={() => { setSpeed(rate); setActiveMenu(null); }}
                  className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors duration-100 cursor-pointer ${speed === rate ? 'text-white bg-console-active' : 'text-console-text hover:text-white hover:bg-console-bg'}`}
                >
                  {rate}
                </button>
              ))
            }
          >
            <SpeedIcon />
          </PlayerMenuButton>

          <button onClick={() => setAutoplay(!autoplay)} className={`p-2 bg-console-bg border rounded transition-all duration-150 cursor-pointer ${autoplay ? 'border-console-text text-white bg-console-raised' : 'border-console-raised text-console-text'}`}>
            <AutoplayIcon isActive={autoplay} />
          </button>
          <button className="p-2 bg-console-bg border border-console-raised rounded text-console-text hover:bg-console-raised hover:text-white cursor-pointer"><FullscreenIcon /></button>
        </div>
      </div>
    </div>
  );
}
