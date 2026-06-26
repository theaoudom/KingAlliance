"use client";

import { useState, useEffect } from 'react';

const LoadingDots = () => (
  <span className="inline-flex items-center gap-1.5 ml-2">
    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
    <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
  </span>
);

export default function PageLoader({ children }) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1300);
    const hideTimer = setTimeout(() => setVisible(false), 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#201d2a] transition-opacity duration-200"
          style={{ opacity: fading ? 0 : 1 }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 rounded-full bg-[#d4af37]/20 blur-2xl scale-150 animate-pulse" />
              <img
                src="/images/logo/logo.png"
                alt="King Alliance FC"
                className="relative h-24 w-24 rounded-full"
              />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white/90 flex items-center">
              Preparing the Pitch
              <LoadingDots />
            </h1>
            <p className="mt-2 text-white/50 text-sm">King Alliance FC</p>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
