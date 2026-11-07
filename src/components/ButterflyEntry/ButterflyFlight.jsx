import React from 'react';

/**
 * Paper Cutout Butterfly (Die-Cut Sticker Look matching reference photo)
 * Realistic pink butterfly with subtle white paper border, dark accents, and drop shadow.
 */
export const PaperButterfly = ({
  size = 46,
  color = "#E86A82",
  accentColor = "#B0304D",
  _wingAngle = 18,
  style = {},
  className = "",
}) => {
  return (
    <div
      className={`bf-card-butterfly ${className}`}
      style={{
        width: size,
        height: size * 0.85,
        display: 'inline-block',
        perspective: '600px',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 100 85"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          <filter id={`shadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#8B263E" floodOpacity="0.25" />
          </filter>
          <linearGradient id={`wingGrad-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA6B8" />
            <stop offset="60%" stopColor={color} />
            <stop offset="100%" stopColor={accentColor} />
          </linearGradient>
        </defs>

        <g filter={`url(#shadow-${size})`}>
          {/* White Die-cut Border (Backdrop) */}
          <path
            d="M50 42 C45 20, 20 5, 5 18 C-4 26, 2 52, 20 60 C32 65, 42 58, 48 46 L48 55 C38 65, 26 78, 38 84 C48 88, 50 68, 50 60 C50 68, 52 88, 62 84 C74 78, 62 65, 52 55 L52 46 C58 58, 68 65, 80 60 C98 52, 104 26, 95 18 C80 5, 55 20, 50 42 Z"
            fill="#FFFDF5"
            stroke="#F7D4DC"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Left Wing with 3D Transform Origin */}
          <path
            d="M48 42 C43 23, 22 10, 10 20 C2 28, 7 50, 22 56 C32 60, 42 54, 48 44 Z"
            fill={`url(#wingGrad-${size})`}
            stroke="#8B263E"
            strokeWidth="1.2"
          />
          {/* Left Bottom Wing */}
          <path
            d="M48 48 C40 58, 28 68, 38 78 C45 82, 48 68, 48 54 Z"
            fill={`url(#wingGrad-${size})`}
            stroke="#8B263E"
            strokeWidth="1"
            opacity="0.95"
          />

          {/* Right Wing */}
          <path
            d="M52 42 C57 23, 78 10, 90 20 C98 28, 93 50, 78 56 C68 60, 58 54, 52 44 Z"
            fill={`url(#wingGrad-${size})`}
            stroke="#8B263E"
            strokeWidth="1.2"
          />
          {/* Right Bottom Wing */}
          <path
            d="M52 48 C60 58, 72 68, 62 78 C55 82, 52 68, 52 54 Z"
            fill={`url(#wingGrad-${size})`}
            stroke="#8B263E"
            strokeWidth="1"
            opacity="0.95"
          />

          {/* Butterfly Wing Vein Highlights */}
          <path d="M48 42 Q32 30 20 28 M48 44 Q30 42 22 50" stroke="#FFF" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>
          <path d="M52 42 Q68 30 80 28 M52 44 Q70 42 78 50" stroke="#FFF" strokeWidth="1" opacity="0.6" strokeLinecap="round"/>

          {/* Slender Body & Antennae */}
          <ellipse cx="50" cy="46" rx="2.5" ry="14" fill="#5A1A28" />
          <path d="M49 33 Q42 24 38 22" stroke="#5A1A28" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="37" cy="22" r="1.5" fill="#5A1A28"/>
          <path d="M51 33 Q58 24 62 22" stroke="#5A1A28" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="63" cy="22" r="1.5" fill="#5A1A28"/>
        </g>
      </svg>
    </div>
  );
};

/**
 * 3D Flapping Animated Butterfly in Flight
 * Flaps left and right wings smoothly in 3D perspective with realistic depth.
 */
export const FlappingButterfly = ({
  size = 32,
  color = "#E86A82",
  speed = "0.28s",
  style = {},
  className = "",
}) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size * 0.8,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '300px',
        transformStyle: 'preserve-3d',
        ...style,
      }}
    >
      {/* Left Wing Flap */}
      <div
        style={{
          width: size * 0.5,
          height: size * 0.8,
          transformOrigin: 'right center',
          animation: `bfWingFlapLeft ${speed} infinite ease-in-out`,
        }}
      >
        <svg viewBox="0 0 50 80" width="100%" height="100%" fill="none">
          <path
            d="M48 40 C43 20, 20 6, 8 16 C0 24, 6 46, 22 54 C32 58, 42 52, 48 42 Z"
            fill={color}
            stroke="#FFFDF5"
            strokeWidth="1.8"
          />
          <path
            d="M48 45 C40 56, 26 66, 36 76 C43 80, 48 66, 48 52 Z"
            fill={color}
            stroke="#FFFDF5"
            strokeWidth="1.4"
            opacity="0.9"
          />
          <path d="M48 40 Q30 28 18 24" stroke="#FFF" strokeWidth="1" opacity="0.6"/>
        </svg>
      </div>

      {/* Center Body */}
      <div
        style={{
          width: size * 0.08,
          height: size * 0.45,
          background: '#4A1521',
          borderRadius: '4px',
          zIndex: 2,
          flexShrink: 0,
        }}
      />

      {/* Right Wing Flap */}
      <div
        style={{
          width: size * 0.5,
          height: size * 0.8,
          transformOrigin: 'left center',
          animation: `bfWingFlapRight ${speed} infinite ease-in-out`,
        }}
      >
        <svg viewBox="0 0 50 80" width="100%" height="100%" fill="none">
          <path
            d="M2 40 C7 20, 30 6, 42 16 C50 24, 44 46, 28 54 C18 58, 8 52, 2 42 Z"
            fill={color}
            stroke="#FFFDF5"
            strokeWidth="1.8"
          />
          <path
            d="M2 45 C10 56, 24 66, 14 76 C7 80, 2 66, 2 52 Z"
            fill={color}
            stroke="#FFFDF5"
            strokeWidth="1.4"
            opacity="0.9"
          />
          <path d="M2 40 Q20 28 32 24" stroke="#FFF" strokeWidth="1" opacity="0.6"/>
        </svg>
      </div>
    </div>
  );
};
