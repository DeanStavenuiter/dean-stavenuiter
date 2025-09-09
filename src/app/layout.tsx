import type { Metadata } from "next";
import { Sofia_Sans_Condensed, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../../theme/theme-provider";

const sofiaSansCondensed = Sofia_Sans_Condensed({
  variable: "--font-sofia-sans-condensed",
  subsets: ["latin"],
});

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dean Stavenuiter",
  description: "Dean Stavenuiter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl-NL" className="">
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
