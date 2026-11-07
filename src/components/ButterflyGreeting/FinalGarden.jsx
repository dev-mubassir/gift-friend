import React, { useState } from 'react';
import { RotateCcw, Flower2 } from 'lucide-react';

/**
 * FinalGarden Component (Scene E)
 * Final celebratory garden scene featuring:
 * - Dynamic sign-off heading: "Keep lifting. Keep smiling. Keep blooming, {visitorName}!"
 * - Tap-to-plant interactive flower bed
 * - 4 Hidden clickable friendship notes
 * - Experience Replay button
 */
export const FinalGarden = ({ visitorName = "Tamanna", onReplay }) => {
  // Tap-to-plant flowers state
  const [plantedFlowers, setPlantedFlowers] = useState([
    { id: 1, x: 25, y: 55, emoji: '🌷', scale: 1 },
    { id: 2, x: 45, y: 40, emoji: '🌸', scale: 1.1 },
    { id: 3, x: 70, y: 60, emoji: '🌼', scale: 0.95 },
    { id: 4, x: 82, y: 45, emoji: '🌻', scale: 1.05 },
  ]);

  // Hidden secret notes state
  const [revealedNotes, setRevealedNotes] = useState({});

  const secretNotes = [
    {
      id: 1,
      badge: "Note #1",
      preview: "A thought about confidence...",
      revealed: "You are stronger than any doubt that enters your mind. Trust your hands, trust your form.",
    },
    {
      id: 2,
      badge: "Note #2",
      preview: "A thought on consistency...",
      revealed: "Showing up when you are tired or sore is true athlete character. That work never goes to waste.",
    },
    {
      id: 3,
      badge: "Note #3",
      preview: "A thought on progress...",
      revealed: "Look back at where you started. You've grown so much stronger, both inside and outside the gym.",
    },
    {
      id: 4,
      badge: "Note #4",
      preview: "A tournament reminder...",
      revealed: "When you step onto that competition floor, take up space. Walk proud and lift with fire!",
    },
  ];

  const handlePlantFlower = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const emojis = ['🌸', '🌷', '🌼', '🌺', '🌻', '💐', '🌱'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    setPlantedFlowers((prev) => [
      ...prev.slice(-18), // keep up to 18 flowers
      {
        id: Date.now() + Math.random(),
        x,
        y,
        emoji: randomEmoji,
        scale: 0.85 + Math.random() * 0.4,
      },
    ]);
  };

  const toggleNote = (id) => {
    setRevealedNotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="bf-section" style={{ paddingTop: '50px', paddingBottom: '90px' }}>
      {/* Script Tag */}
      <div
        style={{
          fontFamily: "var(--font-script, 'Caveat', cursive)",
          fontSize: '1.45rem',
          color: '#8B263E',
          marginBottom: '8px',
        }}
      >
        Always Cheering For You
      </div>

      <h2
        style={{
          fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
          fontSize: 'clamp(1.9rem, 4.8vw, 2.9rem)',
          color: '#2F3E33',
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: '16px',
        }}
      >
        Keep lifting. Keep smiling.<br />
        <span style={{ color: '#D62839' }}>Keep blooming, {visitorName}!</span> 🌸
      </h2>

      <p
        style={{
          fontSize: '1rem',
          color: '#5E6D62',
          maxWidth: '560px',
          margin: '0 auto 36px auto',
          lineHeight: 1.6,
        }}
      >
        This little website was made as a friendly reminder of your strength. Tap the soil below to plant flowers, and unfold the hidden secret notes!
      </p>

      {/* --- INTERACTIVE TAP-TO-PLANT GARDEN BED --- */}
      <div style={{ maxWidth: '640px', margin: '0 auto 40px auto', textAlign: 'center' }}>
        <div
          style={{
            fontSize: '0.82rem',
            fontWeight: 600,
            color: '#526B53',
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          <Flower2 size={16} /> Tap the garden bed below to plant new blooms
        </div>

        <div
          onClick={handlePlantFlower}
          role="button"
          tabIndex={0}
          aria-label="Tap to plant flowers"
          style={{
            position: 'relative',
            width: '100%',
            height: '180px',
            background: 'linear-gradient(180deg, #F0EAD6 0%, #DCE8D5 100%)',
            borderRadius: '20px',
            border: '2px dashed rgba(168, 185, 154, 0.6)',
            boxShadow: 'inset 0 4px 12px rgba(82, 107, 83, 0.1), 0 8px 24px rgba(0,0,0,0.05)',
            cursor: 'crosshair',
            overflow: 'hidden',
          }}
        >
          {plantedFlowers.map((f) => (
            <div
              key={f.id}
              style={{
                position: 'absolute',
                left: `${f.x}%`,
                top: `${f.y}%`,
                transform: `translate(-50%, -50%) scale(${f.scale})`,
                fontSize: '1.8rem',
                userSelect: 'none',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.12))',
                animation: 'bfKnotPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) reverse',
              }}
            >
              {f.emoji}
            </div>
          ))}

          {/* Helper caption inside garden bed */}
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '0.74rem',
              color: '#526B53',
              background: 'rgba(255, 253, 245, 0.8)',
              padding: '2px 10px',
              borderRadius: '9999px',
              pointerEvents: 'none',
            }}
          >
            {plantedFlowers.length} blooms planted so far ♡
          </div>
        </div>
      </div>

      {/* --- 4 HIDDEN FRIENDSHIP SECRET NOTES --- */}
      <div style={{ maxWidth: '640px', margin: '0 auto 40px auto' }}>
        <h3
          style={{
            fontFamily: "var(--font-serif, 'Playfair Display', Georgia, serif)",
            fontSize: '1.3rem',
            color: '#2F3E33',
            marginBottom: '14px',
          }}
        >
          Four Little Notes Tucked in the Leaves 🍃
        </h3>

        <div className="bf-notes-container">
          {secretNotes.map((note) => {
            const isRevealed = revealedNotes[note.id];
            return (
              <div
                key={note.id}
                className="bf-secret-note"
                onClick={() => toggleNote(note.id)}
                role="button"
                tabIndex={0}
                style={{
                  width: '100%',
                  borderColor: isRevealed ? '#D62839' : 'rgba(232, 160, 175, 0.6)',
                  backgroundColor: isRevealed ? '#FFF8F9' : '#FFFDF5',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isRevealed ? '#D62839' : '#FDE8ED',
                    color: isRevealed ? '#FFF' : '#D62839',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  {isRevealed ? '🌸' : '✉️'}
                </div>

                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontSize: '0.72rem', color: '#8B9B88', fontWeight: 600, textTransform: 'uppercase' }}>
                    {note.badge} • {isRevealed ? 'Revealed' : 'Tap to unfold'}
                  </div>
                  <div
                    style={{
                      fontSize: '0.88rem',
                      color: isRevealed ? '#2F3E33' : '#526B53',
                      marginTop: '2px',
                      lineHeight: 1.5,
                      fontWeight: isRevealed ? 500 : 400,
                    }}
                  >
                    {isRevealed ? note.revealed : note.preview}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- REPLAY CARD BUTTON --- */}
      {onReplay && (
        <div style={{ marginTop: '30px' }}>
          <button
            onClick={onReplay}
            style={{
              background: '#FFFDF5',
              border: '2px solid rgba(214, 40, 57, 0.4)',
              borderRadius: '9999px',
              padding: '12px 28px',
              fontSize: '0.92rem',
              fontWeight: 600,
              color: '#7D0E19',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(214, 40, 57, 0.12)',
              transition: 'all 0.25s ease',
            }}
          >
            <RotateCcw size={16} /> Untie Card Again 🎀
          </button>
        </div>
      )}
    </section>
  );
};
