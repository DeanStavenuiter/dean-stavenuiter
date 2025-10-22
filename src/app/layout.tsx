import type { Metadata } from "next";
import { Sofia_Sans_Condensed, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../theme/theme-provider";
import { Analytics } from "@vercel/analytics/next"

const sofiaSansCondensed = Sofia_Sans_Condensed({
  variable: "--font-sofia-sans-condensed",
  subsets: ["latin"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deanstavenuiter.nl"),
  title: {
    default: "Dean Stavenuiter | Full Stack Developer & OutSystems Expert",
    template: "%s | Dean Stavenuiter",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, OutSystems, and modern web technologies. Building enterprise applications and innovative web solutions.",
  keywords: [
    "Dean Stavenuiter",
    "Full Stack Developer",
    "OutSystems Developer",
    "Next.js Developer",
    "React Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "AWS",
    "Prisma",
    "MongoDB",
    "Portfolio",
  ],
  authors: [{ name: "Dean Stavenuiter" }],
  creator: "Dean Stavenuiter",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.deanstavenuiter.nl",
    title: "Dean Stavenuiter | Full Stack Developer & OutSystems Expert",
    description:
      "Full Stack Developer specializing in Next.js, React, OutSystems, and modern web technologies. Former Michelin-starred chef turned developer.",
    siteName: "Dean Stavenuiter Portfolio",
    images: [
      {
        url: "/dean-stavenuiter.webp",
        width: 1200,
        height: 630,
        alt: "Dean Stavenuiter - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dean Stavenuiter | Full Stack Developer & OutSystems Expert",
    description:
      "Full Stack Developer specializing in Next.js, React, OutSystems, and modern web technologies.",
    images: ["/dean-stavenuiter.webp"],
    creator: "@deanstavenuiter",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.deanstavenuiter.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <head>
        <link rel="canonical" href="https://www.deanstavenuiter.nl" />
      </head>
      <body
        className={`${sofiaSansCondensed.variable} ${splineSansMono.variable} antialiased background-dots`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="max-w-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
