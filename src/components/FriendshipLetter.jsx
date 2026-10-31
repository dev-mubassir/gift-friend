import React, { useState, useEffect, useRef } from 'react';
import { Mail, Play, RotateCcw, Check, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/content';
import { BotanicalSprig, FloralCorner, BlossomIcon } from './BotanicalDecorations';

/**
 * Screen 7: Personal Friendship Letter
 * Cream paper aesthetic with vintage ruled lines, deckled shadow,
 * typewriter-style reveal, pressed botanical decorations, and handwritten signature.
 */
export default function FriendshipLetter() {
  const { letter } = siteConfig;
  const fullText = letter.paragraphs.join('\n\n');

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const letterRef = useRef(null);

  // Auto-start typewriter when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          startTypewriter();
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (letterRef.current) {
      observer.observe(letterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const startTypewriter = () => {
    setIsTyping(true);
    setDisplayedText('');
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 22); // ~22ms per character creates a rhythmic, realistic typing feel

    return () => clearInterval(interval);
  };

  const showInstantly = () => {
    setDisplayedText(fullText);
    setIsTyping(false);
  };

  return (
    <section
      id="friendship-letter"
      ref={letterRef}
      style={{
        padding: '70px 16px 90px 16px',
        maxWidth: '740px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '38px' }}>
        <div style={{ marginBottom: '14px' }}>
          <span className="botanical-tag">
            <Mail size={13} />
            <span>{letter.badge}</span>
          </span>
        </div>

        <h2
          className="font-serif"
          style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.6rem)',
            fontWeight: 500,
            color: '#2F3E33',
            marginBottom: '8px',
          }}
        >
          A Letter For You
        </h2>
        <p className="font-script" style={{ fontSize: '1.4rem', color: '#526B53' }}>
          written from the heart ♡
        </p>
      </div>

      {/* Main Vintage Paper Letter */}
      <div
        className="letter-paper"
        style={{
          borderRadius: '18px',
          padding: 'clamp(28px, 6vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Washi tape at top center */}
        <div className="washi-tape pink" style={{ top: '-10px' }} />

        {/* Delicate Pressed Floral Corner Decorations */}
        <FloralCorner
          className="absolute"
          style={{ top: '8px', right: '8px', pointerEvents: 'none' }}
        />
        <FloralCorner
          className="absolute"
          style={{
            bottom: '8px',
            left: '8px',
            transform: 'rotate(180deg)',
            pointerEvents: 'none',
          }}
        />

        {/* Top Postal Stamp & Date */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '28px',
            borderBottom: '1px dashed rgba(168, 185, 154, 0.4)',
            paddingBottom: '14px',
          }}
        >
          <span
            style={{
              fontSize: '0.82rem',
              color: '#637567',
              letterSpacing: '0.04em',
              fontStyle: 'italic',
            }}
          >
            {letter.date}
          </span>

          {/* Vintage Botanical Postal Stamp */}
          <div
            style={{
              border: '1.5px dashed #A8B99A',
              padding: '6px 10px',
              borderRadius: '4px',
              background: '#FFFDF5',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <BlossomIcon size={16} color="#E8C7CC" />
            <span
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#526B53',
                fontWeight: 600,
              }}
            >
              Postage • Pure Care
            </span>
          </div>
        </div>

        {/* Salutation */}
        <p
          className="font-script"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
            color: '#2F3E33',
            marginBottom: '20px',
            lineHeight: 1.2,
          }}
        >
          {letter.salutation}
        </p>

        {/* Typewriter Body Content */}
        <div
          style={{
            minHeight: '180px',
            fontSize: 'clamp(1rem, 2.5vw, 1.12rem)',
            lineHeight: 1.85,
            color: '#38483B',
            whiteSpace: 'pre-line',
            fontFamily: 'var(--font-serif)',
          }}
        >
          {displayedText}
          {isTyping && (
            <span
              className="caret-blink"
              style={{
                display: 'inline-block',
                width: '2px',
                height: '1.2em',
                backgroundColor: '#526B53',
                marginLeft: '3px',
                verticalAlign: 'text-bottom',
              }}
            />
          )}
        </div>

        {/* Closing & Handwritten Signature */}
        <div
          style={{
            marginTop: '36px',
            textAlign: 'right',
            opacity: displayedText.length > 50 ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        >
          <p style={{ fontSize: '0.95rem', color: '#637567', fontStyle: 'italic' }}>
            {letter.closing}
          </p>
          <p
            className="font-script"
            style={{
              fontSize: 'clamp(2rem, 5vw, 2.5rem)',
              color: '#526B53',
              marginTop: '4px',
              lineHeight: 1.1,
            }}
          >
            {letter.signature}
          </p>
        </div>

        {/* Interactive Typewriter Controls */}
        <div
          style={{
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px dashed rgba(168, 185, 154, 0.3)',
          }}
        >
          {isTyping ? (
            <button
              onClick={showInstantly}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '6px 16px' }}
            >
              <span>Read Full Letter Instantly</span>
            </button>
          ) : (
            <button
              onClick={startTypewriter}
              className="btn-secondary"
              style={{ fontSize: '0.85rem', padding: '6px 16px', gap: '6px' }}
            >
              <RotateCcw size={14} />
              <span>Replay Letter Reveal</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
