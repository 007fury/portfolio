import { useEffect, useRef } from "react";

/**
 * AnimatedBackground
 * A lightweight canvas animation (60–120 particles) with connecting lines.
 * - Fixed behind the page (no pointer events)
 * - Auto-scales for devicePixelRatio
 * - Pauses when tab is hidden (browser optimization)
 */
type Props = {
  particleCount?: number;   // default 90
  maxSpeed?: number;        // default 0.35 (px/frame @ 1x)
  linkDistance?: number;    // default 110 (px @ 1x)
  dotColor?: string;        // default "rgba(37, 99, 235, 0.65)"  (blue-600 @ ~65%)
  lineColor?: string;       // default "rgba(37, 99, 235, 0.12)" (subtle)
  backgroundFade?: string;  // optional gradient overlay on the whole canvas
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

    const step = () => {
      // clear with optional soft gradient overlay
      if (backgroundFade) {
        // paint a transparent gradient “film” once per frame
        const gEl = document.createElement("canvas");
        const gCtx = gEl.getContext("2d")!;
        gEl.width = 1; gEl.height = 1; // we’re not using gEl, just force GC-safe
        // faster: clearRect then lines; CSS gradient handled by container div
        ctx.clearRect(0, 0, state.w, state.h);
      } else {
        ctx.clearRect(0, 0, state.w, state.h);
      }

      // move
      for (const p of state.particles) {
        p.x += p.vx;
        p.y += p.vy;

        // bounce at edges
        if (p.x <= 0 || p.x >= state.w) p.vx *= -1;
        if (p.y <= 0 || p.y >= state.h) p.vy *= -1;
      }

      // draw links
      ctx.beginPath();
      for (let i = 0; i < state.particles.length; i++) {
        const a = state.particles[i];
        for (let j = i + 1; j < state.particles.length; j++) {
          const b = state.particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const alpha = 1 - dist / linkDistance;
            ctx.strokeStyle = lineColor.replace(
              /rgba?\(([^)]+)\)/,
              (m) => {
                // if user passed rgb(), convert to rgba with alpha; if rgba, override final alpha
                const parts = m
                  .replace(/rgba?\(|\)/g, "")
                  .split(",")
                  .map((s) => s.trim());
                const [r, g, b] = parts.map(Number);
                return `rgba(${r}, ${g}, ${b}, ${Math.min(0.6, alpha)})`;
              }
            );
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
          }
        }
      }
      ctx.lineWidth = 1;
      ctx.stroke();

      // draw dots
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

  // A wrapper div holds the CSS gradient overlay; the canvas is transparent
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: backgroundFade,
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
