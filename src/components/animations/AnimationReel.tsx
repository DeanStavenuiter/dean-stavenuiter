"use client";

import { ReactNode, useState } from "react";
import { RotateCcw } from "lucide-react";
import Link from "next/link";

interface AnimationReelProps {
  children: ReactNode;
  title?: string;
  description?: string;
  className?: string;
  href?: string;
}

export default function AnimationReel({
  children,
  title,
  description,
  className = "",
  href,
}: AnimationReelProps) {
  const [reloadKey, setReloadKey] = useState(0);

  const handleReload = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setReloadKey((prev) => prev + 1);
  };

  const reelContent = (
    <>
      {title && (
        <h2 className="text-2xl font-bold text-center text-black">{title}</h2>
      )}

      <div
        className={`relative w-full max-w-[540px] aspect-[9/16] overflow-hidden rounded-xl bg-white shadow-lg border border-gray-300 ${href ? "cursor-pointer group" : ""}`}
      >
        <button
          onClick={handleReload}
          className="absolute top-4 right-4 z-10 p-2 bg-black/80 hover:bg-black text-white rounded-full transition-all duration-200 hover:scale-110 active:scale-95 group/btn"
          aria-label="Reload animation"
        >
          <RotateCcw className="w-5 h-5 group-active/btn:rotate-180 transition-transform duration-500" />
        </button>

        {/* Hover overlay for clickable reels */}
        {href && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200 pointer-events-none" />
        )}

        {/* Animation content container */}
        <div
          key={reloadKey}
          className="relative h-full w-full flex items-center justify-center p-8"
        >
          {children}
        </div>

        {/* Bottom banner for clickable reels */}
        {href && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white text-center py-3 px-4">
            <p className="text-sm font-medium">Click to see code</p>
          </div>
        )}
      </div>

      {description && (
        <p className="text-center text-gray-600 max-w-[540px] text-sm">
          {description}
        </p>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`flex flex-col items-center gap-4 ${className} cursor-pointer`}
      >
        {reelContent}
      </Link>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {reelContent}
    </div>
  );
}
