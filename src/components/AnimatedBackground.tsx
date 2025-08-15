import { useEffect, useRef } from "react";

type Props = {
  particleCount?: number;   // default 90
  maxSpeed?: number;        // default 0.35 (px/frame @ 1x)
  linkDistance?: number;    // default 110 (px @ 1x)
  dotColor?: string;        // default "rgba(37, 99, 235, 0.65)"
  lineColor?: string;       // default "rgba(37, 99, 235, 0.12)"
  backgroundFade?: string;  // CSS gradient for wrapper div
};

export default function AnimatedBackground({
  particleCount = 90,
  maxSpeed = 0.35,
  linkDistance = 110,
  dotColor = "rgba(37, 99, 235, 0.65)",
  lineColor = "rgba(37, 99, 235, 0.12)",
  backgroundFade = "radial-gradient(1200px 600px at 80% -10%, rgba(59,130,246,0.07), transparent 60%), radial-gradient(900px 500px at 10% -10%, rgba(99,102,241,0.06), transparent 60%)",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const state = {
      w: 0,
      h: 0,
      particles: [] as { x: number; y: number; vx: number; vy: number }[],
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      state.w = innerWidth;
      state.h = innerHeight;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      canvas.width = Math.floor(innerWidth * dpr);
      canvas.height = Math.floor(innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      state.particles = [];
      for (let i = 0; i < particleCount; i++) {
        state.particles.push({
          x: Math.random() * state.w,
          y: Math.random() * state.h,
          vx: (Math.random() - 0.5) * maxSpeed * 2,
          vy: (Math.random() - 0.5) * maxSpeed * 2,
        });
      }
    };

    const rgbaWithAlpha = (color: string, alpha: number) => {
      // supports rgb(...) or rgba(...)
      const m = color.match(/rgba?\(([^)]+)\)/);
      if (!m) return color; // fallback if not rgb/rgba
      const parts = m[1].split(",").map((s) => s.trim());
      const [r, g, b] = parts.slice(0, 3).map(Number);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const step = () => {
      // canvas is transparent; gradient is handled by the wrapper div
      ctx.clearRect(0, 0, state.w, state.h);

      // move
      for (const p of state.particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x <= 0 || p.x >= state.w) p.vx *= -1;
        if (p.y <= 0 || p.y >= state.h) p.vy *= -1;
      }

      // links
      ctx.beginPath();
      for (let i = 0; i < state.particles.length; i++) {
        const a = state.particles[i];
        for (let j = i + 1; j < state.particles.length; j++) {
          const b = state.particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const alpha = Math.min(0.6, 1 - dist / linkDistance);
            ctx.strokeStyle = rgbaWithAlpha(lineColor, alpha);
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.lineWidth = 1;
      ctx.stroke();

      // dots
      for (const p of state.particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    init();
    rafRef.current = requestAnimationFrame(step);
    window.addEventListener("resize", resize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [particleCount, maxSpeed, linkDistance, dotColor, lineColor, backgroundFade]);

  // Gradient overlay via wrapper; canvas stays transparent
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: backgroundFade }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
