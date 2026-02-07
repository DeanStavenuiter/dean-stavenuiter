import type { Metadata } from "next";
import AnimationReel from "@/components/animations/AnimationReel";
import Header from "@/components/NewHeader";
import { animations } from "@/config/animations.config";

export const metadata: Metadata = {
  title: "GSAP Animations Showcase",
  description:
    "Explore creative GSAP animations and learn animation techniques. Follow along on Instagram for animation tutorials and tips.",
  openGraph: {
    title: "GSAP Animations Showcase | Dean Stavenuiter",
    description:
      "Explore creative GSAP animations and learn animation techniques.",
    type: "website",
  },
};

export default function AnimationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-20 px-6 md:px-20">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-16 text-center mt-12">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 uppercase text-black">
            GSAP Animations
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            A collection of creative GSAP animations. Follow me on{" "}
            <a
              href="https://instagram.com/dev.d.machine"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-70 transition-opacity"
            >
              Instagram
            </a>{" "}
            for animation tutorials and tips.
          </p>
        </div>

        {/* Animations Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {animations.reverse().map((animation) => (
            <AnimationReel
              key={animation.id}
              title={animation.title}
              href={`/animations/${animation.slug}`}
            >
              {animation.component}
            </AnimationReel>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-20 text-center">
          <div className="border border-gray-300 rounded-xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-4 text-black">
              Want to Learn More?
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Follow my Instagram for step-by-step GSAP tutorials, animation
              tips, and creative coding inspiration.
            </p>
            <a
              href="https://instagram.com/dev.d.machine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Instagram
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
