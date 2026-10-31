import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom Audio Hook for Persistent Background Music
 * Handles playback, seeking to exact timestamp (e.g. 80s / 1:20),
 * loadedmetadata synchronization, play/pause, volume, error recovery,
 * and browser autoplay restrictions gracefully.
 */
export function useAudio(src, { autoPlay = false, loop = true, startTime = 80 } = {}) {
  const audioRef = useRef(null);
  const hasSeekedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);

  // Helper to safely seek to target timestamp
  const applySeek = useCallback((audio, targetTime) => {
    if (!audio) return;
    try {
      if (audio.duration && targetTime > audio.duration) {
        console.warn(`Target startTime (${targetTime}s) exceeds audio duration (${audio.duration}s), starting from 0s.`);
        audio.currentTime = 0;
      } else {
        audio.currentTime = targetTime;
      }
      hasSeekedRef.current = true;
    } catch (err) {
      console.warn('Error setting audio currentTime:', err);
    }
  }, []);

  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = loop;
    audio.volume = volume;
    audio.preload = 'auto';
    audioRef.current = audio;
    hasSeekedRef.current = false;

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
      setHasError(false);
      // Seek to target time as soon as metadata is available
      if (!hasSeekedRef.current && startTime > 0) {
        applySeek(audio, startTime);
      }
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
      setHasError(false);
      if (!hasSeekedRef.current && startTime > 0) {
        applySeek(audio, startTime);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setNeedsUserInteraction(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleError = (e) => {
      console.warn('Audio playback error / file not found:', e);
      setHasError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, [src, loop, startTime, applySeek]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    try {
      // Ensure seek has occurred prior to beginning playback
      if (!hasSeekedRef.current && startTime > 0) {
        if (audio.readyState >= 1) { // HAVE_METADATA or higher
          applySeek(audio, startTime);
        } else {
          // Wait for metadata before initiating playback
          await new Promise((resolve) => {
            const onMeta = () => {
              applySeek(audio, startTime);
              audio.removeEventListener('loadedmetadata', onMeta);
              resolve();
            };
            audio.addEventListener('loadedmetadata', onMeta);
            // Fallback timeout in case event is missed
            setTimeout(resolve, 500);
          });
        }
      }

      audio.volume = isMuted ? 0 : volume;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        setIsPlaying(true);
        setNeedsUserInteraction(false);
      }
    } catch (err) {
      console.warn('Autoplay restricted by browser, requires user interaction:', err);
      setNeedsUserInteraction(true);
      setIsPlaying(false);
    }
  }, [volume, isMuted, startTime, applySeek]);

  const pause = useCallback(() => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setIsPlaying(false);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  }, [isMuted, volume]);

  return {
    isPlaying,
    isLoaded,
    hasError,
    needsUserInteraction,
    play,
    pause,
    togglePlay,
    toggleMute,
    isMuted,
  };
}
