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

export default function App() {
  // Navigation states: 'welcome' | 'password' | 'garden'
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [flowerBurst, setFlowerBurst] = useState(false);

  // Background Audio Controller - starts at 80s (1:20)
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

  return (
    <div
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background Flower Rain / Floating Petals */}
      <FlowerRain
        active={true}
        burst={flowerBurst}
        density={currentScreen === 'garden' ? (flowerBurst ? 'high' : 'normal') : 'normal'}
      />

      {/* Screen 1: Welcome Screen */}
      {currentScreen === 'welcome' && (
        <div className="animate-fade-in-up">
          <WelcomeScreen onStart={handleStart} />
        </div>
      )}

      {/* Screen 2: Secret Password Screen */}
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

          {/* Screen 6: Photo Moments Gallery & Lightbox ("A Few Little Moments 📸") */}
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
