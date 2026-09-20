import { useEffect, useRef, memo } from 'react';

/**
 * FooterParticles — ReactBits-style animated network background.
 * Floating glowing dots + connecting line network + sparkle shimmer.
 * Themed for the sunset-orange footer palette.
 */
const FooterParticles = memo(({
  particleCount = 72,
  connectionDistance = 120,
  particleColor = 'rgba(255, 255, 255, 0.75)',
  lineColor = 'rgba(255, 224, 130, 0.22)',
  sparkleColor = 'rgba(255, 240, 180, 0.95)',
  speed = 0.38,
}) => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;

    /* ── resize ─────────────────────────────────────────── */
    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /* ── init particles ─────────────────────────────────── */
    function initParticles() {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: Math.random() * 1.8 + 0.7,          // radius 0.7 – 2.5
        alpha: Math.random() * 0.55 + 0.35,    // 0.35 – 0.9
        sparkle: Math.random() < 0.12,          // 12% are sparkle dots
        sparklePulse: Math.random() * Math.PI * 2,
        sparklePulseSpeed: 0.04 + Math.random() * 0.03,
      }));
    }

    /* ── draw ───────────────────────────────────────────── */
    function draw() {
      ctx.clearRect(0, 0, w, h);

      const pts = particlesRef.current;
      const len = pts.length;

      /* update positions + bounce */
      for (let i = 0; i < len; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        p.sparklePulse += p.sparklePulseSpeed;
      }

      /* connecting lines */
      const cdSq = connectionDistance * connectionDistance;
      for (let i = 0; i < len; i++) {
        const a = pts[i];
        for (let j = i + 1; j < len; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dSq = dx * dx + dy * dy;
          if (dSq < cdSq) {
            const strength = 1 - dSq / cdSq;        // 0 → 1 as closer
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            // line fades out at distance
            const alpha = strength * 0.55;
            ctx.strokeStyle = `rgba(255, 224, 130, ${alpha})`;
            ctx.lineWidth = strength * 1.1;
            ctx.stroke();
          }
        }
      }

      /* dots */
      for (let i = 0; i < len; i++) {
        const p = pts[i];
        const glow = p.sparkle
          ? 0.55 + Math.sin(p.sparklePulse) * 0.45   // 0.1 – 1.0 pulse
          : p.alpha;

        if (p.sparkle) {
          /* sparkle: glowing larger ring burst */
          const pulseR = p.r * (1.4 + Math.sin(p.sparklePulse) * 0.6);
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseR * 3.5);
          grad.addColorStop(0, `rgba(255, 240, 180, ${glow})`);
          grad.addColorStop(0.4, `rgba(255, 210, 100, ${glow * 0.5})`);
          grad.addColorStop(1, 'rgba(255, 180, 0, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseR * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          /* core bright dot */
          ctx.beginPath();
          ctx.arc(p.x, p.y, pulseR, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 245, 200, ${glow})`;
          ctx.fill();
        } else {
          /* standard dot with soft halo */
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.2);
          grad.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
          grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    }

    /* ── mount ──────────────────────────────────────────── */
    resize();
    initParticles();
    rafRef.current = requestAnimationFrame(draw);

    const ro = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
});

FooterParticles.displayName = 'FooterParticles';
export default FooterParticles;
