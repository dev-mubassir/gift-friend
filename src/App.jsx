import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import PasswordScreen from './components/PasswordScreen';
import MainGreeting from './components/MainGreeting';
import SportsMotivation from './components/SportsMotivation';
import PhotoGallery from './components/PhotoGallery';
import FriendshipLetter from './components/FriendshipLetter';
import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import FlowerRain from './components/FlowerRain';
import { useAudio } from './hooks/useAudio';
import { siteConfig } from './config/content';

// Independent Butterfly Greeting Experience Components
import { ButterflyGate } from './components/ButterflyEntry/ButterflyGate';
import { GreetingGarden } from './components/ButterflyGreeting/GreetingGarden';

export default function App() {
  // Experience Switch: 'classic' | 'butterfly-gate' | 'butterfly-garden'
  const [experience, setExperience] = useState(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search;
      const hash = window.location.hash;
      if (search.includes('butterfly') || hash.includes('butterfly')) {
        return 'butterfly-gate';
      }
    }
    return 'classic';
  });

  // Dynamic visitor name for the Butterfly experience
  const [butterflyVisitorName, setButterflyVisitorName] = useState('Tamanna');

  // Navigation states for Classic Experience: 'welcome' | 'password' | 'garden'
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [flowerBurst, setFlowerBurst] = useState(false);

  // Background Audio Controller - starts at 80s (1:20) for classic experience
  const audio = useAudio(siteConfig.music.src, {
    autoPlay: false,
    loop: siteConfig.music.loop,
    startTime: siteConfig.music.startTime || 80,
  });

  // Step 1: User clicks "Let's begin! ♡" on Welcome Screen
  const handleStart = () => {
    setCurrentScreen('password');
  };

  // Step 2: User successfully enters correct password (5656)
  const handleUnlock = () => {
    // Start music at 80 seconds on this confirmed user gesture
    audio.play();

    // Trigger celebratory flower rain burst
    setFlowerBurst(true);
    setCurrentScreen('garden');

    // Scroll to top of the garden smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reset burst mode back to normal gentle floating after 5 seconds
    setTimeout(() => {
      setFlowerBurst(false);
    }, 5000);
  };

  // Step 3: Trigger extra flower flurry (e.g. from FinalSurprise interaction)
  const handleTriggerBurst = () => {
    setFlowerBurst(true);
    setTimeout(() => {
      setFlowerBurst(false);
    }, 3500);
  };

  // Step 4: Replay whole experience
  const handleReplay = () => {
    setCurrentScreen('welcome');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToMotivation = () => {
    const el = document.getElementById('sports-motivation');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // =========================================================================
  // 1. BUTTERFLY GREETING CARD ENTRY FLOW (Passcode: 0143)
  // =========================================================================
  if (experience === 'butterfly-gate') {
    return (
      <ButterflyGate
        onBackToClassic={() => {
          setExperience('classic');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onProceedToGarden={(name) => {
          setButterflyVisitorName(name);
          setExperience('butterfly-garden');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // =========================================================================
  // 2. BUTTERFLY GREETING GARDEN EXPERIENCE
  // =========================================================================
  if (experience === 'butterfly-garden') {
    return (
      <GreetingGarden
        visitorName={butterflyVisitorName}
        onBackToClassic={() => {
          setExperience('classic');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onReplayCard={() => {
          setExperience('butterfly-gate');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // =========================================================================
  // 3. CLASSIC BOTANICAL EXPERIENCE (Untouched 5656 Flow)
  // =========================================================================
  return (
    <div
      style={{
        minHeight: '100dvh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background Flower Rain / Floating Petals (z-index: 0, behind content) */}
      <FlowerRain
        active={true}
        burst={flowerBurst}
        density={currentScreen === 'garden' ? (flowerBurst ? 'high' : 'normal') : 'normal'}
      />

      {/* Screen 1: Welcome Screen */}
      {currentScreen === 'welcome' && (
        <div className="animate-fade-in-up">
          <WelcomeScreen
            onStart={handleStart}
            onOpenButterfly={() => {
              setExperience('butterfly-gate');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </div>
      )}

      {/* Screen 2: Secret Password Screen (5656) */}
      {currentScreen === 'password' && (
        <div className="animate-fade-in-scale">
          <PasswordScreen onUnlock={handleUnlock} />
        </div>
      )}

      {/* Screen 3 to 8: Main Botanical Garden & Sports Encouragement Experience */}
      {currentScreen === 'garden' && (
        <main className="animate-fade-in-up safe-area-bottom">
          {/* Screen 4: Main Greeting Hero */}
          <MainGreeting onScrollNext={scrollToMotivation} />

          {/* Screen 5: Sports Motivation Section ("To the Strong Girl, Tamanna 💪") */}
          <SportsMotivation />

          {/* Screen 6: Photo Moments Scrapbook Gallery ("A Few Little Moments 📸") */}
          <PhotoGallery />

          {/* Screen 7: Personal Friendship Letter ("A Little Note for You, Tamanna") */}
          <FriendshipLetter />

          {/* Screen 8: Final Surprise & Replay ("Go Shine, Tamanna! 🌸") */}
          <FinalSurprise
            onReplay={handleReplay}
            onTriggerBurst={handleTriggerBurst}
          />
        </main>
      )}

      {/* Persistent Floating Music Player (Visible during the Garden Experience) */}
      {currentScreen === 'garden' && <MusicPlayer audio={audio} />}
    </div>
  );
}
