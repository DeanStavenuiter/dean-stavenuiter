import { ReactNode } from "react";
import TEXT_01 from "@/components/code-examples/TEXT_01";

export interface Animation {
  id: string;
  slug: string;
  title: string;
  description: string;
  component: ReactNode;
  componentPath: string;
  category?: string;
}

export const animations: Animation[] = [
  {
    id: "text-01",
    slug: "text-01",
    title: "TEXT_01",
    description: `## GSAP SplitText Animation

A powerful text animation using the **SplitText** plugin from GSAP. This animation breaks down text into individual letters and animates them with a staggered effect.

### Key Features
- Individual letter animation with smooth transitions
- Customizable stagger timing for unique effects
- Smooth easing functions for natural movement

### Usage Tips
- Adjust the \`stagger\` property to control timing: \`stagger: 0.05\`
- Modify the \`duration\` to speed up or slow down the animation
- Experiment with different GSAP easing functions for varied effects`,
    component: <TEXT_01 />,
    componentPath: "src/components/code-examples/TEXT_01.tsx",
    category: "text",
  },
];

export function getAnimationBySlug(slug: string): Animation | undefined {
  return animations.find((anim) => anim.slug === slug);
}

export function getAllAnimationSlugs(): string[] {
  return animations.map((anim) => anim.slug);
}
