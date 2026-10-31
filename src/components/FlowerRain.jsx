import React, { useEffect, useRef } from 'react';

/**
 * High-performance, lightweight Botanical Flower Rain Canvas
 * Renders multiple pastel flower types: sakura petals, 5-petal daisies,
 * peach blossoms, leaves, and tiny sparkles.
 * Automatically throttles on mobile and pauses when tab is hidden.
 * Set with zIndex: 0 so flowers remain gracefully in the background behind content.
 */
export default function FlowerRain({ active = true, burst = false, density = 'normal' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      return; // Do not animate particles for users who prefer reduced motion
    }

    let animationFrameId;
    let isTabVisible = !document.hidden;

    // Responsive particle count based on screen width
    const isMobile = window.innerWidth < 768;
    const baseCount = isMobile ? (density === 'high' ? 45 : 28) : (density === 'high' ? 80 : 55);
    const particleCount = burst ? baseCount * 1.5 : baseCount;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Color palette matching botanical theme
    const colors = [
      '#E8C7CC', // Muted floral pink
      '#EBC9B5', // Soft peach
      '#DCE8D5', // Light green
      '#FFFDF5', // Soft ivory
      '#A8B99A', // Sage green
      '#F4D5DB', // Sakura blush
    ];

    // Flower shapes: 'petal', 'sakura', 'daisy', 'leaf', 'sparkle'
    const shapes = ['petal', 'sakura', 'daisy', 'leaf', 'sparkle'];

    class Particle {
      constructor(isInitial = true) {
        this.reset(isInitial);
      }

      reset(isInitial = false) {
        this.x = Math.random() * canvas.width;
        // If initial, scatter across whole height; if respawning, start above top
        this.y = isInitial ? Math.random() * canvas.height : -30 - Math.random() * 50;
        this.size = 8 + Math.random() * 12; // 8px to 20px
        this.speedY = 0.8 + Math.random() * 1.6; // Soft gentle fall
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.8 - 0.2; // Gentle horizontal drift
        this.rotation = Math.random() * 360;
        this.rotSpeed = (Math.random() - 0.5) * 1.5;
        this.oscillationSpeed = 0.02 + Math.random() * 0.03;
        this.oscillationDistance = 20 + Math.random() * 30;
        this.initialX = this.x;
        this.oscillationCounter = Math.random() * Math.PI * 2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.shape = shapes[Math.floor(Math.random() * shapes.length)];
        this.opacity = 0.7 + Math.random() * 0.3;
      }

      update() {
        this.y += this.speedY;
        this.oscillationCounter += this.oscillationSpeed;
        this.x = this.initialX + Math.sin(this.oscillationCounter) * this.oscillationDistance;
        this.rotation += this.rotSpeed;

        // Reset when particle drifts below bottom
        if (this.y > canvas.height + 40) {
          this.reset(false);
        }
      }

      draw(c) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate((this.rotation * Math.PI) / 180);
        c.globalAlpha = this.opacity;

        if (this.shape === 'petal') {
          // Curved organic petal
          c.fillStyle = this.color;
          c.beginPath();
          c.moveTo(0, -this.size / 2);
          c.quadraticCurveTo(this.size / 2, 0, 0, this.size / 2);
          c.quadraticCurveTo(-this.size / 2, 0, 0, -this.size / 2);
          c.fill();
        } else if (this.shape === 'sakura') {
          // 5-petal mini sakura blossom
          c.fillStyle = this.color;
          const petalRadius = this.size / 3.2;
          for (let i = 0; i < 5; i++) {
            const angle = (i * 2 * Math.PI) / 5;
            const px = Math.cos(angle) * petalRadius * 1.3;
            const py = Math.sin(angle) * petalRadius * 1.3;
            c.beginPath();
            c.arc(px, py, petalRadius, 0, Math.PI * 2);
            c.fill();
          }
          // Center pistil
          c.fillStyle = '#D4A373';
          c.beginPath();
          c.arc(0, 0, petalRadius * 0.5, 0, Math.PI * 2);
          c.fill();
        } else if (this.shape === 'daisy') {
          // Delicate white/cream daisy
          c.fillStyle = '#FFFDF5';
          const r = this.size / 3.5;
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            c.beginPath();
            c.ellipse(Math.cos(angle) * r, Math.sin(angle) * r, r * 0.9, r * 0.45, angle, 0, Math.PI * 2);
            c.fill();
          }
          c.fillStyle = '#D4A373';
          c.beginPath();
          c.arc(0, 0, r * 0.55, 0, Math.PI * 2);
          c.fill();
        } else if (this.shape === 'leaf') {
          // Sage green tiny leaf
          c.fillStyle = '#A8B99A';
          c.beginPath();
          c.moveTo(0, -this.size / 2.2);
          c.quadraticCurveTo(this.size / 2.5, 0, 0, this.size / 2.2);
          c.quadraticCurveTo(-this.size / 4, 0, 0, -this.size / 2.2);
          c.fill();
        } else if (this.shape === 'sparkle') {
          // 4-point golden sparkle
          c.fillStyle = '#D4A373';
          const s = this.size * 0.4;
          c.beginPath();
          c.moveTo(0, -s);
          c.quadraticCurveTo(0, 0, s, 0);
          c.quadraticCurveTo(0, 0, 0, s);
          c.quadraticCurveTo(0, 0, -s, 0);
          c.quadraticCurveTo(0, 0, 0, -s);
          c.fill();
        }

        c.restore();
      }
    }

    // Initialize particles
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(true));
    }

    // Main render loop with requestAnimationFrame
    const render = () => {
      if (isTabVisible && active) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw(ctx);
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Pause when tab is hidden to save mobile battery
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, burst, density]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
