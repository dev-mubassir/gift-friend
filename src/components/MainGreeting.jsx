import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BlossomIcon, BotanicalDivider } from './BotanicalDecorations';

/**
 * Screen 4: Main Greeting Hero
 * Warm, encouraging friendship greeting celebrating Tamanna's strength.
 */
export default function MainGreeting({ onScrollNext }) {
  const { greeting, recipient } = siteConfig;

  return (
    <section
      style={{
        minHeight: '90vh',
        minHeight: '90dvh',
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
        {/* Friendly Botanical Badge */}
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
            fontWeight: 600,
            color: '#2F3E33',
            lineHeight: 1.25,
            letterSpacing: '-0.015em',
            marginBottom: '16px',
            textWrap: 'balance',
          }}
        >
          {greeting.heading}
        </h1>

        <BotanicalDivider />

        {/* Main Encouraging Paragraph */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2.6vw, 1.2rem)',
            color: '#3D5042',
            lineHeight: 1.75,
            maxWidth: '600px',
            margin: '0 auto 30px auto',
            fontWeight: 450,
          }}
        >
          {greeting.message}
        </p>

        {/* Cute Friendship Cheering Pill */}
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(255, 253, 245, 0.90)',
            backdropFilter: 'blur(8px)',
            border: '1.5px solid rgba(168, 185, 154, 0.45)',
            borderRadius: '20px',
            padding: '12px 28px',
            boxShadow: 'var(--shadow-soft)',
            marginBottom: '36px',
          }}
        >
          <p
            className="font-script"
            style={{
              fontSize: '1.75rem',
              color: '#526B53',
              lineHeight: 1.2,
            }}
          >
            Rooting for your tournament and cheering you on, {recipient.name}! 💪✨
          </p>
        </div>

        {/* Scroll Indicator Prompt */}
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={onScrollNext}
            aria-label="Scroll to motivation and memories"
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
