import React from 'react';
import { Dumbbell, Trophy, Target } from 'lucide-react';
import { FlappingButterfly } from '../ButterflyEntry/ButterflyFlight';

/**
 * StrengthSection Component (Scene D)
 * Sports Motivation & Tournament Empowerment for Tamanna.
 * Highlights athletic discipline, weightlifting grit, and friendly support.
 */
export const StrengthSection = ({ visitorName = "Tamanna" }) => {
  const pillars = [
    {
      icon: <Dumbbell size={24} color="#D62839" />,
      title: "Iron & Discipline",
      text: "Every barbell loaded, every set completed, and every early training session has forged serious strength in you.",
    },
    {
      icon: <Target size={24} color="#526B53" />,
      title: "Mental Focus",
      text: "Tournaments are won between the ears. Lock in your breath, trust your muscle memory, and ignore the noise.",
    },
    {
      icon: <Trophy size={24} color="#C69214" />,
      title: "Platform Poise",
      text: "When you step out there, remember the hours you put in. You earned your spot on that stage—own it with confidence.",
    },
  ];

  return (
    <section className="bf-section" style={{ paddingTop: '50px' }}>
      {/* Script Tag */}
      <div
        style={{
          fontFamily: "var(--font-script, 'Caveat', cursive)",
          fontSize: '1.4rem',
          color: '#8B263E',
          marginBottom: '6px',
        }}
      >
        Tournament & Training Motivation
      </div>

      <h2
        style={{
          fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
          fontSize: 'clamp(1.8rem, 4.5vw, 2.6rem)',
          color: '#2F3E33',
          fontWeight: 700,
          marginBottom: '14px',
        }}
      >
        Strong Girls Keep Growing 💪
      </h2>

      <p
        style={{
          fontSize: '0.98rem',
          color: '#5E6D62',
          maxWidth: '560px',
          margin: '0 auto 28px auto',
          lineHeight: 1.6,
        }}
      >
        Training for competition is no small feat. It takes discipline, sweat, and heart. Here's a reminder of what makes you unstoppable:
      </p>

      {/* Hero Highlight Quote Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, rgba(255, 253, 245, 0.95), rgba(254, 238, 241, 0.9))',
          backdropFilter: 'blur(8px)',
          border: '2px solid rgba(232, 160, 175, 0.5)',
          borderRadius: '24px',
          padding: '28px 24px',
          maxWidth: '680px',
          margin: '0 auto 36px auto',
          boxShadow: '0 12px 28px -6px rgba(180, 50, 70, 0.15)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-16px',
            right: '24px',
          }}
        >
          <FlappingButterfly size={32} color="#D62839" speed="0.28s" />
        </div>

        <p
          style={{
            fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
            fontSize: 'clamp(1.15rem, 3vw, 1.4rem)',
            color: '#7D0E19',
            fontWeight: 700,
            lineHeight: 1.5,
            margin: '0 0 8px 0',
          }}
        >
          "Lift strong. Play strong. Stay confident. You've got this, {visitorName}!"
        </p>

        <p
          style={{
            fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
            fontSize: '0.85rem',
            color: '#526B53',
            margin: 0,
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          — Your Daily Training Reminder
        </p>
      </div>

      {/* Strength Pillars Grid */}
      <div className="bf-strength-grid">
        {pillars.map((pillar, i) => (
          <div key={i} className="bf-strength-card">
            <div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: '#FFFDF5',
                  border: '1px solid rgba(168, 185, 154, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  boxShadow: '0 4px 10px rgba(82, 107, 83, 0.08)',
                }}
              >
                {pillar.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
                  fontSize: '1.2rem',
                  color: '#2F3E33',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                {pillar.title}
              </h3>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: '#5E6D62',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {pillar.text}
              </p>
            </div>

            <div
              style={{
                marginTop: '18px',
                paddingTop: '12px',
                borderTop: '1px dashed rgba(168, 185, 154, 0.3)',
                fontSize: '0.74rem',
                color: '#8B9B88',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Strength Standard #{i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
