"use client";

import React, { useState, useMemo } from "react";

export type SkillCategory = "frontend" | "backend" | "database";

interface Skill {
  id: string;
  name: string;
  category: string;
  categoryType: SkillCategory[];
  neonColor: string; // Tailored vivid brand neon accent
  bgGlow: string;    // Intense saturated ambient glow
  icon: React.ReactNode;
}

const skills: Skill[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Full-Stack React Framework",
    categoryType: ["frontend", "backend"],
    neonColor: "#00F5FF", // Vibrant Cyber Cyan / Ice Neon
    bgGlow: "rgba(0, 245, 255, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 180 180" fill="none">
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
    id: "react",
    name: "React",
    category: "Component UI Library",
    categoryType: ["frontend"],
    neonColor: "#00D8FF",
    bgGlow: "rgba(0, 216, 255, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
        <g stroke="#00D8FF" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Typed JavaScript",
    categoryType: ["frontend"],
    neonColor: "#00A2FF", // High-voltage Electric Neon Blue
    bgGlow: "rgba(0, 162, 255, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden shadow-sm" viewBox="0 0 128 128">
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
    categoryType: ["frontend"],
    neonColor: "#FFDE00", // Hyper-Vibrant Neon Gold/Yellow
    bgGlow: "rgba(255, 222, 0, 0.70)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 rounded-md overflow-hidden shadow-sm" viewBox="0 0 128 128">
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
    categoryType: ["frontend"],
    neonColor: "#FF4D00", // Blazing Solar Orange-Red Neon
    bgGlow: "rgba(255, 77, 0, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 512 512">
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
    categoryType: ["frontend"],
    neonColor: "#007FFF", // Ultra Electric Blue Neon
    bgGlow: "rgba(0, 127, 255, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 512 512">
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
    categoryType: ["frontend"],
    neonColor: "#00FFFF", // Laser Cyan Neon
    bgGlow: "rgba(0, 255, 255, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#00FFFF">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c-0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C9.337,13.382,7.976,12,6.001,12z"/>
      </svg>
    ),
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Scalable JS Runtime",
    categoryType: ["backend"],
    neonColor: "#339933",
    bgGlow: "rgba(51, 153, 51, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 2.5L28.1 9.5V23.5L16 30.5L3.9 23.5V9.5L16 2.5Z"
          stroke="#339933"
          strokeWidth="2"
          fill="#339933"
          fillOpacity="0.15"
        />
        <path d="M16 8L23 12V20L16 24L9 20V12L16 8Z" fill="#339933" />
        <circle cx="16" cy="16" r="2" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express.js",
    category: "Minimalist Node Framework",
    categoryType: ["backend"],
    neonColor: "#E0E0E0",
    bgGlow: "rgba(255, 255, 255, 0.55)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#ffffff" strokeWidth="1.8" fill="rgba(255,255,255,0.08)" />
        <text x="12" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="monospace">ex</text>
      </svg>
    ),
  },
  {
    id: "restapi",
    name: "REST APIs",
    category: "Backend & Data Integration",
    categoryType: ["backend"],
    neonColor: "#00FF88", // Supercharged Neon Mint/Emerald
    bgGlow: "rgba(0, 255, 136, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00FF88]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
    id: "mongodb",
    name: "MongoDB",
    category: "NoSQL Document Database",
    categoryType: ["database"],
    neonColor: "#00ED64",
    bgGlow: "rgba(0, 237, 100, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C11.5 3.5 8 9.5 8 13.5C8 17.5 10.5 21 12 22C13.5 21 16 17.5 16 13.5C16 9.5 12.5 3.5 12 2Z"
          fill="#00ED64"
        />
        <path
          d="M12 3V21C11.6 20.6 8.5 17.5 8.5 13.5C8.5 9.8 11.6 4.5 12 3Z"
          fill="#00C450"
        />
        <path
          d="M12 21.8C11.9 22 12.1 22 12.2 21.8C12.8 20.8 13.5 18 13.5 18L12 21.8Z"
          fill="#00684A"
        />
      </svg>
    ),
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Relational SQL Database",
    categoryType: ["database"],
    neonColor: "#336791",
    bgGlow: "rgba(51, 103, 145, 0.70)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#336791" strokeWidth="1.8" fill="rgba(51, 103, 145, 0.15)" />
        <path
          d="M12 5C8.13 5 5 7.69 5 11C5 12.61 5.74 14.07 6.94 15.11L6 20L10.06 18.35C10.68 18.57 11.33 18.69 12 18.69C15.87 18.69 19 16 19 12.69C19 9.38 15.87 5 12 5Z"
          stroke="#38bdf8"
          strokeWidth="1.5"
          fill="#336791"
        />
      </svg>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "Open Source Backend & DB",
    categoryType: ["database", "backend"],
    neonColor: "#3ECF8E",
    bgGlow: "rgba(62, 207, 142, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M13.2 2.2L3.8 13.5C3.3 14.1 3.7 15 4.5 15H11.5L10.8 21.8C10.7 22.6 11.7 23 12.2 22.4L21.6 11.1C22.1 10.5 21.7 9.6 20.9 9.6H13.9L14.6 2.8C14.7 2 13.7 1.6 13.2 2.2Z"
          fill="#3ECF8E"
        />
      </svg>
    ),
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "Realtime Cloud Database",
    categoryType: ["database", "backend"],
    neonColor: "#FFA611",
    bgGlow: "rgba(255, 166, 17, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path d="M4.6 18.7L9.1 4.5C9.2 4.1 9.8 4 10 4.4L12.5 9.2L4.6 18.7Z" fill="#FFA000" />
        <path d="M4.6 18.7L18.4 18.7C18.9 18.7 19.3 18.3 19 17.8L15.3 10.9L4.6 18.7Z" fill="#F57C00" />
        <path d="M12.5 9.2L15.3 10.9L13.8 7.2C13.6 6.8 13 6.8 12.8 7.2L12.5 9.2Z" fill="#FFB300" />
      </svg>
    ),
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "Next-Gen Database ORM",
    categoryType: ["database", "backend"],
    neonColor: "#5A67D8",
    bgGlow: "rgba(90, 103, 216, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none">
        <path
          d="M18.8 18.9L12.8 2.8C12.6 2.3 11.9 2.3 11.7 2.8L5.2 16.4C5 16.8 5.3 17.3 5.8 17.3H18.2C18.7 17.3 19 16.9 18.8 18.9Z"
          stroke="#5A67D8"
          strokeWidth="2"
          fill="#5A67D8"
          fillOpacity="0.2"
        />
        <path d="M12 3.5L6 16.5H18L12 3.5Z" fill="#5A67D8" />
      </svg>
    ),
  },
  {
    id: "git",
    name: "Git",
    category: "Version Control System",
    categoryType: ["frontend", "backend"],
    neonColor: "#FF3333", // Blazing Crimson / Laser Red Neon
    bgGlow: "rgba(255, 51, 51, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="#FF3333">
        <path d="M21.62 10.45l-8.07-8.07a2.53 2.53 0 0 0-3.58 0L8.2 4.15l2.25 2.25a2.12 2.12 0 0 1 2.68 2.68l2.16 2.16a2.12 2.12 0 0 1 2.59 2.59l2.76 2.76a2.13 2.13 0 1 1-1.02 1.02l-2.64-2.64a2.12 2.12 0 0 1-2.45-2.45l-2.14-2.14a2.12 2.12 0 0 1-2.6-2.6L7.28 5.48 2.38 10.38a2.53 2.53 0 0 0 0 3.58l8.07 8.07a2.53 2.53 0 0 0 3.58 0l7.59-7.59a2.53 2.53 0 0 0 0-3.99z"/>
      </svg>
    ),
  },
  {
    id: "github",
    name: "GitHub",
    category: "Collaboration & DevOps",
    categoryType: ["frontend", "backend"],
    neonColor: "#D946EF", // Ultra-Vibrant Electric Fuchsia
    bgGlow: "rgba(217, 70, 239, 0.65)",
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

type FilterType = "all" | "frontend" | "backend" | "database";

interface FilterOption {
  label: string;
  value: FilterType;
}

const filterOptions: FilterOption[] = [
  { label: "All", value: "all" },
  { label: "Front end", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Database", value: "database" },
];

function SkillCard({
  skill,
  instanceKey,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  skill: Skill;
  instanceKey: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      key={instanceKey}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative shrink-0 p-[1.5px] rounded-xl overflow-hidden group transition-all duration-300 w-[205px] sm:w-[225px] h-[50px] sm:h-[56px] cursor-pointer"
      style={{
        boxShadow: isHovered
          ? `0 0 32px 5px ${skill.bgGlow}, 0 0 18px 2px ${skill.neonColor}, 0 0 10px 1px #ffffff, 0 8px 20px rgba(0,0,0,0.7)`
          : `0 0 10px -4px ${skill.bgGlow}, 0 4px 14px 0 rgba(0, 0, 0, 0.45)`,
      }}
    >
      {/* Full-Box Supercharged Rotating Neon Color Aura on Hover */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square animate-border-rotate opacity-0 group-hover:opacity-85 transition-opacity duration-500 pointer-events-none blur-[16px]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${skill.neonColor} 60deg, #ffffff 90deg, ${skill.neonColor} 120deg, transparent 180deg, ${skill.neonColor} 240deg, #ffffff 270deg, ${skill.neonColor} 300deg, transparent 360deg)`,
        }}
      />

      {/* Layer 1: Intense Soft Blurred Running Neon Light Beam around Border (Continuously Running) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square animate-border-rotate opacity-85 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[5px]"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${skill.neonColor} 70deg, #ffffff 90deg, ${skill.neonColor} 110deg, transparent 180deg, ${skill.neonColor} 250deg, #ffffff 270deg, ${skill.neonColor} 290deg, transparent 360deg)`,
        }}
      />

      {/* Layer 2: Ultra-Bright Razor Running Neon Light Beam around Border (Continuously Running) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] aspect-square animate-border-rotate opacity-100 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${skill.neonColor} 75deg, #ffffff 90deg, ${skill.neonColor} 105deg, transparent 180deg, ${skill.neonColor} 255deg, #ffffff 270deg, ${skill.neonColor} 285deg, transparent 360deg)`,
        }}
      />

      {/* Inner Liquid Glass Card Body */}
      <div
        className="skill-card-inner relative z-10 rounded-[11px] bg-[#120722]/95 backdrop-blur-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.015] px-3 sm:px-3.5 py-1.5 h-full w-full flex items-center gap-2.5 sm:gap-3 border border-white/10 transition-all duration-300 group-hover:border-white/40 group-hover:shadow-[0_8px_24px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.3)] group-hover:-translate-y-0.5 overflow-hidden"
      >
        {/* Full Box Internal Brilliant Ambient Glow in Logo Color */}
        <div
          className="absolute inset-0 rounded-[11px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 25% 50%, ${skill.bgGlow} 0%, ${skill.neonColor}25 55%, transparent 80%)`,
          }}
        />

        {/* Icon inside frosted liquid glass well with Intense Neon Glow on Hover */}
        <div
          className="w-8 h-8 sm:w-8.5 sm:h-8.5 shrink-0 rounded-lg bg-white/[0.06] backdrop-blur-md border border-white/15 flex items-center justify-center p-1.5 transition-all duration-300 group-hover:scale-105 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
          style={{
            borderColor: isHovered ? skill.neonColor : "rgba(255, 255, 255, 0.15)",
            boxShadow: isHovered
              ? `0 0 20px 3px ${skill.neonColor}, 0 0 8px #ffffff, inset 0 0 8px ${skill.bgGlow}`
              : "none",
          }}
        >
          {skill.icon}
        </div>

        {/* Skill Name & Category */}
        <div className="relative z-10 flex flex-col justify-center min-w-0 text-left">
          <h3
            className="text-xs sm:text-[13px] font-bold tracking-tight transition-all duration-300 text-white truncate"
            style={{
              textShadow: isHovered
                ? `0 0 12px ${skill.neonColor}, 0 0 22px ${skill.neonColor}`
                : "none",
            }}
          >
            {skill.name}
          </h3>
          <p className="text-[10px] sm:text-[10.5px] text-white/50 font-medium leading-none truncate mt-0.5">
            {skill.category}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills(): React.JSX.Element {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Filter skills based on selected category
  const filteredSkills = useMemo(() => {
    if (activeFilter === "all") return skills;
    return skills.filter((s) => s.categoryType.includes(activeFilter));
  }, [activeFilter]);

  // Divide filtered skills into 2 continuous moving lines
  const { row1Items, row2Items } = useMemo(() => {
    const midPoint = Math.ceil(filteredSkills.length / 2);
    const r1 = filteredSkills.slice(0, midPoint);
    const r2 = filteredSkills.slice(midPoint);

    // Repetitions must be an even count (4) for a mathematically seamless -50% translateX loop
    const repeatCount = 4;
    const items1 = Array.from({ length: repeatCount }, () => r1).flat();
    const items2 = Array.from({ length: repeatCount }, () => r2).flat();

    return { row1Items: items1, row2Items: items2 };
  }, [filteredSkills]);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12">
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

        {/* Filter Navigation Options: All, Front end, Backend, Database */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.value;
            const count =
              option.value === "all"
                ? skills.length
                : skills.filter((s) => s.categoryType.includes(option.value as SkillCategory)).length;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setActiveFilter(option.value)}
                className={`skill-filter-btn relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "skill-filter-btn-active bg-white/[0.14] text-white border border-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.45),inset_0_1px_2px_rgba(255,255,255,0.4)] scale-105"
                    : "bg-white/[0.04] text-white/70 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F5FF]" />
                )}
                <span>{option.label}</span>
                <span
                  className={`text-[10px] sm:text-xs px-1.5 py-0.5 rounded-full font-mono transition-colors ${
                    isActive
                      ? "bg-cyan-400/20 text-cyan-300 border border-cyan-400/40"
                      : "bg-white/5 text-white/40"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dual-Row Continuous Marquee with Soft Edge Fade Masks */}
        <div
          key={activeFilter}
          className="relative w-full space-y-4 sm:space-y-5 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          {/* Line 1: Right to Left Continuous Motion */}
          <div className="flex w-full overflow-hidden py-1">
            <div className="animate-marquee-left gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 items-center">
              {row1Items.map((skill, index) => {
                const uniqueKey = `row1-${activeFilter}-${skill.id}-${index}`;
                return (
                  <SkillCard
                    key={uniqueKey}
                    skill={skill}
                    instanceKey={uniqueKey}
                    isHovered={hoveredId === uniqueKey}
                    onMouseEnter={() => setHoveredId(uniqueKey)}
                    onMouseLeave={() => setHoveredId(null)}
                  />
                );
              })}
            </div>
          </div>

          {/* Line 2: Left to Right Continuous Motion */}
          <div className="flex w-full overflow-hidden py-1">
            <div className="animate-marquee-right gap-3.5 sm:gap-4 pr-3.5 sm:pr-4 items-center">
              {row2Items.map((skill, index) => {
                const uniqueKey = `row2-${activeFilter}-${skill.id}-${index}`;
                return (
                  <SkillCard
                    key={uniqueKey}
                    skill={skill}
                    instanceKey={uniqueKey}
                    isHovered={hoveredId === uniqueKey}
                    onMouseEnter={() => setHoveredId(uniqueKey)}
                    onMouseLeave={() => setHoveredId(null)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
