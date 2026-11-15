"use client";

import React, { useState } from "react";

interface Skill {
  id: string;
  name: string;
  category: string;
  neonColor: string; // Tailored vivid brand neon accent
  bgGlow: string;    // Intense saturated ambient glow
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-Stack React Framework",
    neonColor: "#00F5FF", // Vibrant Cyber Cyan / Ice Neon
    bgGlow: "rgba(0, 245, 255, 0.65)",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="90" fill="#000000" stroke="#00F5FF" strokeWidth="2.5" />
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#next_g1)"
        />
        <rect fill="url(#next_g2)" height="72" width="12" x="115" y="54" />
        <defs>
          <linearGradient id="next_g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#00F5FF" />
          </linearGradient>
          <linearGradient id="next_g2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" />
            <stop offset="1" stopColor="#00F5FF" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Typed JavaScript",
    neonColor: "#00A2FF", // High-voltage Electric Neon Blue
    bgGlow: "rgba(0, 162, 255, 0.65)",
    icon: (
      <svg className="w-10 h-10 rounded-xl overflow-hidden shadow-sm" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#007ACC" />
        <path
          d="M72.7 75.8v34.4h-16V75.8H43.9V62.4h41.7v13.4H72.7zm22 17.5c2.9 2.1 6.8 3.5 11.2 3.5 4.7 0 7.3-2 7.3-5 0-3.3-3.6-4.5-9.6-6.6-8.7-3.1-14.7-7.7-14.7-16.7 0-9.6 7.6-16.6 19.8-16.6 5.8 0 10.9 1.5 14.7 4.1l-4.4 11.9c-3.1-1.8-6.7-2.9-10.4-2.9-4.3 0-6.7 1.9-6.7 4.6 0 2.9 3.5 4.1 9.7 6.3 9.4 3.4 14.8 7.9 14.8 17 0 10.7-8.1 17.3-20.9 17.3-7.5 0-14-2.1-17.9-5.1l7.1-11.8z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Core Web Language",
    neonColor: "#FFDE00", // Hyper-Vibrant Neon Gold/Yellow
    bgGlow: "rgba(255, 222, 0, 0.70)",
    icon: (
      <svg className="w-10 h-10 rounded-xl overflow-hidden shadow-sm" viewBox="0 0 128 128">
        <rect width="128" height="128" rx="20" fill="#F7DF1E" />
        <path
          fill="#000000"
          d="M116.347 96.944c-.958 5.626-4.57 10.366-10.871 13.985-7.585 4.354-17.511 4.792-25.797 1.096-3.805-1.698-6.903-4.22-9.288-7.564l9.539-5.835c2.479 3.518 5.378 5.836 9.387 7.022 4.417 1.309 9.351.681 13.064-1.749 2.503-1.637 3.864-4.227 3.527-7.18-.553-4.887-5.59-7.05-11.455-9.49-8.487-3.527-17.842-7.518-16.711-18.067.873-8.15 6.942-14.413 14.88-16.892 8.788-2.744 18.599-1.222 25.751 3.916 4.143 2.978 7.152 7.051 8.875 11.838l-9.842 5.761c-1.371-3.238-3.489-5.912-6.526-7.585-3.666-2.015-8.232-2.185-12.164-.78-2.614.933-4.342 3.012-4.464 5.761-.207 4.606 4.316 6.645 9.879 8.948 9.349 3.877 18.364 7.625 17.21 17.093zM67.753 66.868v30.435c-.097 5.86-3.085 11.238-7.986 14.385-6.797 4.364-15.656 4.475-22.956.895-3.639-1.782-6.685-4.477-8.913-7.834l9.551-5.811c2.284 3.072 4.977 5.259 8.657 6.474 4.09 1.352 8.76.621 12.011-1.776 2.383-1.758 3.551-4.721 3.529-7.689V66.868h6.107z"
        />
      </svg>
    ),
  },
  {
    id: "html5",
    name: "HTML5",
    category: "Semantic Web Structure",
    neonColor: "#FF4D00", // Blazing Solar Orange-Red Neon
    bgGlow: "rgba(255, 77, 0, 0.65)",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 512 512">
        <path fill="#E44D26" d="M107.6 461l-33-370h362.8l-33 370.2L255.7 504"/>
        <path fill="#F16529" d="M256 472.5l120.9-33.5 27.8-311.6H256v345.1z"/>
        <path fill="#EBEBEB" d="M256 208.2h-60.6l-4.2-46.7H256V115H138.6l12.4 139.9H256v-46.7zm0 147.4l-.5.1-51.2-13.8-3.3-36.6h-46.8l6.4 72.4 94.9 26.3.5-.1v-48.3z"/>
        <path fill="#FFFFFF" d="M255.8 208.2v-46.7h60.6l5.7-63.5H255.8V51.3h117.4l-12.4 139.9h-105zm0 147.4v48.3l94.9-26.3 9.8-109H309.8l-3.3 36.6-50.7 10.4z"/>
      </svg>
    ),
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Modern Layouts & Styling",
    neonColor: "#007FFF", // Ultra Electric Blue Neon
    bgGlow: "rgba(0, 127, 255, 0.65)",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 512 512">
        <path fill="#264DE4" d="M107.6 461l-33-370h362.8l-33 370.2L255.7 504"/>
        <path fill="#2965F1" d="M256 472.5l120.9-33.5 27.8-311.6H256v345.1z"/>
        <path fill="#EBEBEB" d="M256 208.2H183.8l-4.2-46.7H256V115H127.3l12.4 139.9H256v-46.7zm0 147.4l-.5.1-51.2-13.8-3.3-36.6h-46.8l6.4 72.4 94.9 26.3.5-.1v-48.3z"/>
        <path fill="#FFFFFF" d="M255.8 208.2v-46.7h72.2l5.7-63.5H255.8V51.3h128.7l-12.4 139.9h-116.3zm0 147.4v48.3l94.9-26.3 9.8-109H309.8l-3.3 36.6-50.7 10.4z"/>
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Utility-First CSS",
    neonColor: "#00FFFF", // Laser Cyan Neon
    bgGlow: "rgba(0, 255, 255, 0.65)",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#00FFFF">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z"/>
      </svg>
    ),
  },
  {
    id: "restapi",
    name: "REST APIs",
    category: "Backend & Data Integration",
    neonColor: "#00FF88", // Supercharged Neon Mint/Emerald
    bgGlow: "rgba(0, 255, 136, 0.65)",
    icon: (
      <svg className="w-10 h-10 text-[#00FF88]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
        <path d="M14 6h4"/>
        <path d="M14 18h4"/>
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control System",
    neonColor: "#FF3333", // Blazing Crimson / Laser Red Neon
    bgGlow: "rgba(255, 51, 51, 0.65)",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="#FF3333">
        <path d="M21.62 10.45l-8.07-8.07a2.53 2.53 0 0 0-3.58 0L8.2 4.15l2.25 2.25a2.12 2.12 0 0 1 2.68 2.68l2.16 2.16a2.12 2.12 0 0 1 2.59 2.59l2.76 2.76a2.13 2.13 0 1 1-1.02 1.02l-2.64-2.64a2.12 2.12 0 0 1-2.45-2.45l-2.14-2.14a2.12 2.12 0 0 1-2.6-2.6L7.28 5.48 2.38 10.38a2.53 2.53 0 0 0 0 3.58l8.07 8.07a2.53 2.53 0 0 0 3.58 0l7.59-7.59a2.53 2.53 0 0 0 0-3.99z"/>
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    category: "Collaboration & DevOps",
    neonColor: "#D946EF", // Ultra-Vibrant Electric Fuchsia
    bgGlow: "rgba(217, 70, 239, 0.65)",
    icon: (
      <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

export default function Skills(): React.JSX.Element {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
            My Technical Arsenal
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto">
            A specialized collection of frontend frameworks, languages, and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                data-battle-card="skill-card"
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="relative p-[2px] rounded-2xl overflow-hidden group transition-all duration-500"
                style={{
                  boxShadow: isHovered
                    ? `0 0 60px 10px ${skill.bgGlow}, 0 0 35px 4px ${skill.neonColor}, 0 0 15px 3px #ffffff, 0 20px 40px rgba(0,0,0,0.7)`
                    : `0 0 18px -4px ${skill.bgGlow}, 0 8px 30px 0 rgba(0, 0, 0, 0.45)`,
                }}
              >
                {/* Full-Box Supercharged Rotating Neon Color Aura on Hover */}
                <div
                  className="absolute inset-[-60%] animate-border-rotate opacity-0 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none blur-[22px]"
                  style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${skill.neonColor} 60deg, #ffffff 90deg, ${skill.neonColor} 120deg, transparent 180deg, ${skill.neonColor} 240deg, #ffffff 270deg, ${skill.neonColor} 300deg, transparent 360deg)`,
                  }}
                />

                {/* Layer 1: Intense Soft Blurred Running Neon Light Beam around Border (Continuously Running) */}
                <div
                  className="absolute inset-[-120%] animate-border-rotate opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[6px]"
                  style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${skill.neonColor} 70deg, #ffffff 90deg, ${skill.neonColor} 110deg, transparent 180deg, ${skill.neonColor} 250deg, #ffffff 270deg, ${skill.neonColor} 290deg, transparent 360deg)`,
                  }}
                />

                {/* Layer 2: Ultra-Bright Razor Running Neon Light Beam around Border (Continuously Running) */}
                <div
                  className="absolute inset-[-120%] animate-border-rotate opacity-100 pointer-events-none"
                  style={{
                    background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${skill.neonColor} 75deg, #ffffff 90deg, ${skill.neonColor} 105deg, transparent 180deg, ${skill.neonColor} 255deg, #ffffff 270deg, ${skill.neonColor} 285deg, transparent 360deg)`,
                  }}
                />

                {/* Inner Liquid Glass Card Body */}
                <div
                  className="relative z-10 rounded-[14px] bg-[#120722]/95 backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.015] p-6 h-full flex flex-col items-center text-center justify-between border border-white/10 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-[0_12px_36px_0_rgba(0,0,0,0.5),inset_0_1px_2px_0_rgba(255,255,255,0.35)] group-hover:-translate-y-1 overflow-hidden"
                >
                  {/* Full Box Internal Brilliant Ambient Glow in Logo Color */}
                  <div
                    className="absolute inset-0 rounded-[14px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${skill.bgGlow} 0%, ${skill.neonColor}25 50%, transparent 80%)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Icon inside frosted liquid glass well with Intense Neon Glow on Hover */}
                    <div
                      className="w-16 h-16 rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/15 flex items-center justify-center p-3 mb-4 transition-all duration-300 group-hover:scale-110 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                      style={{
                        borderColor: isHovered ? skill.neonColor : "rgba(255, 255, 255, 0.15)",
                        boxShadow: isHovered
                          ? `0 0 35px 5px ${skill.neonColor}, 0 0 15px #ffffff, inset 0 0 15px ${skill.bgGlow}`
                          : "none",
                      }}
                    >
                      {skill.icon}
                    </div>

                    {/* Skill Name with Intense Logo Glow on Hover */}
                    <h3
                      className="text-xl font-bold mb-1 tracking-tight transition-all duration-300 text-white"
                      style={{
                        textShadow: isHovered
                          ? `0 0 15px ${skill.neonColor}, 0 0 30px ${skill.neonColor}, 0 0 45px ${skill.neonColor}`
                          : "none",
                      }}
                    >
                      {skill.name}
                    </h3>

                    {/* Skill Category */}
                    <p className="text-xs text-white/60 font-medium">
                      {skill.category}
                    </p>
                  </div>

                  {/* Subtle indicator bar with intense brand neon color */}
                  <div className="relative z-10 mt-5 w-full pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-white/50">
                    <span>Proficiency</span>
                    <span
                      className="font-semibold transition-all duration-300 flex items-center gap-1.5"
                      style={{
                        color: skill.neonColor,
                        textShadow: `0 0 14px ${skill.neonColor}, 0 0 25px ${skill.neonColor}`,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: skill.neonColor,
                          boxShadow: `0 0 12px ${skill.neonColor}, 0 0 20px ${skill.neonColor}`,
                        }}
                      />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
