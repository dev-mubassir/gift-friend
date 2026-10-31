import React from 'react';
import { Sun, Sparkles, Heart, Flower2, Quote } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BlossomIcon, BotanicalSprig } from './BotanicalDecorations';

/**
 * Screen 6: A Little Appreciation
 * Sweet, respectful, uplifting friendship appreciation cards.
 */
export default function Appreciation() {
  const { appreciation } = siteConfig;

  // Icon mapping
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Sun':
        return <Sun size={20} color="#D4A373" />;
      case 'Sparkles':
        return <Sparkles size={20} color="#526B53" />;
      case 'Heart':
        return <Heart size={20} color="#C86D7A" />;
      case 'Flower2':
      default:
        return <Flower2 size={20} color="#526B53" />;
    }
  };

  return (
    <section
      id="appreciation"
      style={{
        padding: '70px 16px 80px 16px',
        maxWidth: '860px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <div style={{ marginBottom: '14px' }}>
          <span className="botanical-tag">
            <Heart size={13} />
            <span>{appreciation.badge}</span>
          </span>
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
            fontWeight: 500,
            color: '#2F3E33',
            marginBottom: '10px',
          }}
        >
          {appreciation.title}
        </h2>

        <p
          style={{
            fontSize: '1rem',
            color: '#526B53',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {appreciation.subtitle}
        </p>
      </div>

      {/* Appreciation Cards 2x2 Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          padding: '8px',
        }}
      >
        {appreciation.cards.map((item, idx) => (
          <div
            key={item.id}
            style={{
              background: 'rgba(255, 253, 245, 0.88)',
              backdropFilter: 'blur(10px)',
              borderRadius: '22px',
              padding: '28px 24px',
              border: '1.5px solid rgba(168, 185, 154, 0.35)',
              boxShadow: 'var(--shadow-soft)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-medium)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-soft)';
            }}
          >
            {/* Top Tag & Icon */}
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#F7F3E8',
                    border: '1px solid #DCE8D5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {renderIcon(item.icon)}
                </div>

                <span
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#637567',
                    fontWeight: 600,
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Main Friendship Quote */}
              <h3
                className="font-serif"
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 600,
                  color: '#2F3E33',
                  lineHeight: 1.35,
                  marginBottom: '12px',
                }}
              >
                "{item.quote}"
              </h3>

              {/* Elaboration / Detail Note */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#637567',
                  lineHeight: 1.6,
                }}
              >
                {item.detail}
              </p>
            </div>

            {/* Bottom Floral Watermark */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
                opacity: 0.45,
              }}
            >
              <BlossomIcon size={18} color="#A8B99A" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
