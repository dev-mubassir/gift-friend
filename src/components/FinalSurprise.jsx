import React, { useState } from 'react';
import { RotateCcw, Sparkles, Heart } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BlossomIcon, DaisyFlower, BotanicalWreath } from './BotanicalDecorations';

/**
 * Screen 8: Final Surprise
 * Final heartfelt blessing, interactive touch-to-plant flower blossoms,
 * sparkling ambient effects, and replay button.
 */
export default function FinalSurprise({ onReplay, onTriggerBurst }) {
  const { finalSurprise, recipient } = siteConfig;
  const [plantedFlowers, setPlantedFlowers] = useState([]);

  // Plant a flower wherever user clicks or taps
  const handleInteraction = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
    const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

    if (x !== undefined && y !== undefined) {
      const flowerTypes = ['blossom', 'daisy', 'rose'];
      const colors = ['#E8C7CC', '#EBC9B5', '#FFFDF5', '#DCE8D5'];
      const newFlower = {
        id: Date.now() + Math.random(),
        x,
        y,
        type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setPlantedFlowers((prev) => [...prev.slice(-15), newFlower]); // Keep up to 15 active
      onTriggerBurst?.();

      // Clean up after 2.2 seconds
      setTimeout(() => {
        setPlantedFlowers((prev) => prev.filter((f) => f.id !== newFlower.id));
      }, 2200);
    }
  };

  return (
    <section
      id="final-surprise"
      onClick={handleInteraction}
      style={{
        minHeight: '85vh',
        minHeight: '85dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 20px 80px 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* Interactive planted flowers */}
      {plantedFlowers.map((flower) => (
        <div
          key={flower.id}
          style={{
            position: 'absolute',
            left: `${flower.x}px`,
            top: `${flower.y}px`,
            pointerEvents: 'none',
            zIndex: 25,
            animation: 'plantFlower 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          {flower.type === 'daisy' ? (
            <DaisyFlower size={32} />
          ) : (
            <BlossomIcon size={34} color={flower.color} center="#D4A373" />
          )}
        </div>
      ))}

      {/* Main Glass Card */}
      <div
        className="animate-fade-in-up"
        style={{
          maxWidth: '540px',
          width: '100%',
          background: 'rgba(255, 253, 245, 0.92)',
          backdropFilter: 'blur(12px)',
          borderRadius: '30px',
          padding: '48px 28px',
          border: '1.5px solid rgba(168, 185, 154, 0.4)',
          boxShadow: 'var(--shadow-medium)',
          position: 'relative',
          pointerEvents: 'auto',
        }}
        onClick={(e) => {
          // Allow planting flowers inside the card too
          handleInteraction(e);
        }}
      >
        {/* Animated Botanical Wreath Center */}
        <div style={{ position: 'relative', width: '110px', height: '110px', margin: '0 auto 18px auto' }}>
          <BotanicalWreath className="w-full h-full animate-float-gentle" />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <BlossomIcon size={36} color="#E8C7CC" center="#D4A373" />
          </div>
        </div>

        {/* Surprise Main Heading */}
        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2.1rem, 5vw, 2.9rem)',
            fontWeight: 600,
            color: '#2F3E33',
            marginBottom: '14px',
            lineHeight: 1.25,
          }}
        >
          {finalSurprise.heading}
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1.05rem',
            color: '#526B53',
            lineHeight: 1.65,
            maxWidth: '440px',
            margin: '0 auto 24px auto',
          }}
        >
          {finalSurprise.subheading}
        </p>

        {/* Interactive Garden Hint */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(220, 232, 213, 0.5)',
            padding: '8px 18px',
            borderRadius: '9999px',
            fontSize: '0.84rem',
            color: '#526B53',
            marginBottom: '32px',
          }}
        >
          <Sparkles size={14} />
          <span>{finalSurprise.interactiveHint}</span>
        </div>

        {/* Replay Button */}
        <div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onReplay();
            }}
            className="btn-botanical"
            style={{
              padding: '14px 32px',
              fontSize: '1rem',
              gap: '10px',
            }}
          >
            <RotateCcw size={17} />
            <span>{finalSurprise.replayButtonText}</span>
          </button>
        </div>
      </div>

      {/* Sweet Sign-off */}
      <div style={{ marginTop: '28px', opacity: 0.8 }}>
        <p className="font-script" style={{ fontSize: '1.4rem', color: '#526B53' }}>
          always wishing you peace, flowers & joy ♡
        </p>
      </div>
    </section>
  );
}
