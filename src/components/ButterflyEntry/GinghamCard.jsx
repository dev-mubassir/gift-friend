import React from 'react';
import { PaperButterfly } from './ButterflyFlight';
import { RibbonBow } from './RibbonBow';

/**
 * GinghamCard Component
 * Realistic handmade gatefold card inspired directly by the reference photo:
 * - Pink & cream checkered gingham pattern with subtle heart motifs.
 * - 3D paper die-cut butterflies scattered across both front flaps.
 * - Rose-red satin ribbon band with interactive center bow.
 * - 3D perspective gatefold opening outward when untied.
 */
export const GinghamCard = ({
  visitorName = "Tamanna",
  isUntying = false,
  isOpen = false,
  onUntie,
}) => {
  return (
    <div className="bf-card-stage">
      <div className={`bf-card-wrapper ${isOpen ? 'open' : ''}`}>
        
        {/* --- INSIDE BACKBOARD (Revealed when card opens) --- */}
        <div className="bf-card-inside">
          <div className={`bf-inside-glow ${isOpen ? 'active' : ''}`} />

          <div style={{ position: 'relative', zIndex: 5, maxWidth: '280px' }}>
            <div style={{ fontSize: '2.4rem', marginBottom: '12px' }}>🌸✨</div>
            <h3
              style={{
                fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
                fontSize: '1.45rem',
                color: '#526B53',
                marginBottom: '8px',
                fontWeight: 600,
              }}
            >
              Welcome inside, {visitorName}!
            </h3>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#5E6D62',
                lineHeight: 1.6,
                marginBottom: '16px',
              }}
            >
              Your friend prepared a gentle garden of strength, bright moments, and friendship notes for you.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(168, 185, 154, 0.25)',
                color: '#3B523C',
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              <span>🦋</span> Stepping into the garden...
            </div>
          </div>
        </div>

        {/* --- LEFT GATEFOLD PANEL --- */}
        <div className="bf-panel bf-panel-left bf-gingham-paper">
          {/* Top Left Paper Butterfly */}
          <PaperButterfly
            size={46}
            color="#E86A82"
            style={{
              position: 'absolute',
              top: '72px',
              left: '18px',
              transform: 'rotate(-18deg)',
            }}
          />

          {/* Middle Left Paper Butterfly */}
          <PaperButterfly
            size={50}
            color="#E05B77"
            style={{
              position: 'absolute',
              top: '190px',
              left: '52px',
              transform: 'rotate(22deg)',
            }}
          />

          {/* Lower Middle Left Paper Butterfly */}
          <PaperButterfly
            size={44}
            color="#E86A82"
            style={{
              position: 'absolute',
              bottom: '160px',
              left: '26px',
              transform: 'rotate(-8deg)',
            }}
          />

          {/* Bottom Left Paper Butterfly */}
          <PaperButterfly
            size={48}
            color="#D94B69"
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '60px',
              transform: 'rotate(32deg)',
            }}
          />

          {/* Left Ribbon Half */}
          <div
            className="bf-ribbon-band"
            style={{
              right: 0,
              left: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: '2px',
              borderBottomLeftRadius: '2px',
              animation: isUntying ? 'bfBandSlideLeft 0.7s 0.3s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
            }}
          />
        </div>

        {/* --- RIGHT GATEFOLD PANEL --- */}
        <div className="bf-panel bf-panel-right bf-gingham-paper">
          {/* Top Right Paper Butterfly */}
          <PaperButterfly
            size={50}
            color="#E05B77"
            style={{
              position: 'absolute',
              top: '38px',
              right: '34px',
              transform: 'rotate(15deg)',
            }}
          />

          {/* Upper Mid Right Paper Butterfly */}
          <PaperButterfly
            size={46}
            color="#E86A82"
            style={{
              position: 'absolute',
              top: '145px',
              right: '54px',
              transform: 'rotate(-20deg)',
            }}
          />

          {/* Lower Right Paper Butterfly */}
          <PaperButterfly
            size={48}
            color="#D94B69"
            style={{
              position: 'absolute',
              bottom: '210px',
              right: '22px',
              transform: 'rotate(28deg)',
            }}
          />

          {/* Bottom Right Paper Butterfly */}
          <PaperButterfly
            size={52}
            color="#E86A82"
            style={{
              position: 'absolute',
              bottom: '75px',
              right: '40px',
              transform: 'rotate(-14deg)',
            }}
          />

          {/* Right Ribbon Half */}
          <div
            className="bf-ribbon-band"
            style={{
              left: 0,
              right: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: '2px',
              borderBottomRightRadius: '2px',
              animation: isUntying ? 'bfBandSlideRight 0.7s 0.3s cubic-bezier(0.2, 0.8, 0.4, 1) forwards' : undefined,
            }}
          />
        </div>

        {/* --- CENTER SEAM DROP SHADOW --- */}
        {!isOpen && <div className="bf-center-seam" />}

        {/* --- FRONT CARD HEADLINE BADGE (Visible before opening) --- */}
        {!isOpen && (
          <div className="bf-card-header" style={{ opacity: isUntying ? 0 : 1, transition: 'opacity 0.4s' }}>
            <p
              style={{
                fontFamily: "var(--font-script, 'Caveat', cursive)",
                fontSize: '1.25rem',
                color: '#8B263E',
                margin: 0,
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              A little something made just for you, {visitorName} ♡
            </p>
            <p
              style={{
                fontSize: '0.74rem',
                color: '#526B53',
                margin: '2px 0 0 0',
                letterSpacing: '0.03em',
              }}
            >
              Because you deserve a little happiness.
            </p>
          </div>
        )}

        {/* --- FRONT CARD INSTRUCTION BADGE --- */}
        {!isOpen && (
          <div className="bf-card-instruction" style={{ opacity: isUntying ? 0 : 1, transition: 'opacity 0.4s' }}>
            <p
              style={{
                fontSize: '0.78rem',
                color: '#7D0E19',
                margin: 0,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <span>🎀</span> Untie the little ribbon to open your surprise
            </p>
          </div>
        )}

        {/* --- INTERACTIVE CENTER RIBBON BOW --- */}
        <RibbonBow
          onClick={onUntie}
          isUntying={isUntying}
          isOpened={isOpen}
          disabled={isUntying || isOpen}
        />

      </div>
    </div>
  );
};
