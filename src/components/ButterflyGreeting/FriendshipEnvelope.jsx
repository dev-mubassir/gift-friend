import React, { useState } from 'react';
import { Mail, MailOpen } from 'lucide-react';
import { FlappingButterfly } from '../ButterflyEntry/ButterflyFlight';

/**
 * FriendshipEnvelope Component (Scene C)
 * 3D Envelope and Letter with realistic folding flap, paper texture,
 * and a heartfelt, motivating friendship letter for Tamanna.
 */
export const FriendshipEnvelope = ({ visitorName = "Tamanna" }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

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
        From My Desk to Yours
      </div>

      <h2
        style={{
          fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
          fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
          color: '#2F3E33',
          fontWeight: 700,
          marginBottom: '14px',
        }}
      >
        A Letter Sealed with Encouragement
      </h2>

      <p
        style={{
          fontSize: '0.95rem',
          color: '#5E6D62',
          maxWidth: '520px',
          margin: '0 auto 30px auto',
          lineHeight: 1.6,
        }}
      >
        Take a breath, relax your shoulders, and read this whenever you need a boost.
      </p>

      {/* 3D Envelope Wrapper */}
      <div className="bf-envelope-stage">
        
        {/* Toggle Button */}
        <button
          onClick={toggleEnvelope}
          style={{
            margin: '0 auto 18px auto',
            background: '#FFFDF5',
            border: '1.5px solid rgba(168, 185, 154, 0.4)',
            borderRadius: '9999px',
            padding: '8px 20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#526B53',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(82, 107, 83, 0.08)',
            transition: 'all 0.25s ease',
          }}
        >
          {isOpen ? <MailOpen size={16} /> : <Mail size={16} />}
          {isOpen ? 'Fold Envelope' : 'Open Letter'}
        </button>

        {/* Floating butterfly on envelope */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '25px',
            zIndex: 25,
            pointerEvents: 'none',
          }}
        >
          <FlappingButterfly size={28} color="#E86A82" speed="0.34s" />
        </div>

        {/* Envelope Body */}
        <div
          className="bf-envelope-box"
          style={{
            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
            minHeight: isOpen ? '420px' : '200px',
          }}
        >
          {/* Letter Sheet */}
          {isOpen ? (
            <div className="bf-letter-paper">
              {/* Little Stamp / Wax Seal Mock */}
              <div
                style={{
                  position: 'absolute',
                  top: '18px',
                  right: '18px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#E86A82',
                  color: '#FFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  boxShadow: '0 2px 6px rgba(232, 106, 130, 0.35)',
                }}
              >
                ★
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
                  fontSize: '1.45rem',
                  color: '#7D0E19',
                  marginBottom: '16px',
                  fontWeight: 600,
                  textAlign: 'left',
                }}
              >
                A Little Note for You, {visitorName}
              </h3>

              <div
                style={{
                  textAlign: 'left',
                  fontSize: '0.94rem',
                  lineHeight: 1.85,
                  color: '#2F3E33',
                  fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
                }}
              >
                <p style={{ margin: '0 0 14px 0' }}>
                  Watching how much energy, discipline, and grit you pour into your training is truly inspiring.
                  Sports and weightlifting demand serious mental toughness, and you show up and do the work day after day.
                </p>

                <p style={{ margin: '0 0 14px 0' }}>
                  Tournaments and big competitions bring nerves to everyone, but don't ever forget how much strength you've already built.
                  Trust your preparation, keep your composure, and let your natural power speak for itself on the platform.
                </p>

                <p style={{ margin: '0 0 20px 0' }}>
                  Whatever happens out there, you've already proven your dedication. Keep your chin high, stay proud of yourself, and keep smiling!
                </p>

                <div
                  style={{
                    marginTop: '22px',
                    fontFamily: "var(--font-script, 'Caveat', cursive)",
                    fontSize: '1.35rem',
                    color: '#526B53',
                  }}
                >
                  Cheering for you in every match,<br />
                  <span style={{ color: '#8B263E', fontWeight: 600 }}>Your Friend</span>
                </div>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px 10px',
              }}
            >
              <div style={{ fontSize: '2.4rem', marginBottom: '10px' }}>✉️</div>
              <p style={{ fontWeight: 600, color: '#526B53', margin: 0 }}>
                Envelope sealed with friend's encouragement.
              </p>
              <p style={{ fontSize: '0.8rem', color: '#7D8C80', margin: '4px 0 0 0' }}>
                Tap "Open Letter" above to unfold.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
