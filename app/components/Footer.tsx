"use client";

import Link from "next/link";
import { useState } from "react";

interface SocialLink {
  name: string;
  href: string;
  username: string;
  color: string;
  glow: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/md-riyajul-islam",
    username: "in/md-riyajul-islam",
    color: "#0A66C2",
    glow: "rgba(10, 102, 194, 0.45)",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/riyajulislam9545",
    username: "@riyajulislam9545",
    color: "#C084FC",
    glow: "rgba(192, 132, 252, 0.45)",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1KftAsF6mk/",
    username: "Md Riyajul Islam",
    color: "#1877F2",
    glow: "rgba(24, 119, 242, 0.45)",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/md__riyajul__islam?vrfl=MTd1ZjU2ajR0a2kydg==",
    username: "@md__riyajul__islam",
    color: "#E4405F",
    glow: "rgba(228, 64, 95, 0.45)",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Email (Direct)",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdriyajulislam30301@gmail.com&su=Project%20Inquiry%20-%20Md%20Riyajul%20Islam",
    username: "mdriyajulislam30301@gmail.com",
    color: "#EA4335",
    glow: "rgba(234, 67, 53, 0.45)",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
];

export default function Footer(): React.JSX.Element {
  const email = "mdriyajulislam30301@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Project%20Inquiry%20-%20Md%20Riyajul%20Islam`;
  const mailtoUrl = `mailto:${email}?subject=Project%20Inquiry%20-%20Md%20Riyajul%20Islam`;

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // On mobile devices, native mailto directly launches the phone's mail app
    // On desktop, opening Gmail compose in new tab directly opens the web composer
    const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Main Liquid Glass Contact Card */}
        <div data-battle-card="contact-card" className="relative rounded-[32px] p-[2px] overflow-hidden shadow-[0_20px_60px_0_rgba(0,0,0,0.55)]">
          {/* Subtle Ambient Border Glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-cyan-400/30 to-purple-500/30 blur-sm pointer-events-none"
          />

          <div className="relative z-10 bg-[#120722]/95 backdrop-blur-2xl rounded-[30px] p-8 sm:p-14 text-center border border-white/10">
            <p className="text-purple-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
              Let&apos;s Build Together
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
              Have an exciting project, open role, or collaboration idea in mind?
              Click below to send an email directly or connect across social channels.
            </p>

            {/* Primary Interactive Email Box */}
            <div className="flex flex-col items-center justify-center gap-4 mb-12">
              {/* Main Glowing Click-to-Compose Email Button */}
              <a
                href={gmailComposeUrl}
                onClick={handleEmailClick}
                title="Click to write an email directly"
                className="group relative inline-flex flex-wrap items-center justify-center gap-3 px-6 sm:px-9 py-4 sm:py-4.5 rounded-full bg-white/[0.07] hover:bg-white/[0.14] backdrop-blur-2xl border border-cyan-400/50 hover:border-cyan-300 text-white font-semibold text-base sm:text-lg shadow-[0_0_30px_rgba(0,245,255,0.35)] hover:shadow-[0_0_45px_rgba(0,245,255,0.65),0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_#10B981]" />
                <span className="tracking-wide text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                  {email}
                </span>

                {/* Send / Compose Icon */}
                <div className="flex items-center gap-1.5 pl-2 text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Send Mail</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </a>

              {/* Direct Mail Action Helpers */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
                {/* 1. Gmail Web Direct */}
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-glass border border-red-500/40 text-red-300 hover:text-white hover:border-red-400 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  <span>Open in Gmail</span>
                </a>

                {/* 2. Default Mail Client (mailto) */}
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-glass border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Open Mail App</span>
                </a>

                {/* 3. Copy Email Address */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full liquid-glass border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-200 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400 font-semibold">✓ Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Media Grid */}
            <div className="pt-8 border-t border-white/[0.08]">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-6 font-semibold">
                Connect With Me
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.10] backdrop-blur-xl border border-white/10 hover:border-white/30 text-white/90 hover:text-white transition-all duration-300 text-sm font-medium shadow-md hover:scale-105 active:scale-95"
                    style={
                      {
                        "--hover-glow": social.glow,
                        "--hover-color": social.color,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className="transition-colors"
                      style={{ color: social.color }}
                    >
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Massive Name Display with Dynamic Sweeping Glow & Shadow */}
        <div className="relative w-full overflow-visible select-none pointer-events-none mt-12 sm:mt-16 mb-6 text-center flex items-center justify-center">
          {/* Synchronized Ambient Soft Glow drifting behind text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="w-[38%] h-[85%] rounded-full bg-gradient-to-r from-cyan-400/25 via-purple-500/30 to-pink-500/20 blur-[60px] animate-footer-ambient-sweep" />
          </div>

          <h2 className="relative inline-block text-[13.5vw] sm:text-[14.5vw] md:text-[15.5vw] lg:text-[11rem] xl:text-[12.5rem] font-black tracking-tighter leading-none footer-glowing-name uppercase select-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            RIYAJUL
          </h2>
        </div>

        {/* Footer Bottom Bar matching Screenshot */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-white/50">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full border border-white/20 bg-black/80 flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0">
              N
            </div>
            <p>© {new Date().getFullYear()} MD RIYAJUL ISLAM. All rights reserved.</p>
          </div>
          <p className="text-white/40">
            Designed &amp; Engineered with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
