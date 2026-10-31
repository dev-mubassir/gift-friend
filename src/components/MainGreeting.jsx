import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BotanicalSprig, BlossomIcon, BotanicalDivider } from './BotanicalDecorations';

/**
 * Screen 4: Main Greeting Hero
 * Elegant welcoming hero section with delicate typography,
 * original friendship compliment, and floral aesthetics.
 */
export default function MainGreeting({ onScrollNext }) {
  const { greeting, recipient } = siteConfig;

  return (
    <section
      style={{
        minHeight: '92vh',
        minHeight: '92dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 20px 40px 20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div
        className="animate-fade-in-up"
        style={{
          maxWidth: '680px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        {/* Cute Botanical Badge */}
        <div style={{ marginBottom: '18px' }}>
          <span className="botanical-tag">
            <Sparkles size={13} />
            <span>{greeting.badge}</span>
            <BlossomIcon size={14} color="#526B53" center="#DCE8D5" />
          </span>
        </div>

        {/* Hero Heading */}
        <h1
          className="font-serif"
          style={{
            fontSize: 'clamp(2.1rem, 5.5vw, 3.4rem)',
            fontWeight: 500,
            color: '#2F3E33',
            lineHeight: 1.25,
            letterSpacing: '-0.015em',
            marginBottom: '20px',
            textWrap: 'balance',
          }}
        >
          {greeting.heading}
        </h1>

        <BotanicalDivider />

        {/* Short Original Friendship Compliment */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.8vw, 1.25rem)',
            color: '#526B53',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 34px auto',
            fontWeight: 400,
          }}
        >
          {greeting.subtitle}
        </p>

        {/* Cute Name Callout Card */}
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255, 253, 245, 0.85)',
            backdropFilter: 'blur(8px)',
            border: '1.5px solid rgba(168, 185, 154, 0.4)',
            borderRadius: '20px',
            padding: '12px 28px',
            boxShadow: 'var(--shadow-soft)',
            marginBottom: '36px',
          }}
        >
          <p
            className="font-script"
            style={{
              fontSize: '1.8rem',
              color: '#526B53',
              lineHeight: 1.2,
            }}
          >
            Thank you for simply being you, {recipient.name} 🌷
          </p>
        </div>

        {/* Scroll Indicator Prompt */}
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={onScrollNext}
            aria-label="Scroll to photo memories"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              color: '#637567',
              fontSize: '0.85rem',
              transition: 'color 0.2s',
            }}
          >
            <span>{greeting.scrollPrompt}</span>
            <span className="animate-float-gentle">
              <ChevronDown size={20} color="#526B53" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
