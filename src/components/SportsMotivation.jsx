import React from 'react';
import { Dumbbell, Flame, Target, Trophy, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BlossomIcon, BotanicalDumbbell, BotanicalDivider } from './BotanicalDecorations';

/**
 * Screen: Sports Motivation Section
 * Dedicated encouraging section for Tamanna's weightlifting and upcoming tournament.
 * Blends athletic motivation with the gentle cream & sage botanical gift aesthetic.
 */
export default function SportsMotivation() {
  const { sportsMotivation, recipient } = siteConfig;

  // Icon mapping
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Dumbbell':
        return <Dumbbell size={20} color="#526B53" />;
      case 'Flame':
        return <Flame size={20} color="#D4A373" />;
      case 'Target':
        return <Target size={20} color="#526B53" />;
      case 'Trophy':
      default:
        return <Trophy size={20} color="#D4A373" />;
    }
  };

  return (
    <section
      id="sports-motivation"
      style={{
        padding: '70px 16px 85px 16px',
        maxWidth: '880px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <div style={{ marginBottom: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          <span className="botanical-tag">
            <Dumbbell size={13} />
            <span>{sportsMotivation.badge}</span>
            <BlossomIcon size={14} color="#526B53" center="#DCE8D5" />
          </span>
        </div>

        {/* Delicate Dumbbell Illustration with Leaves */}
        <div style={{ marginBottom: '16px' }} className="animate-float-gentle">
          <BotanicalDumbbell size={52} />
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.8rem)',
            fontWeight: 600,
            color: '#2F3E33',
            marginBottom: '10px',
          }}
        >
          {sportsMotivation.heading}
        </h2>

        <p
          style={{
            fontSize: '1.02rem',
            color: '#526B53',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}
        >
          {sportsMotivation.subtitle}
        </p>
      </div>

      {/* Motivational Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          padding: '8px',
          marginBottom: '36px',
        }}
      >
        {sportsMotivation.cards.map((item) => (
          <div
            key={item.id}
            style={{
              background: 'rgba(255, 253, 245, 0.90)',
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
            <div>
              {/* Header with icon and tag */}
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
                    width: '42px',
                    height: '42px',
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
                    color: '#526B53',
                    fontWeight: 600,
                    background: 'rgba(220, 232, 213, 0.5)',
                    padding: '4px 10px',
                    borderRadius: '9999px',
                  }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Motivational Message */}
              <p
                style={{
                  fontSize: '0.98rem',
                  color: '#2F3E33',
                  lineHeight: 1.68,
                  fontWeight: 450,
                }}
              >
                "{item.text}"
              </p>
            </div>

            {/* Bottom Floral accent */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '16px',
                opacity: 0.5,
              }}
            >
              <BlossomIcon size={18} color="#A8B99A" />
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted Motivational Banner */}
      <div
        className="animate-float-gentle"
        style={{
          background: 'linear-gradient(135deg, rgba(82, 107, 83, 0.95) 0%, rgba(61, 82, 62, 0.95) 100%)',
          color: '#FFFDF5',
          borderRadius: '24px',
          padding: '24px 28px',
          textAlign: 'center',
          boxShadow: '0 12px 30px -6px rgba(82, 107, 83, 0.35)',
          border: '1.5px solid rgba(220, 232, 213, 0.3)',
          maxWidth: '680px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '8px', opacity: 0.9 }}>
          <Sparkles size={18} color="#DCE8D5" />
          <span style={{ fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
            Game Day Mantra
          </span>
          <Sparkles size={18} color="#DCE8D5" />
        </div>

        <p
          className="font-serif"
          style={{
            fontSize: 'clamp(1.2rem, 3.2vw, 1.55rem)',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '0.01em',
          }}
        >
          "{sportsMotivation.highlight}"
        </p>
      </div>
    </section>
  );
}

