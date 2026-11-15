import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
  neonAccent: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "RAGXION – Bangladesh's Premier Esports Hub",
    category: "Full-Stack Gaming & Tournament Platform",
    description:
      "A high-stakes competitive esports tournament platform built for modern gamers. Features live tournament registrations, team matchmaking, dynamic brackets, and automated instant cash payout workflows via bKash and Nagad. Crafted with responsive, high-performance UI and dark cyber gaming aesthetic.",
    link: "https://ragxion--riyajulislam954.replit.app",
    image: "/projects/ragxion.jpg",
    tags: ["React", "Next.js", "Node.js", "Tailwind CSS", "REST APIs", "Fintech Integration"],
    neonAccent: "#00F5FF",
  },
  {
    id: 2,
    title: "Emperial-X – Crypto Mining Rig Web Application",
    category: "Interactive FinTech & Mining Simulator",
    description:
      "An interactive virtual crypto mining web application featuring automated yield generation, live cycle countdowns, multi-level rig upgrades, tier progression (Silver to Elite), and realtime balance synchronization. Built with sleek dark-mode glassmorphism and mobile-first responsive architecture.",
    link: "https://emperial-x--riyajulislam954.replit.app",
    image: "/projects/emperial-x.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "State Management", "Gamified UI"],
    neonAccent: "#FFDE00",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-purple-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-2">
            Real-World Deployments
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed">
            Live web applications and production systems designed, developed, and deployed by Md Riyajul Islam.
          </p>
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div key={project.id} className="relative group">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Text Content */}
                  <div
                    className={`lg:col-span-6 flex flex-col ${
                      isEven ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: project.neonAccent }}
                      />
                      <p
                        className="text-sm font-semibold tracking-wide uppercase"
                        style={{ color: project.neonAccent }}
                      >
                        {project.category}
                      </p>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>

                    {/* Description Card */}
                    <div data-battle-card="project-card" className="liquid-glass rounded-3xl p-6 sm:p-8 shadow-[0_16px_48px_0_rgba(0,0,0,0.5)] border border-white/10 mb-6 backdrop-blur-2xl">
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/[0.08]">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-white/80 font-medium tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Live Website Link */}
                    <div className="flex items-center gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 liquid-glass-pill px-6 py-3 rounded-full text-white hover:text-cyan-300 border border-purple-400/40 hover:border-cyan-400 transition-all text-sm sm:text-base font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:scale-105 active:scale-95"
                        aria-label={`Visit live deployment of ${project.title}`}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10B981]" />
                        <span>Live Preview</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4 text-cyan-400"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </a>

                      <span className="text-xs text-white/50 font-mono hidden sm:inline-block">
                        {new URL(project.link).hostname}
                      </span>
                    </div>
                  </div>

                  {/* Image Display */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-battle-card="project-card"
                      className="block relative rounded-3xl overflow-hidden liquid-glass p-2.5 sm:p-3 border border-white/15 shadow-[0_20px_60px_0_rgba(0,0,0,0.6)] group-hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.35)]"
                    >
                      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[#0d041a]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          priority={index === 0}
                        />

                        {/* Liquid Glaze on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d041a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      </div>
                    </a>
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
