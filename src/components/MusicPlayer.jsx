import React, { useState } from 'react';
import { Play, Pause, Music, Volume2, VolumeX, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/content';

/**
 * Floating Persistent Music Player
 * Displays subtle visualizer, track information, and controls.
 */
export default function MusicPlayer({ audio }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isPlaying, togglePlay, isMuted, toggleMute, hasError, needsUserInteraction } = audio;
  const { title, artist } = siteConfig.music;

  if (hasError) {
    return (
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 50,
          background: 'rgba(255, 253, 245, 0.9)',
          backdropFilter: 'blur(8px)',
          border: '1px solid #E8C7CC',
          padding: '8px 14px',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.8rem',
          color: '#6B7C70',
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
        }}
      >
        <AlertCircle size={15} color="#E8C7CC" />
        <span>Audio ready to play</span>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '8px',
      }}
    >
      {/* If autoplay was blocked by mobile browser policy, show gentle prompt */}
      {needsUserInteraction && !isPlaying && (
        <div
          onClick={togglePlay}
          className="animate-fade-in-scale"
          style={{
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #526B53, #3F5340)',
            color: '#FFFDF5',
            padding: '8px 14px',
            borderRadius: '16px',
            fontSize: '0.82rem',
            boxShadow: '0 8px 20px rgba(82, 107, 83, 0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '4px',
          }}
        >
          <span>🎵 Tap to play background music</span>
        </div>
      )}

      {/* Main Floating Capsule */}
      <div
        style={{
          background: 'rgba(255, 253, 245, 0.92)',
          backdropFilter: 'blur(10px)',
          border: '1.5px solid rgba(168, 185, 154, 0.4)',
          borderRadius: '9999px',
          padding: '6px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 24px -4px rgba(82, 107, 83, 0.16)',
          transition: 'all 0.3s ease',
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: isPlaying ? 'linear-gradient(135deg, #526B53, #3E523F)' : '#DCE8D5',
            color: isPlaying ? '#FFFDF5' : '#526B53',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s, background 0.2s',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.92)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {isPlaying ? <Pause size={17} /> : <Play size={17} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Track Title and Visualizer */}
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            paddingRight: '6px',
          }}
        >
          <div style={{ textAlign: 'left', lineHeight: 1.2 }}>
            <p
              style={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: '#2F3E33',
                maxWidth: '120px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {title}
            </p>
            <p style={{ fontSize: '0.68rem', color: '#637567' }}>{artist}</p>
          </div>

          {/* Equalizer Bars */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '2px',
              height: '18px',
              width: '16px',
              marginLeft: '2px',
            }}
          >
            <span
              style={{
                width: '3px',
                background: '#526B53',
                borderRadius: '2px',
                height: isPlaying ? '14px' : '4px',
                animation: isPlaying ? 'equalizeBar1 0.8s ease-in-out infinite' : 'none',
              }}
            />
            <span
              style={{
                width: '3px',
                background: '#A8B99A',
                borderRadius: '2px',
                height: isPlaying ? '10px' : '6px',
                animation: isPlaying ? 'equalizeBar2 0.7s ease-in-out infinite' : 'none',
              }}
            />
            <span
              style={{
                width: '3px',
                background: '#E8C7CC',
                borderRadius: '2px',
                height: isPlaying ? '16px' : '4px',
                animation: isPlaying ? 'equalizeBar3 0.9s ease-in-out infinite' : 'none',
              }}
            />
          </div>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute" : "Mute"}
          style={{
            padding: '6px',
            color: '#637567',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          }}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={16} color="#E8C7CC" /> : <Volume2 size={16} />}
        </button>
      </div>
    </div>
  );
}

