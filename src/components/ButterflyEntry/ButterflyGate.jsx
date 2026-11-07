import React, { useState, useEffect, useCallback } from 'react';
import { Delete, RotateCcw, ArrowLeft } from 'lucide-react';
import { CardOpening } from './CardOpening';
import { FlappingButterfly } from './ButterflyFlight';

/**
 * ButterflyGate Component
 * Independent entry flow for the new Butterfly Greeting Card experience:
 * - "Your name" input field (cannot be empty)
 * - 4-digit secret passcode: 0143
 * - Friendly feedback on errors
 * - Opens CardOpening when authenticated
 */
export const ButterflyGate = ({ onBackToClassic, onProceedToGarden }) => {
  const [visitorName, setVisitorName] = useState('Tamanna');
  const [pin, setPin] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'error' | 'success'
  const [errorMessage, setErrorMessage] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const SECRET_CODE = '0143';

  const verify = useCallback((candidatePin) => {
    const trimmedName = visitorName.trim();
    if (!trimmedName) {
      setStatus('error');
      setErrorMessage('Please enter your name first 🌸');
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([60, 40, 60]);
      }
      setTimeout(() => setStatus('idle'), 800);
      return;
    }

    if (candidatePin === SECRET_CODE) {
      setStatus('success');
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([40, 50, 60]);
      }
      setTimeout(() => {
        setIsUnlocked(true);
      }, 700);
    } else {
      setStatus('error');
      setErrorMessage("That code isn't quite right. Hint: 0143 🦋");
      if (typeof navigator !== 'undefined' && navigator.vibrate) {
        navigator.vibrate([60, 40, 60]);
      }
      setTimeout(() => {
        setPin('');
        setStatus('idle');
      }, 900);
    }
  }, [visitorName]);

  // Handle number click
  const handleDigit = useCallback((digit) => {
    if (status === 'success') return;
    setErrorMessage('');
    setPin((prevPin) => {
      if (prevPin.length < 4) {
        const nextPin = prevPin + digit;
        setStatus('idle');

        if (typeof navigator !== 'undefined' && navigator.vibrate) {
          navigator.vibrate(20);
        }

        if (nextPin.length === 4) {
          verify(nextPin);
        }
        return nextPin;
      }
      return prevPin;
    });
  }, [status, verify]);

  const handleBackspace = useCallback(() => {
    if (status === 'success') return;
    setPin((prev) => prev.slice(0, -1));
    setStatus('idle');
    setErrorMessage('');
  }, [status]);

  const handleReset = useCallback(() => {
    if (status === 'success') return;
    setPin('');
    setStatus('idle');
    setErrorMessage('');
  }, [status]);

  // Physical keyboard listeners
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isUnlocked || status === 'success') return;
      // Do not intercept if actively typing inside an input element that is NOT the pin
      if (e.target.tagName === 'INPUT' && e.target.id === 'bf-name-input') {
        return;
      }
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
  }, [status, isUnlocked, handleDigit, handleBackspace, handleReset]);

  // If unlocked, render the 3D Gingham Card Opening sequence
  if (isUnlocked) {
    return (
      <CardOpening
        visitorName={visitorName.trim() || 'Tamanna'}
        onEnterGarden={() => {
          if (onProceedToGarden) {
            onProceedToGarden(visitorName.trim() || 'Tamanna');
          }
        }}
      />
    );
  }

  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: '#F7F3E8',
        color: '#2F3E33',
        overflow: 'hidden',
      }}
    >
      {/* Return to Classic Garden Button */}
      {onBackToClassic && (
        <button
          onClick={onBackToClassic}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(255, 253, 245, 0.9)',
            border: '1px solid rgba(168, 185, 154, 0.4)',
            borderRadius: '9999px',
            padding: '6px 14px',
            fontSize: '0.8rem',
            color: '#526B53',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(82, 107, 83, 0.08)',
          }}
        >
          <ArrowLeft size={14} /> Classic Garden
        </button>
      )}

      {/* Ambient Floating Butterflies */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '8%',
          pointerEvents: 'none',
          animation: 'bfFlightGentleFloat 4.2s ease-in-out infinite',
          opacity: 0.7,
        }}
      >
        <FlappingButterfly size={30} color="#E86A82" speed="0.32s" />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '6%',
          pointerEvents: 'none',
          animation: 'bfFlightGentleFloat 4.8s ease-in-out infinite 0.8s',
          opacity: 0.6,
        }}
      >
        <FlappingButterfly size={26} color="#A8B99A" speed="0.36s" />
      </div>

      {/* Card Form Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '380px',
          background: 'rgba(255, 253, 245, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          padding: '32px 24px',
          border: '1.5px solid rgba(232, 160, 175, 0.4)',
          boxShadow: '0 16px 36px -8px rgba(180, 50, 70, 0.12), 0 4px 12px rgba(82, 107, 83, 0.06)',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Top Butterfly Icon Badge */}
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFFDF5, #FDE8ED)',
            border: '1.5px solid rgba(232, 160, 175, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px auto',
            boxShadow: '0 4px 12px rgba(214, 40, 57, 0.1)',
          }}
        >
          <FlappingButterfly size={34} color="#D62839" speed="0.3s" />
        </div>

        <h2
          style={{
            fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
            fontSize: '1.5rem',
            color: '#7D0E19',
            marginBottom: '6px',
            fontWeight: 600,
          }}
        >
          A Little Butterfly Gift
        </h2>

        <p
          style={{
            fontSize: '0.85rem',
            color: '#526B53',
            marginBottom: '20px',
            lineHeight: 1.5,
          }}
        >
          Enter your name and the 4-digit code to untie the handmade card.
        </p>

        {/* Name Input */}
        <div style={{ textAlign: 'left', marginBottom: '18px' }}>
          <label
            htmlFor="bf-name-input"
            style={{
              display: 'block',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#526B53',
              marginBottom: '6px',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Your name
          </label>
          <input
            id="bf-name-input"
            type="text"
            value={visitorName}
            onChange={(e) => {
              setVisitorName(e.target.value);
              setErrorMessage('');
            }}
            placeholder="e.g. Tamanna"
            maxLength={30}
            style={{
              width: '100%',
              padding: '12px 14px',
              borderRadius: '12px',
              border: '1.5px solid rgba(168, 185, 154, 0.5)',
              background: '#FFFDF5',
              fontSize: '1rem',
              color: '#2F3E33',
              fontFamily: 'inherit',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#D62839')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 185, 154, 0.5)')}
          />
        </div>

        {/* 4 Digit Indicators */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '14px',
          }}
        >
          {[0, 1, 2, 3].map((index) => {
            const hasDigit = pin.length > index;
            return (
              <div
                key={index}
                style={{
                  width: '46px',
                  height: '52px',
                  borderRadius: '12px',
                  border: status === 'error'
                    ? '2px solid #D62839'
                    : status === 'success'
                    ? '2px solid #526B53'
                    : hasDigit
                    ? '2px solid #D62839'
                    : '1.5px dashed rgba(168, 185, 154, 0.5)',
                  backgroundColor: hasDigit ? '#FFF0F3' : '#FFFDF5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  fontWeight: 600,
                  color: '#7D0E19',
                  boxShadow: hasDigit ? '0 4px 10px rgba(214, 40, 57, 0.12)' : 'none',
                  transition: 'all 0.25s ease',
                  transform: status === 'error' ? 'translateX(3px)' : 'none',
                }}
              >
                {hasDigit ? pin[index] : '•'}
              </div>
            );
          })}
        </div>

        {/* Friendly Error or Status Message */}
        {errorMessage && (
          <div
            style={{
              fontSize: '0.8rem',
              color: '#D62839',
              background: 'rgba(255, 235, 238, 0.85)',
              padding: '6px 10px',
              borderRadius: '8px',
              marginBottom: '14px',
              fontWeight: 500,
            }}
          >
            {errorMessage}
          </div>
        )}

        {/* Custom Numeric Keypad */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            maxWidth: '280px',
            margin: '0 auto',
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
            <button
              key={digit}
              type="button"
              onClick={() => handleDigit(String(digit))}
              style={{
                height: '46px',
                borderRadius: '12px',
                border: '1px solid rgba(168, 185, 154, 0.35)',
                background: '#FFFDF5',
                color: '#2F3E33',
                fontSize: '1.15rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(82, 107, 83, 0.06)',
                transition: 'all 0.15s ease',
                touchAction: 'manipulation',
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.94)')}
              onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              onTouchStart={(e) => (e.currentTarget.style.transform = 'scale(0.94)')}
              onTouchEnd={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              {digit}
            </button>
          ))}

          {/* Reset button */}
          <button
            type="button"
            onClick={handleReset}
            aria-label="Clear pin"
            style={{
              height: '46px',
              borderRadius: '12px',
              border: '1px solid rgba(168, 185, 154, 0.3)',
              background: 'transparent',
              color: '#7D8C80',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
          >
            <RotateCcw size={18} />
          </button>

          {/* 0 button */}
          <button
            type="button"
            onClick={() => handleDigit('0')}
            style={{
              height: '46px',
              borderRadius: '12px',
              border: '1px solid rgba(168, 185, 154, 0.35)',
              background: '#FFFDF5',
              color: '#2F3E33',
              fontSize: '1.15rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(82, 107, 83, 0.06)',
              transition: 'all 0.15s ease',
              touchAction: 'manipulation',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.94)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onTouchStart={(e) => (e.currentTarget.style.transform = 'scale(0.94)')}
            onTouchEnd={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            0
          </button>

          {/* Backspace button */}
          <button
            type="button"
            onClick={handleBackspace}
            aria-label="Backspace"
            style={{
              height: '46px',
              borderRadius: '12px',
              border: '1px solid rgba(168, 185, 154, 0.3)',
              background: 'transparent',
              color: '#7D8C80',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.15s ease',
            }}
          >
            <Delete size={18} />
          </button>
        </div>

        {/* Small passcode hint */}
        <p
          style={{
            fontSize: '0.74rem',
            color: '#8B9B88',
            marginTop: '16px',
            marginBottom: 0,
          }}
        >
          Special gift key: <strong>0143</strong>
        </p>
      </div>
    </div>
  );
};
