import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom Audio Hook for Persistent Background Music
 * Handles playback, play/pause, volume, error recovery,
 * and browser autoplay restrictions gracefully.
 */
export function useAudio(src, { autoPlay = false, loop = true } = {}) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [volume, setVolume] = useState(0.75);
  const [isMuted, setIsMuted] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    audio.src = src;
    audio.loop = loop;
    audio.volume = volume;
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleCanPlay = () => {
      setIsLoaded(true);
      setHasError(false);
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

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, [src, loop]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    try {
      audioRef.current.volume = isMuted ? 0 : volume;
      const playPromise = audioRef.current.play();
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
  }, [volume, isMuted]);

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
