import React, { useState, useEffect, useRef } from 'react';
import { Mail, RotateCcw } from 'lucide-react';
import { siteConfig } from '../config/content';
import { FloralCorner, BlossomIcon } from './BotanicalDecorations';

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
      { threshold: 0.2 }
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
    }, 20); // ~20ms per character

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
            fontSize: 'clamp(2rem, 4.5vw, 2.7rem)',
            fontWeight: 600,
            color: '#2F3E33',
            marginBottom: '8px',
          }}
        >
          {letter.heading}
        </h2>
        <p className="font-script" style={{ fontSize: '1.45rem', color: '#526B53' }}>
          a note of encouragement before the big day 🌿
        </p>
      </div>

      {/* Main Vintage Paper Letter */}
      <div
        className="letter-paper"
        style={{
          borderRadius: '20px',
          padding: 'clamp(28px, 6vw, 48px)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-medium)',
        }}
      >
        {/* Washi tape at top center */}
        <div className="washi-tape sage" style={{ top: '-10px' }} />

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
              fontSize: '0.85rem',
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
              padding: '6px 12px',
              borderRadius: '6px',
              background: '#FFFDF5',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <BlossomIcon size={16} color="#A8B99A" />
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#526B53',
                fontWeight: 600,
              }}
            >
              Strength & Friendship
            </span>
          </div>
        </div>

        {/* Salutation */}
        <p
          className="font-script"
          style={{
            fontSize: 'clamp(1.85rem, 4.5vw, 2.3rem)',
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
            minHeight: '200px',
            fontSize: 'clamp(1.02rem, 2.5vw, 1.15rem)',
            lineHeight: 1.9,
            color: '#344538',
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
          <p style={{ fontSize: '1rem', color: '#637567', fontStyle: 'italic' }}>
            {letter.closing}
          </p>
          <p
            className="font-script"
            style={{
              fontSize: 'clamp(1.8rem, 4.5vw, 2.3rem)',
              color: '#526B53',
              marginTop: '4px',
              lineHeight: 1.1,
            }}
          >
            {letter.signature}
          </p>
        </div>

        {/* Interactive Controls */}
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
