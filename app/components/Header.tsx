"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header(): React.JSX.Element {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);
  const [rippling, setRippling] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window === "undefined") return;

    // 1. Calculate the exact origin coordinate (icon center or click point)
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = e.clientX || (rect ? rect.left + rect.width / 2 : window.innerWidth / 2);
    const y = e.clientY || (rect ? rect.top + rect.height / 2 : 40);

    // 2. Calculate the maximum distance to the farthest viewport corner with buffer
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    const targetRadius = Math.ceil(endRadius + 120);

    // Set CSS variables for feathered radial gradient mask
    document.documentElement.style.setProperty("--click-x", `${x}px`);
    document.documentElement.style.setProperty("--click-y", `${y}px`);
    document.documentElement.style.setProperty("--click-radius", `${targetRadius}px`);

    // Trigger button shockwave ring
    setRippling(true);
    setTimeout(() => setRippling(false), 500);

    const applyThemeChange = () => {
      const isLight = document.documentElement.classList.toggle("light");
      const nextTheme = isLight ? "light" : "dark";
      setTheme(nextTheme);
      try {
        localStorage.setItem("theme", nextTheme);
      } catch {
        // Fallback if localStorage is inaccessible
      }
    };

    const hasViewTransition = "startViewTransition" in document;

    // Use native View Transitions API for locked 60-120 FPS GPU-accelerated feathered reveal
    if (hasViewTransition) {
      const docWithVT = document as unknown as {
        startViewTransition: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const transition = docWithVT.startViewTransition(() => {
        applyThemeChange();
      });

      // 60-120 FPS GPU-Composited Mask Expansion + Smoky Pale Matte Halo Ring
      transition.ready.then(() => {
        // 1. Animate mask radius with WAAPI
        try {
          document.documentElement.animate(
            [
              { "--reveal-radius": "0px" },
              { "--reveal-radius": `${targetRadius}px` },
            ] as unknown as Keyframe[],
            {
              duration: 520,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        } catch {
          // Handled by CSS animation @keyframes theme-circular-reveal
        }

        // 2. Hardware-accelerated soft smoky/pale matte halo ring tracking the leading edge
        const halo = document.createElement("div");
        const baseSize = 120;
        halo.className = "matte-halo-ring";
        halo.style.left = `${x - baseSize / 2}px`;
        halo.style.top = `${y - baseSize / 2}px`;
        halo.style.width = `${baseSize}px`;
        halo.style.height = `${baseSize}px`;
        // Soft smoky grayish / pale matte haze ("dhushor, fekashe")
        halo.style.boxShadow =
          "0 0 55px 25px rgba(148, 163, 184, 0.35), inset 0 0 40px 20px rgba(100, 116, 139, 0.25)";
        halo.style.border = "1.5px solid rgba(203, 213, 225, 0.3)";
        halo.style.filter = "blur(12px)";
        halo.style.opacity = "0.9";

        document.body.appendChild(halo);

        const scaleTarget = (targetRadius * 2) / baseSize;

        // Animate solely via transform & opacity on GPU compositor thread at 60-120 FPS
        const haloAnim = halo.animate(
          [
            { transform: "translateZ(0) scale(0)", opacity: 0.9 },
            { transform: `translateZ(0) scale(${scaleTarget})`, opacity: 0 },
          ],
          {
            duration: 520,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "forwards",
          }
        );

        haloAnim.onfinish = () => {
          if (halo.parentNode) {
            halo.parentNode.removeChild(halo);
          }
        };
      });
    } else {
      applyThemeChange();
    }
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#lab" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d041a]/50 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-colors duration-300">
      <nav className="px-4 sm:px-6 py-3.5">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link 
            href="/" 
            className="flex items-center text-white hover:opacity-90 transition-opacity"
            aria-label="MD RIYAJUL ISLAM"
          >
            <Image 
              src="/logo/logo.svg" 
              alt="RIYAJUL - Developer Logo" 
              width={150} 
              height={54} 
              className="h-9 sm:h-11 w-auto object-contain site-logo-img transition-all duration-300"
              priority 
            />
          </Link>
          <div className="flex items-center gap-2 sm:gap-3.5">
            <ul className="flex items-center gap-1.5 sm:gap-3 md:gap-4 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.label} className="m-0 p-0">
                  <Link 
                    href={item.href} 
                    className="relative inline-flex items-center justify-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white/90 hover:text-white transition-all duration-300 bg-white/[0.04] hover:bg-white/[0.12] backdrop-blur-xl border border-purple-400/35 hover:border-cyan-400 shadow-[0_0_15px_-3px_rgba(168,85,247,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_24px_rgba(6,182,212,0.65),0_0_10px_rgba(168,85,247,0.5),inset_0_1px_2px_rgba(255,255,255,0.35)] hover:scale-105 active:scale-95"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button (Dark Mode / Light Mode with Circular Expansion) */}
            <div className="relative inline-flex items-center justify-center">
              {/* Emitting Shockwave Ripple Ring */}
              {rippling && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full animate-ripple-ring pointer-events-none"
                />
              )}

              <button
                ref={buttonRef}
                type="button"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                className="theme-toggle-btn relative inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full cursor-pointer transition-all duration-300 backdrop-blur-xl bg-white/[0.06] hover:bg-white/[0.14] border border-purple-400/40 hover:border-cyan-400 shadow-[0_0_15px_-3px_rgba(168,85,247,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_24px_rgba(6,182,212,0.65),0_0_10px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 shrink-0 overflow-hidden"
              >
                {mounted ? (
                  <div
                    key={theme}
                    className="animate-icon-switch flex items-center justify-center"
                  >
                    {theme === "dark" ? (
                      // Sun Icon (click for Light Mode)
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.85)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <circle cx="12" cy="12" r="4.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
                        />
                      </svg>
                    ) : (
                      // Moon Icon (click for Dark Mode)
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73A8.15 8.15 0 019.08 5.49a8.59 8.59 0 01.25-2A1 1 0 008 2.36 10.14 10.14 0 1022 14.05a1 1 0 00-.36-1.05z" />
                      </svg>
                    )}
                  </div>
                ) : (
                  <div className="w-4 h-4 sm:w-5 sm:h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
