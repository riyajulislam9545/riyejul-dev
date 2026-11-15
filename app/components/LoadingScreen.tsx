"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen(): React.JSX.Element | null {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // 2.2 seconds display time for the wave animation, then shutter rolls up
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    // Completely unmount after shutter finishes sliding up off-screen (1000ms transition)
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
    }, 3300);

    return () => {
      clearTimeout(timer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      aria-label="Loading RIYAJUL.DEV"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000000] select-none shadow-[0_30px_70px_rgba(0,0,0,0.95)] border-b border-white/10 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] will-change-transform ${
        isLoading ? "translate-y-0" : "-translate-y-full pointer-events-none"
      }`}
    >
      {/* Subtle Silver Ambient Halo */}
      <div
        aria-hidden="true"
        className="absolute w-[450px] sm:w-[650px] h-[300px] rounded-full pointer-events-none blur-[100px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(220, 225, 240, 0.3) 0%, rgba(120, 130, 150, 0.1) 45%, transparent 70%)",
        }}
      />

      {/* Main Branding with Gradient Silver & Black Shadow Wave */}
      <div className="relative flex flex-col items-center">
        {/* Relative Text Box for Clipping the Shadow Wave */}
        <div className="relative overflow-hidden px-4 py-4 sm:px-12 sm:py-8 rounded-3xl">
          {/* Metallic Silver Gradient Text with Silver Text Shadow - Extra Bold & Large */}
          <h1
            className="relative z-10 font-mono font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.10em] sm:tracking-[0.16em] uppercase text-transparent bg-clip-text animate-silver-shimmer drop-shadow-[0_0_35px_rgba(255,255,255,0.55)] drop-shadow-[0_0_80px_rgba(200,210,230,0.35)] leading-tight text-center"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #71717a 0%, #d4d4d8 25%, #ffffff 50%, #e4e4e7 70%, #a1a1aa 85%, #71717a 100%)",
            }}
          >
            RIYAJUL.DEV
          </h1>

          {/* Soft Black Shadow Wave passing over the large text */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-48 sm:w-80 md:w-96 z-20 pointer-events-none animate-shadow-wave"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.6) 25%, rgba(0, 0, 0, 0.95) 50%, rgba(0, 0, 0, 0.6) 75%, transparent 100%)",
              mixBlendMode: "multiply",
            }}
          />

          {/* Secondary Soft Ambient Wave Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 w-60 sm:w-96 md:w-[420px] z-30 pointer-events-none animate-shadow-wave [animation-delay:0.18s]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.45) 70%, transparent 100%)",
            }}
          />
        </div>

        {/* Minimalist Metallic Silver Progress Bar */}
        <div className="mt-8 sm:mt-10 w-60 sm:w-80 h-[2.5px] bg-neutral-900/90 rounded-full overflow-hidden relative border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <div
            className="w-full h-full bg-gradient-to-r from-transparent via-neutral-100 to-transparent animate-loading-progress"
            style={{
              boxShadow: "0 0 16px rgba(255, 255, 255, 0.8)",
            }}
          />
        </div>

        {/* Subtle Subtitle */}
        <p className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-[0.45em] text-neutral-400 font-semibold">
          Frontend Engineer &amp; Developer
        </p>
      </div>
    </div>
  );
}
