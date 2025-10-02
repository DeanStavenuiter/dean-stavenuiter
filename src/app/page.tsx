import Hero from "../components/animations/AnimatedHeroText";
import Header from "@/components/NewHeader";
import AboutMe from "@/components/AboutMe";
import TechStackCarousel from "@/components/TechStackCarousel";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AboutMe />
      <TechStackCarousel />
    </div>
  );
}
