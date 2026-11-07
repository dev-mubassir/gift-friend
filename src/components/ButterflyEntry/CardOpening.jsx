import React, { useState } from 'react';
import { GinghamCard } from './GinghamCard';
import { FlappingButterfly } from './ButterflyFlight';

/**
 * CardOpening Component
 * Orchestrates the full interactive ribbon untying and card opening choreography:
 * 1. Visitor taps ribbon bow
 * 2. Ribbon loops & knot loosen and slide away
 * 3. 3D gatefold panels open outward
 * 4. Swarm of 3D flapping butterflies and sparkles bursts outward
 * 5. Smoothly transitions into the Main Greeting Garden
 */
export const CardOpening = ({ visitorName = "Tamanna", onEnterGarden }) => {
  const [openingPhase, setOpeningPhase] = useState('tied'); // 'tied' | 'untying' | 'opening' | 'bursting' | 'complete'
  const [burstParticles, setBurstParticles] = useState([]);

  // Generate burst particles when opening
  const triggerBurst = () => {
    const colors = ['#FFA6B8', '#E86A82', '#E05B77', '#A8B99A', '#EBC9B5', '#C5B4E3', '#F9D56E'];
    const particles = [];

    // 14 Flapping Butterflies flying outward in all directions
    for (let i = 0; i < 14; i++) {
      const angle = (i / 14) * 2 * Math.PI + (Math.random() * 0.4 - 0.2);
      const distance = 220 + Math.random() * 260;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - 80; // slightly upward bias
      const rot = (Math.random() - 0.5) * 60;
      const scale = 0.85 + Math.random() * 0.5;
      const delay = Math.random() * 0.3;
      const color = colors[i % colors.length];

      particles.push({
        id: `bf-${i}`,
        type: 'butterfly',
        dx: `${dx.toFixed(0)}px`,
        dy: `${dy.toFixed(0)}px`,
        rot: `${rot.toFixed(0)}deg`,
        scale,
        delay: `${delay.toFixed(2)}s`,
        color,
        size: Math.floor(26 + Math.random() * 14),
      });
    }

    // 16 Sparkle and Flower burst dots
    for (let j = 0; j < 16; j++) {
      const angle = (j / 16) * 2 * Math.PI;
      const distance = 140 + Math.random() * 160;
      const sx = Math.cos(angle) * distance;
      const sy = Math.sin(angle) * distance;
      const delay = Math.random() * 0.25;

      particles.push({
        id: `sp-${j}`,
        type: 'sparkle',
        sx: `${sx.toFixed(0)}px`,
        sy: `${sy.toFixed(0)}px`,
        delay: `${delay.toFixed(2)}s`,
        char: ['✨', '🌸', '💖', '⭐', '🌷'][j % 5],
      });
    }

    setBurstParticles(particles);
  };

  const handleUntie = () => {
    if (openingPhase !== 'tied') return;

    // Step 1: Ribbon unties
    setOpeningPhase('untying');

    // Step 2: Panels swing open (after 700ms)
    setTimeout(() => {
      setOpeningPhase('opening');
      triggerBurst();
    }, 750);

    // Step 3: Burst reaches climax (after 1800ms)
    setTimeout(() => {
      setOpeningPhase('bursting');
    }, 1800);

    // Step 4: Complete transition to greeting garden (after 2600ms)
    setTimeout(() => {
      setOpeningPhase('complete');
      if (onEnterGarden) {
        onEnterGarden();
      }
    }, 2700);
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        backgroundColor: '#F7F3E8',
        overflow: 'hidden',
      }}
    >
      {/* Background Soft Floating Ambient Butterflies */}
      <div
        style={{
          position: 'absolute',
          top: '12%',
          left: '8%',
          pointerEvents: 'none',
          animation: 'bfFlightGentleFloat 4s ease-in-out infinite',
          opacity: 0.55,
        }}
      >
        <FlappingButterfly size={28} color="#A8B99A" speed="0.35s" />
      </div>

      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '9%',
          pointerEvents: 'none',
          animation: 'bfFlightGentleFloat 4.6s ease-in-out infinite reverse',
          opacity: 0.6,
        }}
      >
        <FlappingButterfly size={32} color="#FFA6B8" speed="0.32s" />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '12%',
          pointerEvents: 'none',
          animation: 'bfFlightGentleFloat 5s ease-in-out infinite 0.5s',
          opacity: 0.5,
        }}
      >
        <FlappingButterfly size={26} color="#EBC9B5" speed="0.38s" />
      </div>

      {/* Main Gingham Bifold Card */}
      <GinghamCard
        visitorName={visitorName}
        isUntying={openingPhase === 'untying' || openingPhase === 'opening' || openingPhase === 'bursting'}
        isOpen={openingPhase === 'opening' || openingPhase === 'bursting' || openingPhase === 'complete'}
        onUntie={handleUntie}
      />

      {/* Bursting Swarm Particles Layer (Appears when card splits open) */}
      {(openingPhase === 'opening' || openingPhase === 'bursting') && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 0,
            height: 0,
            pointerEvents: 'none',
            zIndex: 100,
          }}
        >
          {burstParticles.map((p) => {
            if (p.type === 'butterfly') {
              return (
                <div
                  key={p.id}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    '--dx': p.dx,
                    '--dy': p.dy,
                    '--scale': p.scale,
                    '--rot': p.rot,
                    animation: `bfCardSwarm 1.4s ${p.delay} cubic-bezier(0.12, 0.8, 0.32, 1) forwards`,
                  }}
                >
                  <FlappingButterfly size={p.size} color={p.color} speed="0.22s" />
                </div>
              );
            }
            return (
              <div
                key={p.id}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  '--sx': p.sx,
                  '--sy': p.sy,
                  fontSize: '1.2rem',
                  animation: `bfSparkleBurst 1.2s ${p.delay} ease-out forwards`,
                }}
              >
                {p.char}
              </div>
            );
          })}
        </div>
      )}

      {/* Skip button for accessibility or quick replay */}
      {openingPhase !== 'tied' && (
        <button
          onClick={() => {
            setOpeningPhase('complete');
            if (onEnterGarden) onEnterGarden();
          }}
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            background: 'rgba(255, 253, 245, 0.85)',
            border: '1px solid rgba(168, 185, 154, 0.4)',
            borderRadius: '9999px',
            padding: '4px 12px',
            fontSize: '0.75rem',
            color: '#526B53',
            cursor: 'pointer',
            zIndex: 90,
          }}
        >
          Skip into garden ➔
        </button>
      )}
    </div>
  );
};
