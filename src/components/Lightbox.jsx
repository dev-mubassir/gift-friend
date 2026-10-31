import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { BlossomIcon } from './BotanicalDecorations';

/**
 * Fullscreen Photo Lightbox
 * Supports mobile touch swipe gestures, keyboard arrows,
 * smooth transitions, and handwritten captions.
 */
export default function Lightbox({ photos, activeIndex, onClose, onPrev, onNext }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const currentPhoto = photos[activeIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const minSwipeThreshold = 50; // px
    if (swipeDistance > minSwipeThreshold) {
      onNext(); // swiped left -> go to next photo
    } else if (swipeDistance < -minSwipeThreshold) {
      onPrev(); // swiped right -> go to prev photo
    }
  };

  if (!currentPhoto) return null;

  return (
    <div
      className="animate-fade-in-scale"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'rgba(28, 38, 30, 0.92)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        touchAction: 'pan-y',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: '#FFFDF5',
          zIndex: 110,
        }}
      >
        <span
          style={{
            fontSize: '0.9rem',
            background: 'rgba(255, 253, 245, 0.15)',
            padding: '4px 14px',
            borderRadius: '9999px',
            letterSpacing: '0.05em',
          }}
        >
          {activeIndex + 1} / {photos.length}
        </span>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(255, 253, 245, 0.2)',
            color: '#FFFDF5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s',
          }}
        >
          <X size={22} />
        </button>
      </div>

      {/* Navigation Arrow Left */}
      <button
        onClick={onPrev}
        aria-label="Previous photo"
        style={{
          position: 'absolute',
          left: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(255, 253, 245, 0.2)',
          color: '#FFFDF5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 110,
        }}
      >
        <ChevronLeft size={26} />
      </button>

      {/* Navigation Arrow Right */}
      <button
        onClick={onNext}
        aria-label="Next photo"
        style={{
          position: 'absolute',
          right: '16px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: 'rgba(255, 253, 245, 0.2)',
          color: '#FFFDF5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 110,
        }}
      >
        <ChevronRight size={26} />
      </button>

      {/* Main Image Container */}
      <div
        style={{
          maxWidth: '520px',
          width: '100%',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#FFFDF5',
          padding: '14px 14px 22px 14px',
          borderRadius: '12px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '62vh',
            borderRadius: '6px',
            overflow: 'hidden',
            backgroundColor: '#F7F3E8',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={currentPhoto.src}
            alt={currentPhoto.caption}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '60vh',
              objectFit: 'contain',
              display: 'block',
            }}
            onError={(e) => {
              // Hide broken image if error occurs and show artistic placeholder
              e.target.style.display = 'none';
              const parent = e.target.parentElement;
              if (parent) {
                const placeholder = parent.querySelector('.fallback-box');
                if (placeholder) placeholder.style.display = 'flex';
              }
            }}
          />

          {/* Artistic Fallback Box */}
          <div
            className="fallback-box"
            style={{
              display: 'none',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
              textAlign: 'center',
              background: '#F7F3E8',
              width: '100%',
              minHeight: '260px',
            }}
          >
            <BlossomIcon size={48} color="#E8C7CC" center="#D4A373" />
            <h4 className="font-serif" style={{ fontSize: '1.4rem', color: '#526B53', marginTop: '12px' }}>
              {currentPhoto.placeholderTitle}
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#637567', marginTop: '6px' }}>
              {currentPhoto.placeholderHint}
            </p>
          </div>
        </div>

        {/* Caption */}
        <div style={{ marginTop: '16px', textAlign: 'center', width: '100%' }}>
          <p
            className="font-script"
            style={{
              fontSize: '1.65rem',
              color: '#2F3E33',
              lineHeight: 1.25,
            }}
          >
            {currentPhoto.caption}
          </p>
          {currentPhoto.date && (
            <p
              style={{
                fontSize: '0.78rem',
                color: '#637567',
                marginTop: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {currentPhoto.date}
            </p>
          )}
        </div>
      </div>

      {/* Mobile Swipe Hint */}
      <p
        style={{
          position: 'absolute',
          bottom: '16px',
          color: 'rgba(255, 253, 245, 0.65)',
          fontSize: '0.78rem',
          letterSpacing: '0.04em',
        }}
      >
        Swipe left or right to browse photos
      </p>
    </div>
  );
}
