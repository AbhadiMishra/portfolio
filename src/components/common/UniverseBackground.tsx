import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

export const UniverseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle Stars / Cosmic Nodes
    const particleCount = Math.min(Math.floor(width / 15), 90);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines (GitHub Universe style)
      ctx.strokeStyle = theme === 'dark' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(15, 23, 42, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Glowing Cosmic Aurora Blobs
      angle += 0.003;
      const auraX1 = width * 0.5 + Math.sin(angle) * 150;
      const auraY1 = height * 0.3 + Math.cos(angle * 0.8) * 100;
      const auraX2 = width * 0.7 + Math.cos(angle * 1.2) * 120;
      const auraY2 = height * 0.6 + Math.sin(angle * 0.9) * 80;

      // Aurora 1 (Cyan / Blue)
      const grad1 = ctx.createRadialGradient(auraX1, auraY1, 10, auraX1, auraY1, width * 0.4);
      if (theme === 'dark') {
        grad1.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
        grad1.addColorStop(0.5, 'rgba(6, 182, 212, 0.08)');
        grad1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        grad1.addColorStop(0, 'rgba(37, 99, 235, 0.08)');
        grad1.addColorStop(0.5, 'rgba(8, 145, 178, 0.04)');
        grad1.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Aurora 2 (Purple / Magenta)
      const grad2 = ctx.createRadialGradient(auraX2, auraY2, 20, auraX2, auraY2, width * 0.35);
      if (theme === 'dark') {
        grad2.addColorStop(0, 'rgba(139, 92, 246, 0.14)');
        grad2.addColorStop(0.5, 'rgba(236, 72, 153, 0.06)');
        grad2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        grad2.addColorStop(0, 'rgba(124, 58, 237, 0.07)');
        grad2.addColorStop(0.5, 'rgba(219, 39, 119, 0.03)');
        grad2.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render Floating Star Particles & Constellation Connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.pulseSpeed;

        if (p.alpha > 0.8 || p.alpha < 0.2) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle =
          theme === 'dark'
            ? `rgba(186, 230, 253, ${p.alpha})`
            : `rgba(37, 99, 235, ${p.alpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with subtle constellation lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.15;
            ctx.strokeStyle =
              theme === 'dark'
                ? `rgba(96, 165, 250, ${lineAlpha})`
                : `rgba(37, 99, 235, ${lineAlpha * 0.8})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
    />
  );
};
