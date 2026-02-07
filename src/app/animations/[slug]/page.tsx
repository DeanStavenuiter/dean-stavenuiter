import type { Metadata } from "next";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Header from "@/components/NewHeader";
import AnimationReel from "@/components/animations/AnimationReel";
import CodeSnippet from "@/components/CodeSnippet";
import {
  getAnimationBySlug,
  getAllAnimationSlugs,
} from "@/config/animations.config";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAnimationSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const animation = getAnimationBySlug(slug);

  if (!animation) {
    return {
      title: "Animation Not Found",
    };
  }

  return {
    title: `${animation.title} - GSAP Animation`,
    description: animation.description,
    openGraph: {
      title: `${animation.title} - GSAP Animation | Dean Stavenuiter`,
      description: animation.description,
      type: "website",
    },
  };
}

export default async function AnimationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const animation = getAnimationBySlug(slug);

  if (!animation) {
    notFound();
  }

  // Read the source code from the file system
  const componentSourcePath = path.join(process.cwd(), animation.componentPath);
  const sourceCode = fs.readFileSync(componentSourcePath, "utf-8");

  return (
    <>
      <Header />
      <main className="min-h-screen py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto mb-12 text-center flex justify-between w-full ">
          {/* Back Button */}
          <div className="flex items-end ">
            <Link
              href="/animations"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black  transition-colors cursor-pointer"
            >
              <div className="max-w-7xl mx-auto flex items-center flex-end gap-2">
                <ChevronLeft className="w-5 h-5" />
                Back <span className="hidden md:block">to Animations</span>
              </div>
            </Link>
          </div>
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-bold uppercase text-black">
            {animation.title}
          </h1>
        </div>

        {/* Split View */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Animation - Takes 2 columns */}
          <div className="flex-col h-full w-full">
            <h2 className="text-2xl font-bold mb-4 text-black">Animation</h2>
            <div className="">
              <AnimationReel>{animation.component}</AnimationReel>
            </div>
          </div>

          {/* Right: Code - Takes 3 columns */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Source Code & Description
            </h2>
            <div className="flex-1 min-h-[600px]">
              <CodeSnippet
                code={sourceCode}
                description={animation.description}
                language="tsx"
                title={`${animation.title}.tsx`}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
