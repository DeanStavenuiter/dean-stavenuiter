import { ReactNode } from "react";
import TEXT_01 from "@/components/code-examples/Text/TEXT_01";
import TEXT_02 from "@/components/code-examples/Text/TEXT_02";
import TEXT_03 from "@/components/code-examples/Text/TEXT_03";
import EASE_POWER1 from "@/components/code-examples/Ease/Ease_Power1";

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
    description: `## GSAP SplitText Stagger from Center

A dynamic text animation using the **SplitText** plugin from GSAP. This animation splits text into individual letters and reveals them with a **stagger effect starting from the center**, creating an elegant outward expansion.

### Key Features
- Letters animate outward from the center point
- Creates a symmetrical, balanced reveal effect
- Perfect for hero titles and prominent headings
- Smooth easing functions for natural movement

### Usage Tips
- Adjust the \`stagger\` property to control timing: \`stagger: { from: "center", amount: 0.5 }\`
- Modify the \`duration\` to speed up or slow down the animation
- Use for centered text to emphasize symmetry`,
    component: <TEXT_01 />,
    componentPath: "src/components/code-examples/Text/TEXT_01.tsx",
    category: "text",
  },
  {
    id: "text-02",
    slug: "text-02",
    title: "TEXT_02",
    description: `## GSAP SplitText Stagger from End

A dynamic text animation using the **SplitText** plugin from GSAP. This animation splits text into individual letters and reveals them with a **stagger effect starting from the end**, creating a reverse-cascade reveal from right to left.

### Key Features
- Letters animate from the last character to the first
- Creates a unique reverse-flow effect
- Ideal for unconventional, attention-grabbing reveals
- Smooth easing functions for natural movement

### Usage Tips
- Adjust the \`stagger\` property to control timing: \`stagger: { from: "end", amount: 0.5 }\`
- Modify the \`duration\` to speed up or slow down the animation
- Great for RTL-style animations or creative layouts`,
    component: <TEXT_02 />,
    componentPath: "src/components/code-examples/Text/TEXT_02.tsx",
    category: "text",
  },
  {
    id: "text-03",
    slug: "text-03",
    title: "TEXT_03",
    description: `## GSAP SplitText Stagger from Start

A dynamic text animation using the **SplitText** plugin from GSAP. This animation splits text into individual letters and reveals them with a **stagger effect starting from the beginning**, creating a classic left-to-right typewriter-style reveal.

### Key Features
- Letters animate sequentially from the first character
- Creates a natural, reading-flow animation
- Most common and intuitive stagger direction
- Smooth easing functions for natural movement

### Usage Tips
- Adjust the \`stagger\` property to control timing: \`stagger: { from: "start", amount: 0.5 }\`
- Modify the \`duration\` to speed up or slow down the animation
- Perfect for most text animations and headlines`,
    component: <TEXT_03 />,
    componentPath: "src/components/code-examples/Text/TEXT_03.tsx",
    category: "text",
  },
  {
    id: "ease-power1",
    slug: "ease-power1",
    title: "EASE_POWER1",
    description: `## GSAP Power1 Ease Animation

A demonstration of GSAP's **Power1** easing function showing all three easing modes. Power1 provides subtle, linear-like acceleration with smooth transitions.

### Easing Modes Demonstrated

This example showcases the three different easing behaviors:

- **power1.in** (Circle 1) - Starts slowly and accelerates toward the end
- **power1.out** (Circle 2) - Starts quickly and decelerates toward the end  
- **power1.inOut** (Circle 3) - Combines both: slow start, fast middle, slow end

### Key Features
- Gentle acceleration curves for natural movement
- Perfect for subtle UI transitions and micro-interactions
- Lighter alternative to higher power eases (power2, power3, power4)

### Usage Tips
- Use \`power1.in\` for elements exiting or hiding
- Use \`power1.out\` for most UI elements entering the screen
- Use \`power1.inOut\` for smooth back-and-forth animations
- Compare with higher power values (power2, power3) for more dramatic effects`,
    component: <EASE_POWER1 />,
    componentPath: "src/components/code-examples/Ease/Ease_Power1.tsx",
    category: "ease",
  },
];

export function getAnimationBySlug(slug: string): Animation | undefined {
  return animations.find((anim) => anim.slug === slug);
}

export function getAllAnimationSlugs(): string[] {
  return animations.map((anim) => anim.slug);
}
