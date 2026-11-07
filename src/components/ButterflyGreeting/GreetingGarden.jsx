import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { EndlessFlowerRain } from './EndlessFlowerRain';
import { BloomingFlower } from './BloomingFlower';
import { MemoryCards3D } from './MemoryCards3D';
import { FriendshipEnvelope } from './FriendshipEnvelope';
import { StrengthSection } from './StrengthSection';
import { FinalGarden } from './FinalGarden';

/**
 * ============================================================================
 * [TODO: BACKGROUND MUSIC INTEGRATION]
 * ----------------------------------------------------------------------------
 * Per prompt specifications: No new audio files are loaded here.
 * When the user provides an authorized song or audio asset for this butterfly
 * greeting experience, uncomment and configure an <audio> element or player hook
 * below:
 *
 * const audioRef = useRef(new Audio('/music/custom-butterfly-track.mp3'));
 * useEffect(() => {
 *   // Configure currentTime, volume, loadedmetadata listener, and start playback
 * }, []);
 * ============================================================================
 */

export const GreetingGarden = ({ visitorName = "Tamanna", onBackToClassic, onReplayCard }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track window scroll progress for blooming animations and indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const current = window.scrollY / totalScroll;
        setScrollProgress(Math.min(1, Math.max(0, current)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bf-garden-wrapper">
      {/* 1. Continuous Lightweight Flower Rain (Paused when hidden) */}
      <EndlessFlowerRain active={true} density="normal" />

      {/* 2. Top-Left Floating Return Pill to Classic Experience */}
      {onBackToClassic && (
        <button
          onClick={onBackToClassic}
          className="bf-nav-return"
          title="Return to Classic Garden"
          aria-label="Return to Classic Garden"
        >
          <ArrowLeft size={14} /> Classic Garden
        </button>
      )}

      {/* 3. Top-Right Flower-shaped Scroll Progress Indicator */}
      <div className="bf-scroll-indicator" title={`Garden progress: ${Math.round(scrollProgress * 100)}%`}>
        <svg
          viewBox="0 0 36 36"
          width="28"
          height="28"
          className="bf-scroll-flower-svg"
          style={{ transform: `rotate(${scrollProgress * 360}deg)` }}
        >
          <circle cx="18" cy="18" r="14" fill="none" stroke="#DCE8D5" strokeWidth="2.5" />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="#D62839"
            strokeWidth="2.5"
            strokeDasharray="88"
            strokeDashoffset={88 * (1 - scrollProgress)}
            strokeLinecap="round"
          />
          {/* Center tiny flower icon */}
          <circle cx="18" cy="18" r="4.5" fill="#E86A82" />
        </svg>
      </div>

      {/* --- SCENE A: Blooming Garden Hero with dynamic flower petals --- */}
      <BloomingFlower visitorName={visitorName} scrollProgress={scrollProgress} />

      {/* --- SCENE B: Friendship Memories Polaroid Scrapbook --- */}
      <MemoryCards3D visitorName={visitorName} />

      {/* --- SCENE C: 3D Friendship Envelope & Unfolded Letter --- */}
      <FriendshipEnvelope visitorName={visitorName} />

      {/* --- SCENE D: Sports Motivation & Tournament Empowerment --- */}
      <StrengthSection visitorName={visitorName} />

      {/* --- SCENE E: Final Garden Celebration, Tap-to-Plant & Notes --- */}
      <FinalGarden visitorName={visitorName} onReplay={onReplayCard} />
    </div>
  );
};
