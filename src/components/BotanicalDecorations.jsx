import React from 'react';

/**
 * Reusable Delicate SVG Botanical Illustrations
 * Lightweight, vector-based, responsive, zero raster downloads
 */

export const BotanicalSprig = ({ className = "w-12 h-12", color = "#526B53" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'inline-block' }}>
    <path d="M50 90 Q48 50 50 15" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
    {/* Left Leaves */}
    <path d="M49 75 Q32 70 30 58 Q44 60 49 75" fill="#DCE8D5" stroke={color} strokeWidth="1.5" />
    <path d="M49 55 Q28 48 30 36 Q42 40 49 55" fill="#A8B99A" stroke={color} strokeWidth="1.5" />
    <path d="M50 35 Q34 26 38 16 Q46 22 50 35" fill="#DCE8D5" stroke={color} strokeWidth="1.5" />
    {/* Right Leaves */}
    <path d="M50 68 Q68 62 67 50 Q54 54 50 68" fill="#A8B99A" stroke={color} strokeWidth="1.5" />
    <path d="M50 48 Q70 40 68 28 Q56 34 50 48" fill="#DCE8D5" stroke={color} strokeWidth="1.5" />
    <path d="M50 25 Q64 16 60 8 Q53 14 50 25" fill="#A8B99A" stroke={color} strokeWidth="1.5" />
    {/* Top Bud */}
    <circle cx="50" cy="14" r="3.5" fill="#E8C7CC" stroke={color} strokeWidth="1.2"/>
  </svg>
);

export const BotanicalWreath = ({ className = "w-32 h-32" }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft Wreath Circle */}
    <circle cx="100" cy="100" r="75" stroke="#DCE8D5" strokeWidth="2" strokeDasharray="3 4" opacity="0.6"/>
    {/* Leaf Sprigs around circle */}
    <path d="M100 25 Q125 22 145 35 Q135 50 115 42" fill="#DCE8D5" stroke="#526B53" strokeWidth="1.2"/>
    <path d="M175 100 Q178 125 165 145 Q150 135 158 115" fill="#A8B99A" stroke="#526B53" strokeWidth="1.2"/>
    <path d="M100 175 Q75 178 55 165 Q65 150 85 158" fill="#DCE8D5" stroke="#526B53" strokeWidth="1.2"/>
    <path d="M25 100 Q22 75 35 55 Q50 65 42 85" fill="#A8B99A" stroke="#526B53" strokeWidth="1.2"/>
    {/* Small Petals / Buds */}
    <circle cx="155" cy="50" r="5" fill="#E8C7CC" />
    <circle cx="170" cy="85" r="4" fill="#EBC9B5" />
    <circle cx="145" cy="160" r="5" fill="#E8C7CC" />
    <circle cx="45" cy="145" r="5" fill="#EBC9B5" />
    <circle cx="50" cy="45" r="5" fill="#E8C7CC" />
    <circle cx="100" cy="20" r="3.5" fill="#D4A373" />
    <circle cx="100" cy="180" r="3.5" fill="#D4A373" />
  </svg>
);

export const BlossomIcon = ({ size = 28, color = "#E8C7CC", center = "#D4A373" }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
    <circle cx="20" cy="12" r="6" fill={color} opacity="0.9" />
    <circle cx="12" cy="18" r="6" fill={color} opacity="0.9" />
    <circle cx="28" cy="18" r="6" fill={color} opacity="0.9" />
    <circle cx="15" cy="26" r="6" fill={color} opacity="0.9" />
    <circle cx="25" cy="26" r="6" fill={color} opacity="0.9" />
    <circle cx="20" cy="20" r="4.5" fill={center} />
    <circle cx="20" cy="20" r="2.5" fill="#FFFDF5" />
  </svg>
);

export const DaisyFlower = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block' }}>
    <ellipse cx="18" cy="8" rx="3.5" ry="6" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="18" cy="28" rx="3.5" ry="6" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="8" cy="18" rx="6" ry="3.5" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="28" cy="18" rx="6" ry="3.5" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="11" cy="11" rx="4" ry="5.5" transform="rotate(-45 11 11)" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="25" cy="11" rx="4" ry="5.5" transform="rotate(45 25 11)" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="11" cy="25" rx="4" ry="5.5" transform="rotate(45 11 25)" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <ellipse cx="25" cy="25" rx="4" ry="5.5" transform="rotate(-45 25 25)" fill="#FFFDF5" stroke="#EBC9B5" strokeWidth="0.8"/>
    <circle cx="18" cy="18" r="4.5" fill="#D4A373" />
  </svg>
);

export const FloralCorner = ({ className = "", style = {} }) => (
  <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M5 5 Q40 10 50 40 Q55 60 75 75" stroke="#A8B99A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
    <path d="M5 5 Q10 40 40 50 Q60 55 75 75" stroke="#DCE8D5" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
    {/* Small Leaf clusters */}
    <path d="M25 12 Q35 15 30 25 Q20 20 25 12" fill="#DCE8D5" stroke="#526B53" strokeWidth="1"/>
    <path d="M12 25 Q15 35 25 30 Q20 20 12 25" fill="#A8B99A" stroke="#526B53" strokeWidth="1"/>
    <circle cx="48" cy="38" r="4" fill="#E8C7CC" />
    <circle cx="38" cy="48" r="3.5" fill="#EBC9B5" />
    <circle cx="68" cy="68" r="3" fill="#D4A373" opacity="0.8"/>
  </svg>
);

export const BotanicalDivider = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '24px 0', opacity: 0.85 }}>
    <span style={{ width: '45px', height: '1px', background: 'linear-gradient(to right, transparent, #A8B99A)' }} />
    <BlossomIcon size={20} color="#E8C7CC" />
    <span style={{ width: '45px', height: '1px', background: 'linear-gradient(to left, transparent, #A8B99A)' }} />
  </div>
);

/**
 * Botanical Dumbbell Illustration
 * Elegant sports motif wrapped with delicate botanical vines and tiny blossoms
 */
export const BotanicalDumbbell = ({ size = 48, className = "" }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ display: 'inline-block' }}>
    {/* Left Weight Plates */}
    <rect x="6" y="8" width="8" height="38" rx="3" fill="#A8B99A" stroke="#526B53" strokeWidth="1.5"/>
    <rect x="16" y="13" width="7" height="28" rx="2.5" fill="#DCE8D5" stroke="#526B53" strokeWidth="1.5"/>
    {/* Central Bar */}
    <rect x="23" y="24" width="54" height="6" rx="2" fill="#526B53"/>
    {/* Right Weight Plates */}
    <rect x="77" y="13" width="7" height="28" rx="2.5" fill="#DCE8D5" stroke="#526B53" strokeWidth="1.5"/>
    <rect x="86" y="8" width="8" height="38" rx="3" fill="#A8B99A" stroke="#526B53" strokeWidth="1.5"/>
    {/* Botanical Vine Wrapped around Bar */}
    <path d="M26 27 Q40 18 50 27 Q60 36 74 27" stroke="#526B53" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Little Vine Leaves */}
    <path d="M36 21 Q40 16 43 22 Z" fill="#A8B99A"/>
    <path d="M62 33 Q66 38 69 32 Z" fill="#DCE8D5"/>
    {/* Miniature Center Blossom */}
    <circle cx="50" cy="27" r="4.5" fill="#E8C7CC"/>
    <circle cx="50" cy="27" r="2" fill="#D4A373"/>
  </svg>
);
