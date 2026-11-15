import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div data-battle-card="about-card" className="liquid-glass px-6 py-8 sm:px-10 sm:py-10 rounded-3xl relative overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              About Me
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/95 leading-relaxed font-medium">
              A passionate <span className="text-purple-400 font-semibold">Frontend Developer</span> committed to building ideas into attractive websites, systems &amp; software.
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto text-white/75 mt-4 leading-relaxed">
              Turning creative ideas into modern, responsive, and powerful digital experiences through design, development, and technology.
            </p>
          </div>
          <div className="flex justify-center">
            <Image 
              src="/assets/illustration.png"
              alt="Skills and technologies illustration"
              width={800}
              height={800}
              className="w-full max-w-3xl h-auto object-contain mx-auto transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

