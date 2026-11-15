import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#lab" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d041a]/50 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
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
              className="h-9 sm:h-11 w-auto object-contain"
              priority 
            />
          </Link>
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
        </div>
      </nav>
    </header>
  );
}

