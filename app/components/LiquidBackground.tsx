"use client";

import { useEffect, useRef } from "react";

export default function LiquidBackground(): React.JSX.Element {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Current positions and targets for smooth lerp physics
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;

    let x1 = targetX;
    let y1 = targetY;
    let x2 = targetX;
    let y2 = targetY;
    let x3 = targetX;
    let y3 = targetY;

    let animationFrameId: number;
    let isMoving = false;
    let idleAngle = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      isMoving = true;
      if ("clientX" in e) {
        targetX = e.clientX;
        targetY = e.clientY;
      } else if (e.touches && e.touches[0]) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // Smooth animation loop with spring-like liquid delay
    const animate = () => {
      // If idle, gently float in an organic infinity pattern
      if (!isMoving) {
        idleAngle += 0.015;
        targetX = window.innerWidth / 2 + Math.cos(idleAngle) * 200;
        targetY = window.innerHeight / 2 + Math.sin(idleAngle * 2) * 120;
      }

      // Smooth lag / fluid drag effect (different speeds create chromatic liquid separation)
      x1 += (targetX - x1) * 0.08;
      y1 += (targetY - y1) * 0.08;

      x2 += (targetX - x2) * 0.05;
      y2 += (targetY - y2) * 0.05;

      x3 += (targetX - x3) * 0.035;
      y3 += (targetY - y3) * 0.035;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate3d(${x1 - 280}px, ${y1 - 280}px, 0)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate3d(${x2 - 240}px, ${y2 - 240}px, 0)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate3d(${x3 - 220}px, ${y3 - 220}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* Primary Mouse-Following Neon Purple Wave (in background) */}
      <div
        ref={orb1Ref}
        className="absolute top-0 left-0 w-[560px] h-[560px] rounded-full blur-[130px] opacity-60 mix-blend-screen transition-opacity duration-700 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.75) 0%, rgba(139, 92, 246, 0.4) 45%, transparent 70%)",
        }}
      />

      {/* Secondary Mouse-Following Neon Cyan Wave (trailing) */}
      <div
        ref={orb2Ref}
        className="absolute top-0 left-0 w-[480px] h-[480px] rounded-full blur-[120px] opacity-50 mix-blend-screen transition-opacity duration-700 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, rgba(56, 189, 248, 0.35) 50%, transparent 70%)",
        }}
      />

      {/* Tertiary Mouse-Following Neon Fuchsia Wave (deep fluid lag) */}
      <div
        ref={orb3Ref}
        className="absolute top-0 left-0 w-[440px] h-[440px] rounded-full blur-[140px] opacity-40 mix-blend-screen transition-opacity duration-700 will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(217, 70, 239, 0.3) 50%, transparent 70%)",
        }}
      />

      {/* Standing Ambient Neon Undulating Waves (Drifting across viewport) */}
      <div
        className="absolute top-[-10%] right-[-10%] w-[650px] h-[650px] rounded-full blur-[150px] opacity-35 animate-[pulse_8s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle, rgba(147, 51, 234, 0.6) 0%, rgba(99, 102, 241, 0.3) 55%, transparent 75%)",
        }}
      />

      <div
        className="absolute bottom-[-10%] left-[-10%] w-[650px] h-[650px] rounded-full blur-[150px] opacity-35 animate-[pulse_10s_ease-in-out_infinite]"
        style={{
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.55) 0%, rgba(168, 85, 247, 0.3) 55%, transparent 75%)",
        }}
      />

      {/* Liquid Mesh Light Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
