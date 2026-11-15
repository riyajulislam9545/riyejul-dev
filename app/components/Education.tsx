export default function Education(): React.JSX.Element {
  const highlights = [
    {
      title: "Core Engineering & CS",
      desc: "Data Structures, Algorithms, Object-Oriented Programming (OOP), and Software Engineering principles.",
    },
    {
      title: "Web & System Tech",
      desc: "Full-stack web fundamentals, database architectures (DBMS & SQL), networking, and OS concepts.",
    },
    {
      title: "Hands-on Practical Labs",
      desc: "Architecting interactive client-side applications, frontend components, and software engineering projects.",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full liquid-glass-pill border border-purple-400/30 text-purple-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            <svg
              className="w-4 h-4 text-purple-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.45 9L12 4.33 20.55 9 12 13.67 3.45 9zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Education &amp; Qualifications
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
            Formal technical education providing solid foundational knowledge in computer science, software design, and modern system architectures.
          </p>
        </div>

        {/* Main Education Showcase Card with Neon Glow */}
        <div className="relative group max-w-4xl mx-auto">
          {/* Breathing Ambient Neon Aura */}
          <div
            aria-hidden="true"
            className="absolute -inset-1.5 rounded-[32px] pointer-events-none opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(135deg, rgba(0, 245, 255, 0.4) 0%, rgba(168, 85, 247, 0.45) 50%, rgba(217, 70, 239, 0.3) 100%)",
            }}
          />

          {/* Liquid Glass Card Body */}
          <div data-battle-card="education-card" className="relative z-10 liquid-glass p-8 sm:p-12 rounded-[28px] border border-white/20 shadow-[0_12px_45px_rgba(0,0,0,0.6),inset_0_1px_2px_rgba(255,255,255,0.25)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div className="flex items-start gap-4 sm:gap-5">
                {/* Academic Graduation Icon in Neon Container */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl liquid-glass flex items-center justify-center shrink-0 border border-cyan-400/40 shadow-[0_0_20px_rgba(0,245,255,0.35)]">
                  <svg
                    className="w-8 h-8 sm:w-9 sm:h-9 text-cyan-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM3.45 7L12 3.11 20.55 7 12 10.89 3.45 7zM5 11.5v4.5L12 19l7-3v-4.5L12 15l-7-3.5z" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(0,245,255,0.25)]">
                      Engineering Diploma
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-400/40">
                      Computer Science
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                    Diploma in Engineering
                  </h3>
                  <p className="text-lg sm:text-xl text-cyan-300 font-medium mt-1">
                    Computer Science and Technology (CST)
                  </p>
                  <p className="text-sm text-white/70 mt-1 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Infra Polytechnic Institute, Barishal</span>
                  </p>
                </div>
              </div>

              {/* Academic Status Badge (No CGPA) */}
              <div className="w-full md:w-auto flex md:flex-col items-center md:items-end justify-between md:justify-center p-4 rounded-2xl liquid-glass border border-cyan-400/40 bg-cyan-500/10 shadow-[0_0_20px_rgba(0,245,255,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)]">
                <span className="text-xs uppercase tracking-wider text-cyan-300/90 font-medium">
                  Academic Session
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#00F5FF]" />
                  <span className="text-base sm:text-lg font-bold text-white tracking-wide">
                    2022 – 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Core Coursework & Engineering Competencies */}
            <div className="pt-8">
              <h4 className="text-sm font-semibold tracking-wider uppercase text-purple-300/90 mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#A855F7]" />
                Key Academic Competencies &amp; Coursework
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl liquid-glass border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,255,0.2)]"
                  >
                    <div className="flex items-center gap-2 mb-2 text-white font-semibold text-base">
                      <svg
                        className="w-4 h-4 text-cyan-400 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
