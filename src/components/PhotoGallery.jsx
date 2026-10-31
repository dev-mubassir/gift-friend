import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { siteConfig } from '../config/content';
import Lightbox from './Lightbox';
import { BlossomIcon } from './BotanicalDecorations';

/**
 * Screen 6: Photo Moments Gallery
 * Polaroid-style frames featuring Tamanna's genuine photographs,
 * subtle rotations, washi tape, handwritten captions, and full-screen swipe lightbox.
 */
export default function PhotoGallery() {
  const { photos, photoGallery } = siteConfig;
  const [activePhotoIndex, setActivePhotoIndex] = useState(null);
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
        maxWidth: '960px',
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
          tap any photograph to enlarge ♡
        </p>
      </div>

      {/* Polaroid Gallery Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '36px 28px',
          justifyContent: 'center',
          padding: '10px 8px',
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
                margin: '0 auto',
                width: '100%',
              }}
              onClick={() => setActivePhotoIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`Open photo: ${photo.caption}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActivePhotoIndex(index);
                }
              }}
            >
              {/* Cute Washi Tape at Top */}
              <div className={`washi-tape ${washiClass}`} />

              {/* Photo Area with face-friendly framing */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '4 / 4.6',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  backgroundColor: '#F7F3E8',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(168, 185, 154, 0.2)',
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
                      objectPosition: 'center 20%', // Keeps faces perfectly centered and uncropped
                      display: 'block',
                      transition: 'transform 0.4s ease',
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

                {/* Hover / Tap Zoom Icon Indicator */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255, 253, 245, 0.88)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#526B53',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  }}
                >
                  <Maximize2 size={15} />
                </div>
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
                      fontSize: '0.72rem',
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

      {/* Fullscreen Lightbox Modal */}
      {activePhotoIndex !== null && (
        <Lightbox
          photos={photos}
          activeIndex={activePhotoIndex}
          onClose={() => setActivePhotoIndex(null)}
          onPrev={() =>
            setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1))
          }
          onNext={() =>
            setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1))
          }
        />
      )}
    </section>
  );
}
