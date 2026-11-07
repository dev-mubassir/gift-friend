import React from 'react';
import { Volume2, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BotanicalWreath, BlossomIcon, BotanicalSprig } from './BotanicalDecorations';

/**
 * Screen 1: Welcome Screen
 * Opening scene with botanical wreath, volume notice,
 * and supportive friendship introduction for Tamanna.
 */
export default function WelcomeScreen({ onStart, onOpenButterfly }) {
  const { welcome } = siteConfig;

  return (
    <div
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Decorative Floating Sprigs in Corners */}
      <div
        className="animate-float-slow"
        style={{
          position: 'absolute',
          top: '30px',
          left: '20px',
          opacity: 0.7,
          pointerEvents: 'none',
        }}
      >
        <BotanicalSprig className="w-14 h-14" color="#A8B99A" />
      </div>

      <div
        className="animate-float-gentle"
        style={{
          position: 'absolute',
          top: '40px',
          right: '25px',
          opacity: 0.7,
          pointerEvents: 'none',
          transform: 'scaleX(-1)',
        }}
      >
        <BotanicalSprig className="w-12 h-12" color="#E8C7CC" />
      </div>

      {/* Main Content Container */}
      <div
        className="animate-fade-in-up"
        style={{
          maxWidth: '480px',
          width: '100%',
          background: 'rgba(255, 253, 245, 0.90)',
          backdropFilter: 'blur(12px)',
          borderRadius: '28px',
          padding: '42px 28px',
          border: '1.5px solid rgba(168, 185, 154, 0.35)',
          boxShadow: '0 20px 45px -12px rgba(82, 107, 83, 0.14), 0 8px 16px -4px rgba(82, 107, 83, 0.06)',
          position: 'relative',
        }}
      >
        {/* Soft Botanical Wreath Centerpiece */}
        <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 16px auto' }}>
          <BotanicalWreath className="w-full h-full animate-sway" />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <BlossomIcon size={38} color="#E8C7CC" center="#D4A373" />
          </div>
        </div>

        {/* Opening Heading */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(1.75rem, 4.8vw, 2.2rem)',
            fontWeight: 600,
            color: '#2F3E33',
            letterSpacing: '-0.01em',
            marginBottom: '12px',
            lineHeight: 1.3,
          }}
        >
          {welcome.heading}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: '1rem',
            color: '#526B53',
            lineHeight: 1.6,
            marginBottom: '26px',
            padding: '0 8px',
            fontWeight: 450,
          }}
        >
          {welcome.subtitle}
        </p>

        {/* Audio Volume Notice */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(220, 232, 213, 0.45)',
            border: '1px solid rgba(168, 185, 154, 0.4)',
            borderRadius: '16px',
            padding: '10px 18px',
            marginBottom: '32px',
            fontSize: '0.86rem',
            color: '#2F3E33',
            lineHeight: 1.45,
            textAlign: 'left',
          }}
        >
          <Volume2 size={20} color="#526B53" style={{ flexShrink: 0 }} />
          <span>{welcome.audioHint}</span>
        </div>

        {/* Continue Action Button */}
        <div>
          <button
            onClick={onStart}
            className="btn-botanical"
            style={{
              width: '100%',
              maxWidth: '260px',
              fontSize: '1.05rem',
              letterSpacing: '0.02em',
              gap: '10px',
            }}
          >
            <span>{welcome.buttonText}</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Independent Butterfly Greeting Card Entry Pill */}
        {onOpenButterfly && (
          <div style={{ marginTop: '16px' }}>
            <button
              onClick={onOpenButterfly}
              type="button"
              style={{
                background: 'rgba(255, 240, 243, 0.85)',
                border: '1.5px dashed rgba(232, 160, 175, 0.65)',
                borderRadius: '9999px',
                padding: '8px 20px',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#8B263E',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(214, 40, 57, 0.08)',
              }}
            >
              <span>🦋</span> Open Butterfly Card
            </button>
          </div>
        )}
      </div>

      {/* Footer subtle note */}
      <div style={{ marginTop: '24px', opacity: 0.75 }}>
        <p className="font-script" style={{ fontSize: '1.25rem', color: '#526B53' }}>
          a little corner of encouragement from your friend 🌿
        </p>
      </div>
    </div>
  );
}
