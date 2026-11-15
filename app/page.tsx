import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import LiquidBackground from "./components/LiquidBackground";
import LoadingScreen from "./components/LoadingScreen";
import CardBattleMischief from "./components/CardBattleMischief";

export default function Home(): React.JSX.Element {
  return (
    <main className="relative min-h-screen bg-[#0d041a] text-white selection:bg-purple-500/30 selection:text-white">
      <LoadingScreen />
      <LiquidBackground />
      <CardBattleMischief />
      <div className="relative z-10">
        <Header />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
