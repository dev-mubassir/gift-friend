import React, { useEffect, useRef } from 'react';

/**
 * EndlessFlowerRain Component
 * Lightweight HTML5 Canvas particle system:
 * - Falling flower petals, daisies, butterflies, and sparkles in pastel tones (pink, peach, pale yellow, sage, cream, lavender).
 * - Organic drifting motion with sine-wave horizontal float and gentle rotation.
 * - Auto-throttled on mobile (fewer particles) and pauses on document.hidden or prefers-reduced-motion.
 */
export const EndlessFlowerRain = ({ active = true, density = 'normal' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animId;
    let isTabVisible = !document.hidden;

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? (density === 'high' ? 36 : 24) : (density === 'high' ? 70 : 45);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      '#FFA6B8', // Pink
      '#E8C7CC', // Muted pink
      '#EBC9B5', // Soft peach
      '#FFF3B0', // Pale sunny yellow
      '#A8B99A', // Sage green
      '#FFFDF5', // Soft ivory
      '#D1C4E9', // Soft lavender
    ];

    const types = ['petal', 'cherry', 'leaf', 'sparkle'];

    class Petal {
      constructor(initial = true) {
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.width;
        this.y = initial ? Math.random() * canvas.height : -30 - Math.random() * 40;
        this.size = 9 + Math.random() * 11;
        this.speedY = 0.75 + Math.random() * 1.3;
        this.baseX = this.x;
        this.phase = Math.random() * Math.PI * 2;
        this.phaseSpeed = 0.015 + Math.random() * 0.025;
        this.amplitude = 18 + Math.random() * 24;
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 1.8;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.type = types[Math.floor(Math.random() * types.length)];
        this.opacity = 0.65 + Math.random() * 0.35;
      }

      update() {
        this.y += this.speedY;
        this.phase += this.phaseSpeed;
        this.x = this.baseX + Math.sin(this.phase) * this.amplitude;
        this.rotation += this.rotSpeed;

        if (this.y > canvas.height + 40) {
          this.reset(false);
        }
      }

      draw(c) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate((this.rotation * Math.PI) / 180);
        c.globalAlpha = this.opacity;

        if (this.type === 'petal') {
          c.fillStyle = this.color;
          c.beginPath();
          c.moveTo(0, -this.size / 2);
          c.quadraticCurveTo(this.size / 2, 0, 0, this.size / 2);
          c.quadraticCurveTo(-this.size / 2, 0, 0, -this.size / 2);
          c.fill();
        } else if (this.type === 'cherry') {
          c.fillStyle = this.color;
          c.beginPath();
          c.moveTo(0, 0);
          c.bezierCurveTo(-this.size / 3, -this.size / 2, -this.size / 2, -this.size, 0, -this.size);
          c.bezierCurveTo(this.size / 2, -this.size, this.size / 3, -this.size / 2, 0, 0);
          c.fill();
        } else if (this.type === 'leaf') {
          c.fillStyle = '#A8B99A';
          c.beginPath();
          c.moveTo(-this.size / 2, 0);
          c.quadraticCurveTo(0, -this.size / 3, this.size / 2, 0);
          c.quadraticCurveTo(0, this.size / 3, -this.size / 2, 0);
          c.fill();
        } else {
          // Sparkle
          c.fillStyle = '#FFF3B0';
          c.beginPath();
          c.arc(0, 0, this.size * 0.18, 0, Math.PI * 2);
          c.fill();
        }

        c.restore();
      }
    }

    const petals = Array.from({ length: count }, () => new Petal(true));

    const render = () => {
      if (isTabVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < petals.length; i++) {
          petals[i].update();
          petals[i].draw(ctx);
        }
      }
      animId = requestAnimationFrame(render);
    };

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, [active, density]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1, // Keep behind cards and text
      }}
      aria-hidden="true"
    />
  );
};
