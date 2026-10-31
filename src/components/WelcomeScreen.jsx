import React from 'react';
import { Volume2, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BotanicalWreath, BlossomIcon, BotanicalSprig } from './BotanicalDecorations';

/**
 * Screen 1: Welcome Screen
 * Full-screen welcoming scene with delicate botanical accents,
 * handwritten title, volume hint, and an interactive "I'm ready" button.
 */
export default function WelcomeScreen({ onStart }) {
  const { welcome, recipient } = siteConfig;

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

      {/* Main Content Container with Soft Ivory Card */}
      <div
        className="animate-fade-in-up"
        style={{
          maxWidth: '460px',
          width: '100%',
          background: 'rgba(255, 253, 245, 0.88)',
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

        {/* Handwritten Tagline */}
        <p
          className="font-script"
          style={{
            fontSize: '2rem',
            color: '#526B53',
            marginBottom: '8px',
            lineHeight: 1.2,
          }}
        >
          {welcome.tagline}
        </p>

        {/* Recipient's Greeting Title */}
        <h1
          className="font-serif"
          style={{
            fontSize: '1.9rem',
            fontWeight: 600,
            color: '#2F3E33',
            letterSpacing: '-0.01em',
            marginBottom: '14px',
            lineHeight: 1.25,
          }}
        >
          For {recipient.name}
        </h1>

        {/* Warm Welcome Description */}
        <p
          style={{
            fontSize: '0.98rem',
            color: '#637567',
            lineHeight: 1.65,
            marginBottom: '26px',
            padding: '0 8px',
          }}
        >
          {welcome.message}
        </p>

        {/* Audio Volume Notice */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(220, 232, 213, 0.45)',
            border: '1px solid rgba(168, 185, 154, 0.4)',
            borderRadius: '9999px',
            padding: '8px 18px',
            marginBottom: '32px',
            fontSize: '0.82rem',
            color: '#526B53',
          }}
        >
          <Volume2 size={16} />
          <span>{welcome.audioHint}</span>
        </div>

        {/* Ready Action Button */}
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
      </div>

      {/* Footer subtle floral accent */}
      <div style={{ marginTop: '24px', opacity: 0.65 }}>
        <p className="font-script" style={{ fontSize: '1.25rem', color: '#526B53' }}>
          crafted with love & flowers ♡
        </p>
      </div>
    </div>
  );
}
