"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const texts = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "UI/UX & Web Engineer",
];

export default function Banner(): React.JSX.Element {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev: number) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 lg:pt-36 pb-12 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-2 lg:top-8 flex flex-col items-center">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden mb-6 text-center">
                <div data-battle-card="hello-pill" className="relative inline-block liquid-glass-pill px-6 py-3 rounded-full border border-purple-400/40 shadow-[0_0_25px_-5px_rgba(168,85,247,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)]">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={55}
                    height={55}
                    className="absolute -top-7 -left-7 rotate-[280deg] pointer-events-none drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg sm:text-xl font-medium whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-300 font-bold drop-shadow-[0_0_14px_rgba(192,132,252,0.85)]">
                        MD RIYAJUL ISLAM
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Portrait Card with Breathing Neon Glow */}
              <div className="relative group">
                {/* 1. Primary Cyan-Violet Breathing Neon Aura (Behind Card) */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[36px] pointer-events-none animate-neon-breathe"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.8) 0%, rgba(168, 85, 247, 0.6) 45%, rgba(139, 92, 246, 0.25) 70%, transparent 80%)",
                  }}
                />

                {/* 2. Secondary Magenta-Cyan Breathing Wave (Offset Pulse) */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-10 rounded-[38px] pointer-events-none animate-neon-breathe [animation-delay:2s]"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(217, 70, 239, 0.65) 0%, rgba(0, 245, 255, 0.45) 50%, transparent 75%)",
                  }}
                />

                {/* 3. Outer Neon Border Frame with Continuously Running Neon Light Beam */}
                <div data-battle-card="photo-card" className="relative p-[2.5px] rounded-[28px] overflow-hidden shadow-[0_0_35px_rgba(0,245,255,0.45),0_0_70px_rgba(168,85,247,0.35)]">
                  {/* Layer A: Running Soft Neon Light Beam (Continuously Traveling along Border) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[-120%] animate-border-rotate pointer-events-none blur-[4px] opacity-85"
                    style={{
                      background:
                        "conic-gradient(from 0deg at 50% 50%, transparent 0deg, #00F5FF 70deg, #FFFFFF 90deg, #00F5FF 110deg, transparent 180deg, #A855F7 250deg, #FFFFFF 270deg, #00F5FF 290deg, transparent 360deg)",
                    }}
                  />

                  {/* Layer B: Running Razor Sharp Neon Light Beam (Continuously Traveling along Border) */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-[-120%] animate-border-rotate pointer-events-none opacity-100"
                    style={{
                      background:
                        "conic-gradient(from 0deg at 50% 50%, transparent 0deg, #00F5FF 75deg, #FFFFFF 90deg, #00F5FF 105deg, transparent 180deg, #A855F7 255deg, #FFFFFF 270deg, #00F5FF 285deg, transparent 360deg)",
                    }}
                  />

                  {/* 4. Inner Liquid Glass Photo Container */}
                  <div className="relative z-10 w-[290px] sm:w-[350px] lg:w-[390px] rounded-[25px] overflow-hidden bg-[#110720] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)]">
                    {/* The User's Real Photograph */}
                    <div className="relative w-full aspect-[4/4.7] overflow-hidden">
                      <Image
                        src="/assets/riyajul.jpg"
                        alt="MD RIYAJUL ISLAM - Frontend Developer"
                        fill
                        sizes="(max-width: 640px) 290px, (max-width: 1024px) 350px, 390px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        priority
                      />

                      {/* Liquid Glass Overlay Vignette at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d041a] via-[#0d041a]/20 to-transparent opacity-85 pointer-events-none" />

                      {/* Neon Light Specular Glaze */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/15 pointer-events-none mix-blend-screen" />

                      {/* Floating Status Badge at bottom */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 liquid-glass-pill px-3.5 py-2 rounded-2xl flex items-center justify-between border border-cyan-400/40 backdrop-blur-xl bg-black/55 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(0,245,255,0.3)]">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10B981]" />
                          <span className="text-xs font-semibold tracking-wide text-white">
                            Available for Work
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-cyan-300 tracking-wider">
                          FRONTEND DEV
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position - Noticeably Enlarged & Enhanced */}
            <div data-battle-card="hello-pill" className="hidden lg:inline-block relative mb-2 sm:mb-3">
              <div className="liquid-glass-pill px-8 py-3.5 rounded-full inline-flex items-center gap-3 relative border border-purple-400/40 shadow-[0_0_25px_-5px_rgba(168,85,247,0.5),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:border-cyan-400/60 hover:shadow-[0_0_35px_rgba(0,245,255,0.4)] transition-all duration-300">
                <Image
                  src="/assets/arrow.png"
                  alt="Arrow pointer"
                  width={72}
                  height={72}
                  className="absolute -left-16 -top-10 pointer-events-none drop-shadow-[0_0_10px_rgba(168,85,247,0.7)]"
                  style={{ width: "auto", height: "auto" }}
                />
                <p className="text-white text-xl lg:text-2xl font-medium tracking-wide">
                  Hello! I Am{" "}
                  <span className="text-purple-300 font-bold drop-shadow-[0_0_15px_rgba(192,132,252,0.9)]">
                    MD RIYAJUL ISLAM
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl sm:text-2xl text-purple-400 font-semibold mb-2">
                Frontend Developer
              </p>
              <h1 className="text-4xl tracking-tight sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Building Ideas into{" "}
                <span className="relative inline-block px-1">
                  <Image
                    src="/assets/circle.png"
                    alt=""
                    aria-hidden="true"
                    width={180}
                    height={80}
                    className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] object-contain pointer-events-none"
                  />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    Attractive
                  </span>
                </span>
                <br className="hidden sm:inline" /> Websites, Systems &amp; Software.
              </h1>
              <p className="text-base sm:text-lg text-white/80 mt-4 max-w-xl leading-relaxed mx-auto lg:mx-0">
                Turning creative ideas into modern, responsive, and powerful digital experiences through design, development, and technology.
              </p>

              {/* Action Buttons: Download CV & Contact */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-6">
                <a
                  href="/assets/cv.pdf"
                  download="Md_Riyajul_Islam_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base text-white liquid-glass border border-cyan-400/60 shadow-[0_0_25px_rgba(0,245,255,0.4),inset_0_1px_2px_rgba(255,255,255,0.35)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(0,245,255,0.7),0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-cyan-300 group-hover:translate-y-0.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download CV</span>
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F5FF]" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-medium text-sm sm:text-base text-white/90 hover:text-white liquid-glass border border-purple-400/40 hover:border-purple-300 shadow-[0_0_15px_-3px_rgba(168,85,247,0.35)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <span className="text-purple-400">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div data-battle-card="typing-card" className="space-y-4 pt-10 mt-12 text-center lg:text-left liquid-glass p-8 sm:p-10 rounded-3xl">
          <p className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            I&apos;m a {displayedText}
            <span className="animate-pulse" aria-hidden="true">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Core Stack:</span>
            <span className="text-purple-400 font-semibold">
              React, Next.js, TypeScript &amp; Tailwind CSS
            </span>
          </p>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            Turning creative ideas into modern, responsive, and powerful digital experiences through design, development, and technology. Focused on building intuitive user interfaces, fluid interactions, and high-performance web applications.
          </p>
        </div>
      </div>
    </section>
  );
}
