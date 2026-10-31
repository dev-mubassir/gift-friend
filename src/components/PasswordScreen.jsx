import React, { useState, useEffect } from 'react';
import { Delete, RotateCcw, KeyRound, Sparkles, Check } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BlossomIcon, DaisyFlower, BotanicalSprig } from './BotanicalDecorations';

/**
 * Screen 2: Secret Password Screen
 * Playful 4-digit code entry with botanical flower indicators,
 * custom keypad, error shake animation, and blooming success state.
 */
export default function PasswordScreen({ onUnlock }) {
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'error' | 'success'
  const [showHint, setShowHint] = useState(false);

  const { passwordScreen, secretPassword } = siteConfig;

  // Handle digit press
  const handleDigit = (digit) => {
    if (status === 'success') return;
    if (pin.length < 4) {
      const nextPin = pin + digit;
      setPin(nextPin);
      setStatus('idle');

      // Vibrate briefly on mobile devices if supported
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate(20);
      }

      // Check pin if 4 digits reached
      if (nextPin.length === 4) {
        verifyPin(nextPin);
      }
    }
  };

  const handleBackspace = () => {
    if (status === 'success') return;
    setPin((prev) => prev.slice(0, -1));
    setStatus('idle');
  };

  const handleReset = () => {
    if (status === 'success') return;
    setPin('');
    setStatus('idle');
  };

  const verifyPin = (candidate) => {
    if (candidate === secretPassword) {
      setStatus('success');
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([40, 50, 60]);
      }
      // Give time for success animation to blossom before transitioning
      setTimeout(() => {
        onUnlock();
      }, 900);
    } else {
      setStatus('error');
      setShowHint(true);
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([60, 40, 60]);
      }
      setTimeout(() => {
        setPin('');
        setStatus('idle');
      }, 750);
    }
  };

  // Physical keyboard support for desktop users
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (status === 'success') return;
      if (/^[0-9]$/.test(e.key)) {
        handleDigit(e.key);
      } else if (e.key === 'Backspace') {
        handleBackspace();
      } else if (e.key === 'Escape') {
        handleReset();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin, status]);

  return (
    <div
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 16px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Decorative sprigs */}
      <div
        className="animate-float-slow"
        style={{
          position: 'absolute',
          top: '25px',
          left: '25px',
          opacity: 0.6,
          pointerEvents: 'none',
        }}
      >
        <BotanicalSprig className="w-12 h-12" color="#A8B99A" />
      </div>

      {/* Main Password Card */}
      <div
        className={`animate-fade-in-scale ${status === 'error' ? 'animate-shake' : ''}`}
        style={{
          maxWidth: '380px',
          width: '100%',
          background: 'rgba(255, 253, 245, 0.92)',
          backdropFilter: 'blur(12px)',
          borderRadius: '26px',
          padding: '32px 24px 28px 24px',
          border: '1.5px solid rgba(168, 185, 154, 0.35)',
          boxShadow: '0 20px 45px -12px rgba(82, 107, 83, 0.14), 0 8px 16px -4px rgba(82, 107, 83, 0.06)',
          position: 'relative',
        }}
      >
        {/* Header Icon */}
        <div style={{ marginBottom: '12px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              background: status === 'success' ? '#DCE8D5' : '#F7F3E8',
              border: '1.5px solid #A8B99A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
              transition: 'all 0.3s ease',
            }}
          >
            {status === 'success' ? (
              <span className="animate-bloom-pop">
                <BlossomIcon size={32} color="#526B53" />
              </span>
            ) : (
              <KeyRound size={24} color="#526B53" />
            )}
          </div>
        </div>

        {/* Title */}
        <h2
          className="font-serif"
          style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#2F3E33',
            marginBottom: '6px',
          }}
        >
          {status === 'success' ? 'Garden Unlocked! 🌸' : passwordScreen.title}
        </h2>

        <p
          style={{
            fontSize: '0.88rem',
            color: '#637567',
            marginBottom: '22px',
          }}
        >
          {status === 'success' ? passwordScreen.successMessage : passwordScreen.subtitle}
        </p>

        {/* 4-Digit Flower Indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '26px',
          }}
        >
          {[0, 1, 2, 3].map((index) => {
            const isFilled = pin.length > index;
            return (
              <div
                key={index}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: isFilled
                    ? (status === 'error' ? '#F4D5DB' : '#FFFDF5')
                    : 'rgba(220, 232, 213, 0.4)',
                  border: isFilled
                    ? (status === 'error' ? '2px solid #E8C7CC' : '2px solid #A8B99A')
                    : '1.5px dashed #A8B99A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transform: isFilled ? 'scale(1.08)' : 'scale(1)',
                  boxShadow: isFilled ? '0 4px 12px rgba(82, 107, 83, 0.15)' : 'none',
                }}
              >
                {isFilled && (
                  <span className="animate-bloom-pop">
                    {status === 'error' ? (
                      <span style={{ color: '#C86D7A', fontSize: '18px' }}>✕</span>
                    ) : (
                      <BlossomIcon size={24} color="#E8C7CC" center="#D4A373" />
                    )}
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Optional Hint message */}
        <div style={{ minHeight: '26px', marginBottom: '14px' }}>
          {showHint && status !== 'success' && (
            <p
              className="animate-fade-in-up font-script"
              style={{
                fontSize: '1.15rem',
                color: '#526B53',
                background: 'rgba(220, 232, 213, 0.4)',
                padding: '4px 12px',
                borderRadius: '9999px',
                display: 'inline-block',
              }}
            >
              {passwordScreen.hint}
            </p>
          )}
        </div>

        {/* Custom Touch Keypad */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
            maxWidth: '300px',
            margin: '0 auto',
          }}
        >
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((digit) => (
            <button
              key={digit}
              onClick={() => handleDigit(digit)}
              disabled={status === 'success'}
              style={{
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(255, 253, 245, 0.95)',
                border: '1.5px solid rgba(168, 185, 154, 0.35)',
                color: '#2F3E33',
                fontSize: '1.35rem',
                fontWeight: 600,
                fontFamily: 'var(--font-sans)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(82, 107, 83, 0.06)',
                transition: 'all 0.15s ease',
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.92)';
                e.currentTarget.style.background = '#DCE8D5';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 253, 245, 0.95)';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.92)';
                e.currentTarget.style.background = '#DCE8D5';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.background = 'rgba(255, 253, 245, 0.95)';
              }}
            >
              {digit}
            </button>
          ))}

          {/* Reset button */}
          <button
            onClick={handleReset}
            disabled={status === 'success'}
            aria-label="Clear pin"
            style={{
              height: '56px',
              borderRadius: '16px',
              background: 'transparent',
              border: '1.5px solid transparent',
              color: '#637567',
              fontSize: '0.85rem',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              transition: 'all 0.15s ease',
            }}
          >
            <RotateCcw size={16} />
            <span>{passwordScreen.resetText}</span>
          </button>

          {/* 0 Button */}
          <button
            onClick={() => handleDigit('0')}
            disabled={status === 'success'}
            style={{
              height: '56px',
              borderRadius: '16px',
              background: 'rgba(255, 253, 245, 0.95)',
              border: '1.5px solid rgba(168, 185, 154, 0.35)',
              color: '#2F3E33',
              fontSize: '1.35rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(82, 107, 83, 0.06)',
              transition: 'all 0.15s ease',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'scale(0.92)';
              e.currentTarget.style.background = '#DCE8D5';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 253, 245, 0.95)';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.transform = 'scale(0.92)';
              e.currentTarget.style.background = '#DCE8D5';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(255, 253, 245, 0.95)';
            }}
          >
            0
          </button>

          {/* Backspace button */}
          <button
            onClick={handleBackspace}
            disabled={status === 'success'}
            aria-label="Backspace"
            style={{
              height: '56px',
              borderRadius: '16px',
              background: 'transparent',
              border: '1.5px solid transparent',
              color: '#637567',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
          >
            <Delete size={22} />
          </button>
        </div>
      </div>
    </div>
  );
}
