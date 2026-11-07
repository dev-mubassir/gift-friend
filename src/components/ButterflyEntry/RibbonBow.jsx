import React from 'react';

/**
 * RibbonBow Component
 * Realistic Rose-Red Satin Bow with left/right loops, center knot, and cascading tails.
 * Handles the interactive tap with multi-stage untying animation.
 */
export const RibbonBow = ({
  onClick,
  isUntying = false,
  isOpened = false,
  disabled = false,
}) => {
  if (isOpened) return null;

  return (
    <div
      className="bf-bow-button"
      onClick={!disabled ? onClick : undefined}
      role="button"
      tabIndex={0}
      aria-label="Untie the ribbon to open your surprise"
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          e.preventDefault();
          onClick();
        }
      }}
      style={{
        animation: isUntying ? 'bfRibbonShake 0.4s ease-in-out' : undefined,
      }}
    >
      {/* Subtle pulse ring around bow to invite tapping */}
      {!isUntying && <div className="bf-bow-glow-ring" />}

      <svg
        viewBox="0 0 160 140"
        width="130"
        height="115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          overflow: 'visible',
          filter: 'drop-shadow(0 6px 12px rgba(125, 14, 25, 0.45))',
        }}
      >
        <defs>
          {/* Rich Satin Red Ribbon Gradients */}
          <linearGradient id="satinGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FA5266" />
            <stop offset="25%" stopColor="#D62839" />
            <stop offset="70%" stopColor="#B81D2D" />
            <stop offset="100%" stopColor="#7D0E19" />
          </linearGradient>

          <linearGradient id="satinHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="45%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.3)" />
          </linearGradient>

          <linearGradient id="satinDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B81D2D" />
            <stop offset="100%" stopColor="#5E0911" />
          </linearGradient>

          {/* Ribbon Shadow */}
          <filter id="bowInnerGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="0" dy="2" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.4" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Left Ribbon Tail */}
        <g
          style={{
            transformOrigin: '76px 65px',
            animation: isUntying ? 'bfTailSlideLeft 0.75s 0.15s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
          }}
        >
          <path
            d="M74 68 C70 85, 52 110, 36 128 L50 134 L58 122 L72 138 C80 115, 80 90, 78 72 Z"
            fill="url(#satinGradMain)"
            stroke="#7D0E19"
            strokeWidth="0.8"
          />
          {/* Left Tail Satin Shimmer */}
          <path
            d="M72 70 C68 85, 52 108, 42 124"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* 2. Right Ribbon Tail */}
        <g
          style={{
            transformOrigin: '84px 65px',
            animation: isUntying ? 'bfTailSlideRight 0.75s 0.15s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
          }}
        >
          <path
            d="M86 68 C90 85, 108 110, 124 128 L110 134 L102 122 L88 138 C80 115, 80 90, 82 72 Z"
            fill="url(#satinGradMain)"
            stroke="#7D0E19"
            strokeWidth="0.8"
          />
          {/* Right Tail Satin Shimmer */}
          <path
            d="M88 70 C92 85, 108 108, 118 124"
            stroke="rgba(255, 255, 255, 0.55)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>

        {/* 3. Left Ribbon Loop */}
        <g
          style={{
            transformOrigin: '76px 65px',
            animation: isUntying ? 'bfLoopLoosenLeft 0.8s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
          }}
        >
          {/* Loop Inner Shadow */}
          <path
            d="M76 65 C68 45, 36 28, 16 46 C2 58, 16 80, 48 76 C65 74, 73 68, 76 65 Z"
            fill="url(#satinDark)"
          />
          {/* Loop Main Face */}
          <path
            d="M76 65 C64 42, 34 26, 14 42 C-2 56, 10 82, 45 76 C62 73, 72 67, 76 65 Z"
            fill="url(#satinGradMain)"
            stroke="#7D0E19"
            strokeWidth="0.8"
          />
          {/* Loop Gloss Highlight */}
          <path
            d="M70 54 C55 36, 32 32, 18 42 C12 48, 16 62, 32 64"
            stroke="rgba(255, 255, 255, 0.65)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 4. Right Ribbon Loop */}
        <g
          style={{
            transformOrigin: '84px 65px',
            animation: isUntying ? 'bfLoopLoosenRight 0.8s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
          }}
        >
          {/* Loop Inner Shadow */}
          <path
            d="M84 65 C92 45, 124 28, 144 46 C158 58, 144 80, 112 76 C95 74, 87 68, 84 65 Z"
            fill="url(#satinDark)"
          />
          {/* Loop Main Face */}
          <path
            d="M84 65 C96 42, 126 26, 146 42 C162 56, 150 82, 115 76 C98 73, 88 67, 84 65 Z"
            fill="url(#satinGradMain)"
            stroke="#7D0E19"
            strokeWidth="0.8"
          />
          {/* Loop Gloss Highlight */}
          <path
            d="M90 54 C105 36, 128 32, 142 42 C148 48, 144 62, 128 64"
            stroke="rgba(255, 255, 255, 0.65)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* 5. Center Knot (Gathered Velvet / Satin Knot) */}
        <g
          style={{
            transformOrigin: '80px 65px',
            animation: isUntying ? 'bfKnotPop 0.65s 0.2s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
          }}
        >
          {/* Shadow Behind Knot */}
          <ellipse cx="80" cy="67" rx="16" ry="17" fill="rgba(60, 6, 12, 0.5)" />
          {/* Knot Base */}
          <path
            d="M68 56 C67 52, 93 52, 92 56 C95 65, 94 72, 91 76 C89 79, 71 79, 69 76 C66 72, 65 65, 68 56 Z"
            fill="url(#satinGradMain)"
            stroke="#6B0A15"
            strokeWidth="1.2"
          />
          {/* Center Knot Wrinkles / Folds */}
          <path
            d="M74 55 C73 63, 74 71, 75 77"
            stroke="#7D0E19"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M85 55 C86 63, 85 71, 84 77"
            stroke="#7D0E19"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Center Knot Highlight */}
          <ellipse cx="79" cy="64" rx="4.5" ry="8" fill="rgba(255, 255, 255, 0.45)" />
        </g>
      </svg>
    </div>
  );
};
