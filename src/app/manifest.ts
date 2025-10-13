import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dean Stavenuiter - Full Stack Developer",
    short_name: "Dean Stavenuiter",
    description:
      "Full Stack Developer specializing in Next.js, React, OutSystems, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/dean-stavenuiter.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/dean-stavenuiter.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}

