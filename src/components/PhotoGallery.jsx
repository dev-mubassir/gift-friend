import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BlossomIcon } from './BotanicalDecorations';

/**
 * Screen 6: Photo Moments Scrapbook Gallery
 * Displays Tamanna's photographs in classic Polaroid-style frames.
 * Every photo fills its frame cleanly edge-to-edge (aspect-ratio: 1/1 with object-fit: cover),
 * completely eliminating letterbox gaps, empty bars, or distortion.
 */
export default function PhotoGallery() {
  const { photos, photoGallery } = siteConfig;
  const [brokenImages, setBrokenImages] = useState({});

  const handleImageError = (id) => {
    setBrokenImages((prev) => ({ ...prev, [id]: true }));
  };

  const washiColors = ['peach', 'pink', 'sage', 'peach'];

  return (
    <section
      id="photo-memories"
      style={{
        padding: '60px 16px 80px 16px',
        maxWidth: '920px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '45px' }}>
        <div style={{ marginBottom: '14px' }}>
          <span className="botanical-tag">
            <Camera size={13} />
            <span>{photoGallery?.badge || "Little Moments"}</span>
          </span>
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 2.7rem)',
            fontWeight: 600,
            color: '#2F3E33',
            marginBottom: '10px',
          }}
        >
          {photoGallery?.heading || "A Few Little Moments 📸"}
        </h2>

        <p
          className="font-script"
          style={{
            fontSize: '1.45rem',
            color: '#526B53',
            maxWidth: '520px',
            margin: '0 auto',
          }}
        >
          A few little moments to smile about ♡
        </p>
      </div>

      {/* Polaroid Scrapbook Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px 24px',
          justifyContent: 'center',
          alignItems: 'start',
          padding: '10px 4px',
        }}
      >
        {photos.map((photo, index) => {
          const isBroken = brokenImages[photo.id];
          const washiClass = washiColors[index % washiColors.length];

          return (
            <div
              key={photo.id}
              className="polaroid-frame"
              style={{
                transform: `rotate(${photo.rotation || 0}deg)`,
                maxWidth: '320px',
                width: '100%',
                margin: '0 auto',
                pointerEvents: 'none', // Purely visual scrapbook card, no clicks
              }}
            >
              {/* Washi Tape at Top */}
              <div className={`washi-tape ${washiClass}`} />

              {/* Photo Area: Perfect 1:1 square window so photo fills frame edge-to-edge */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  backgroundColor: '#FAF7EE',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(168, 185, 154, 0.25)',
                }}
              >
                {!isBroken ? (
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    loading="lazy"
                    onError={() => handleImageError(photo.id)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: photo.id === 2 ? 'center 20%' : 'center center',
                      display: 'block',
                      pointerEvents: 'none',
                    }}
                  />
                ) : (
                  /* Fallback if an image is missing */
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      padding: '20px',
                      background: 'linear-gradient(145deg, #FFFDF5 0%, #F7F3E8 100%)',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <BlossomIcon size={38} color="#E8C7CC" center="#D4A373" />
                    <p
                      className="font-serif"
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        color: '#526B53',
                        marginTop: '10px',
                      }}
                    >
                      {photo.placeholderTitle}
                    </p>
                    <p
                      style={{
                        fontSize: '0.74rem',
                        color: '#637567',
                        marginTop: '6px',
                        background: 'rgba(220, 232, 213, 0.5)',
                        padding: '4px 10px',
                        borderRadius: '9999px',
                      }}
                    >
                      {photo.placeholderHint}
                    </p>
                  </div>
                )}
              </div>

              {/* Handwritten Caption Chin */}
              <div style={{ paddingTop: '14px', textAlign: 'center' }}>
                <p
                  className="font-script"
                  style={{
                    fontSize: '1.5rem',
                    color: '#2F3E33',
                    lineHeight: 1.25,
                    minHeight: '2.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {photo.caption}
                </p>
                {photo.date && (
                  <p
                    style={{
                      fontSize: '0.74rem',
                      color: '#637567',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      marginTop: '2px',
                    }}
                  >
                    {photo.date}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
