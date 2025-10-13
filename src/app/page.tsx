import Hero from "../components/animations/AnimatedHeroText";
import Header from "@/components/NewHeader";
import AboutMe from "@/components/AboutMe";
import TechStackCarousel from "@/components/TechStackCarousel";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home(): React.JSX.Element {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dean Stavenuiter",
    url: "https://deanstavenuiter.nl",
    image: "https://deanstavenuiter.nl/dean-stavenuiter.webp",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "HSO",
    },
    description:
      "Full Stack Developer specializing in Next.js, React, OutSystems, and modern web technologies. Former Michelin-starred chef turned developer.",
    sameAs: [
      "https://github.com/deanstavenuiter",
      "https://linkedin.com/in/deanstavenuiter",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "OutSystems",
      "AWS",
      "Prisma",
      "MongoDB",
      "Full Stack Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Online Programming Course",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative">
        <Header />
        <Hero />
        <AboutMe />
        <TechStackCarousel />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
