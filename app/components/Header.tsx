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

    // 2. Calculate the maximum distance to the farthest viewport corner with padding
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );
    const targetRadius = Math.ceil(endRadius + 140);

    // Set CSS variables for circular reveal with soft matte feathered mask
    document.documentElement.style.setProperty("--click-x", `${x}px`);
    document.documentElement.style.setProperty("--click-y", `${y}px`);
    document.documentElement.style.setProperty("--click-radius", `${targetRadius}px`);

    // Trigger button shockwave ring
    setRippling(true);
    setTimeout(() => setRippling(false), 700);

    const isCurrentlyLight = document.documentElement.classList.contains("light");

    // Ethereal matte misty shockwave aura traveling along the circular wave edge
    const mist = document.createElement("div");
    const mistSize = targetRadius * 2;
    mist.className = "pointer-events-none fixed z-[999999] rounded-full";
    mist.style.left = `${x - mistSize / 2}px`;
    mist.style.top = `${y - mistSize / 2}px`;
    mist.style.width = `${mistSize}px`;
    mist.style.height = `${mistSize}px`;
    mist.style.borderRadius = "50%";
    mist.style.transform = "scale(0)";
    mist.style.willChange = "transform, opacity";
    mist.style.background = isCurrentlyLight
      ? "radial-gradient(circle, transparent 0%, transparent 86%, rgba(13, 4, 26, 0.45) 93%, rgba(168, 85, 247, 0.5) 96%, transparent 100%)"
      : "radial-gradient(circle, transparent 0%, transparent 86%, rgba(248, 250, 252, 0.55) 93%, rgba(6, 182, 212, 0.6) 96%, transparent 100%)";
    mist.style.filter = "blur(18px)";
    mist.style.transition = "transform 750ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease 550ms";

    document.body.appendChild(mist);

    requestAnimationFrame(() => {
      mist.style.transform = "scale(1)";
      mist.style.opacity = "0";
    });

    setTimeout(() => {
      if (mist.parentNode) {
        mist.parentNode.removeChild(mist);
      }
    }, 850);

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

    // Use native View Transitions API for GPU-accelerated feathered circular reveal
    if (hasViewTransition) {
      document.documentElement.classList.add("view-transition-circular");

      const docWithVT = document as unknown as {
        startViewTransition: (cb: () => void) => {
          ready: Promise<void>;
          finished: Promise<void>;
        };
      };

      const transition = docWithVT.startViewTransition(() => {
        applyThemeChange();
      });

      transition.ready.then(() => {
        try {
          document.documentElement.animate(
            [
              { "--reveal-radius": "0px" },
              { "--reveal-radius": `${targetRadius}px` },
            ] as unknown as Keyframe[],
            {
              duration: 750,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              pseudoElement: "::view-transition-new(root)",
            }
          );
        } catch {
          // CSS fallback via @keyframes theme-circular-reveal handles it automatically
        }
      });

      transition.finished.finally(() => {
        document.documentElement.classList.remove("view-transition-circular");
      });
    } else {
      // Smooth expanding feathered circular ripple overlay for browsers without View Transitions
      const targetBg = isCurrentlyLight ? "#0d041a" : "#f8fafc";
      const size = Math.ceil(targetRadius * 2);

      const ripple = document.createElement("div");
      ripple.className = "theme-ripple-overlay";
      ripple.style.position = "fixed";
      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.borderRadius = "50%";
      ripple.style.background = `radial-gradient(circle, ${targetBg} 0%, ${targetBg} 88%, transparent 100%)`;
      ripple.style.filter = "blur(18px)";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "999999";
      ripple.style.transform = "scale(0)";
      ripple.style.transition = "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 250ms ease 500ms";
      ripple.style.willChange = "transform, opacity";

      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.transform = "scale(1)";
      });

      setTimeout(() => {
        applyThemeChange();
        ripple.style.opacity = "0";
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 300);
      }, 400);
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
