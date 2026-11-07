import React from 'react';

/**
 * MemoryCards3D Component (Scene B)
 * Beautiful Polaroid scrapbook memory gallery.
 * 
 * ============================================================================
 * DEVELOPER NOTICE - PHOTO REPLACEMENT INSTRUCTIONS:
 * ----------------------------------------------------------------------------
 * These cards use generic floral demo placeholders (/images/demo-photo-1.jpg
 * to /images/demo-photo-4.jpg).
 * When Tamanna or the owner provides personal friendship photos in the future,
 * simply place the images in /public/images/ and replace the 'src' paths below.
 * Do NOT use existing site photos here.
 * ============================================================================
 */
const DEMO_MEMORIES = [
  {
    id: 1,
    // [TODO]: Replace demo-photo-1.jpg with personal photo in public/images/
    src: '/images/demo-photo-1.jpg',
    caption: 'Little moments.',
    subcaption: 'A gentle reminder that every small step matters.',
    tilt: '-2deg',
    tapeColor: '#EBC9B5',
  },
  {
    id: 2,
    // [TODO]: Replace demo-photo-2.jpg with personal photo in public/images/
    src: '/images/demo-photo-2.jpg',
    caption: 'Keep smiling.',
    subcaption: 'Your bright energy brings warmth to everyone around you.',
    tilt: '2.5deg',
    tapeColor: '#DCE8D5',
  },
  {
    id: 3,
    // [TODO]: Replace demo-photo-3.jpg with personal photo in public/images/
    src: '/images/demo-photo-3.jpg',
    caption: 'Always keep growing.',
    subcaption: 'Dedication turns every practice session into victory.',
    tilt: '-1.8deg',
    tapeColor: '#E8C7CC',
  },
  {
    id: 4,
    // [TODO]: Replace demo-photo-4.jpg with personal photo in public/images/
    src: '/images/demo-photo-4.jpg',
    caption: 'Stay unstoppable.',
    subcaption: 'Strong, determined, and focused on your goals.',
    tilt: '1.6deg',
    tapeColor: '#F7E7CE',
  },
];

export const MemoryCards3D = ({ visitorName = "Tamanna" }) => {
  return (
    <section className="bf-section" style={{ paddingTop: '40px' }}>
      {/* Section Sub-heading */}
      <div
        style={{
          display: 'inline-block',
          fontFamily: "var(--font-script, 'Caveat', cursive)",
          fontSize: '1.4rem',
          color: '#8B263E',
          marginBottom: '6px',
        }}
      >
        Moments & Encouragement
      </div>
      
      <h2
        style={{
          fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
          fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
          color: '#2F3E33',
          fontWeight: 700,
          marginBottom: '12px',
        }}
      >
        A Little Collection of Smiles
      </h2>

      <p
        style={{
          fontSize: '0.95rem',
          color: '#5E6D62',
          maxWidth: '540px',
          margin: '0 auto',
          lineHeight: 1.6,
        }}
      >
        Dedicated to the hard work you put into your training every single day, {visitorName}.
      </p>

      {/* Polaroid Scrapbook Grid */}
      <div className="bf-demo-grid">
        {DEMO_MEMORIES.map((card) => (
          <div
            key={card.id}
            className="bf-demo-card"
            style={{
              transform: `rotate(${card.tilt})`,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            {/* Washi Tape Accent */}
            <div
              style={{
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '74px',
                height: '20px',
                background: card.tapeColor,
                opacity: 0.85,
                borderRadius: '2px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                zIndex: 5,
              }}
            />

            {/* Photo Container */}
            <div className="bf-demo-img-box">
              <img
                src={card.src}
                alt={card.caption}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                loading="lazy"
              />
              <span className="bf-demo-badge">Memo #{card.id}</span>
            </div>

            {/* Polaroid Handwritten Caption */}
            <div style={{ marginTop: '14px', textAlign: 'center' }}>
              <p
                style={{
                  fontFamily: "var(--font-script, 'Caveat', cursive)",
                  fontSize: '1.35rem',
                  color: '#2F3E33',
                  margin: '0 0 4px 0',
                  fontWeight: 600,
                }}
              >
                {card.caption}
              </p>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#7D8C80',
                  margin: 0,
                  lineHeight: 1.45,
                }}
              >
                {card.subcaption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
