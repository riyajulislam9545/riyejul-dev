import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "WebHR - HR Management App",
    description: "WebHR automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
    icon: "/cards/card-1.png",
    link: "https://web.hr",
  },
  {
    id: 2,
    title: "WebHR Kiosk - Time Clock Kiosk",
    description: "WebHR Kiosk is a smart time clock app enabling employees to quickly and securely clock in and out of shifts with ease.",
    icon: "/cards/card-2.png",
    link: "https://web.hr",
  },
  {
    id: 3,
    title: "Somezing - AI-Powered Agents",
    description: "Somezing is an AI-powered agent platform built to automate business workflows and boost team productivity seamlessly.",
    icon: "/cards/card-3.png",
    link: "https://ibiimemon.com",
  },
  {
    id: 4,
    title: "FileIT - File Sharing App",
    description: "FileIT is a modern file sharing application designed to make sharing and managing files fast, secure, and straightforward.",
    icon: "/cards/card-4.png",
    link: "https://ibiimemon.com",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-[3px] border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-center gap-4 transition-all duration-300"
            >
              <div className="mb-4 shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white/70 text-sm mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                >
                  LEARN MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

