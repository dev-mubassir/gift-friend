import React, { useState } from 'react';
import { FlappingButterfly } from '../ButterflyEntry/ButterflyFlight';

/**
 * BloomingFlower Component (Scene A)
 * Large interactive flower centerpiece whose petals blossom and expand as the user scrolls,
 * with pastel colors, floating butterflies, and tap-to-bloom feedback.
 */
export const BloomingFlower = ({ visitorName = "Tamanna", scrollProgress = 0 }) => {
  const [tapBloom, setTapBloom] = useState(false);

  // Compute bloom factor (0.2 to 1.0) based on scroll progress or tap
  const bloomRatio = Math.min(1, Math.max(0, scrollProgress * 2.8));
  const finalBloom = tapBloom ? 1 : Math.max(0.35, bloomRatio);

  const handleTap = () => {
    setTapBloom(true);
    setTimeout(() => setTapBloom(false), 1600);
  };

  const outerPetals = [0, 45, 90, 135, 180, 225, 270, 315];
  const innerPetals = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

  return (
    <section className="bf-section bf-hero-section">
      {/* Little Botanical Greeting Tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(255, 253, 245, 0.9)',
          backdropFilter: 'blur(6px)',
          padding: '6px 16px',
          borderRadius: '9999px',
          border: '1.5px solid rgba(168, 185, 154, 0.4)',
          color: '#526B53',
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          marginBottom: '24px',
          boxShadow: '0 4px 12px rgba(82, 107, 83, 0.08)',
        }}
      >
        <span>🌸</span> A Friendship Garden Made For You
      </div>

      {/* Main Dynamic Heading */}
      <h1
        style={{
          fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
          fontSize: 'clamp(2rem, 5.5vw, 3.2rem)',
          color: '#2F3E33',
          fontWeight: 700,
          lineHeight: 1.25,
          marginBottom: '16px',
          maxWidth: '680px',
        }}
      >
        Hey {visitorName}, <span style={{ color: '#D62839', fontFamily: "var(--font-script, 'Caveat', cursive)" }}>keep blooming!</span> 🌷
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)",
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#5E6D62',
          maxWidth: '560px',
          lineHeight: 1.6,
          marginBottom: '36px',
        }}
      >
        A little reminder from your friend that you're capable of beautiful things and ready for every challenge.
      </p>

      {/* Blooming Centerpiece Flower */}
      <div
        className="bf-bloom-centerpiece"
        onClick={handleTap}
        role="button"
        tabIndex={0}
        title="Tap to make the flower bloom!"
        style={{
          cursor: 'pointer',
          transform: `scale(${0.9 + finalBloom * 0.18})`,
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Hovering butterfly near flower */}
        <div
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-10px',
            zIndex: 10,
            animation: 'bfFlightGentleFloat 3.6s ease-in-out infinite',
          }}
        >
          <FlappingButterfly size={34} color="#E86A82" speed="0.26s" />
        </div>

        <svg
          viewBox="0 0 240 240"
          width="100%"
          height="100%"
          style={{ overflow: 'visible', filter: 'drop-shadow(0 12px 24px rgba(82, 107, 83, 0.18))' }}
        >
          <defs>
            <linearGradient id="outerPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFA6B8" />
              <stop offset="70%" stopColor="#F48FB1" />
              <stop offset="100%" stopColor="#E86A82" />
            </linearGradient>

            <linearGradient id="innerPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF0F3" />
              <stop offset="80%" stopColor="#FFCCD5" />
              <stop offset="100%" stopColor="#FFA6B8" />
            </linearGradient>

            <radialGradient id="centerCoreGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF3B0" />
              <stop offset="60%" stopColor="#F9D56E" />
              <stop offset="100%" stopColor="#E5B942" />
            </radialGradient>
          </defs>

          {/* Outer Petal Ring (Opens on scroll) */}
          <g transform="translate(120, 120)">
            {outerPetals.map((angle, i) => {
              const petalScale = 0.55 + finalBloom * 0.5;
              const openAngle = angle + (1 - finalBloom) * (i % 2 === 0 ? 12 : -12);
              return (
                <g key={`outer-${i}`} transform={`rotate(${openAngle}) scale(${petalScale})`}>
                  <path
                    d="M0 -30 C24 -55, 36 -85, 0 -105 C-36 -85, -24 -55, 0 -30 Z"
                    fill="url(#outerPetalGrad)"
                    stroke="#FFFDF5"
                    strokeWidth="1.5"
                    opacity="0.94"
                  />
                  <path d="M0 -35 L0 -90" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" />
                </g>
              );
            })}
          </g>

          {/* Inner Petal Ring (Blooms slightly faster) */}
          <g transform="translate(120, 120)">
            {innerPetals.map((angle, j) => {
              const innerScale = 0.5 + finalBloom * 0.52;
              return (
                <g key={`inner-${j}`} transform={`rotate(${angle}) scale(${innerScale})`}>
                  <path
                    d="M0 -22 C18 -42, 28 -64, 0 -80 C-28 -64, -18 -42, 0 -22 Z"
                    fill="url(#innerPetalGrad)"
                    stroke="#FFFDF5"
                    strokeWidth="1.5"
                    opacity="0.98"
                  />
                  <circle cx="0" cy="-65" r="2" fill="#FFA6B8" opacity="0.8" />
                </g>
              );
            })}
          </g>

          {/* Stamen Center Core */}
          <circle cx="120" cy="120" r="30" fill="url(#centerCoreGrad)" stroke="#FFFDF5" strokeWidth="2.5" />
          
          {/* Stamen Anthers */}
          <g transform="translate(120, 120)">
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <circle
                key={deg}
                cx={Math.cos((deg * Math.PI) / 180) * 18}
                cy={Math.sin((deg * Math.PI) / 180) * 18}
                r="2.5"
                fill="#C69214"
              />
            ))}
            <circle cx="0" cy="0" r="6" fill="#F49D1A" />
          </g>
        </svg>
      </div>

      {/* Interactive Hint */}
      <p
        style={{
          fontSize: '0.8rem',
          color: '#8B9B88',
          letterSpacing: '0.04em',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span>👇</span> Scroll down to explore your garden notes
      </p>
    </section>
  );
};
