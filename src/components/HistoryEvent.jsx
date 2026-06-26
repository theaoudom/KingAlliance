"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';

const DISPLAY_MS = 5000;

const HistoryEvent = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const startCountdown = useCallback(() => {
    clearTimeout(timerRef.current);
    clearInterval(intervalRef.current);
    setVisible(true);
    setProgress(100);

    const start = Date.now();
    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 100 - (elapsed / DISPLAY_MS) * 100);
      setProgress(remaining);
      if (remaining === 0) clearInterval(intervalRef.current);
    }, 50);

    timerRef.current = setTimeout(() => setVisible(false), DISPLAY_MS);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountdown();
        } else {
          clearTimeout(timerRef.current);
          clearInterval(intervalRef.current);
          setVisible(false);
          setProgress(100);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
      clearInterval(intervalRef.current);
    };
  }, [startCountdown]);

  return (
    <div ref={containerRef} className="h-screen w-full relative" onMouseMove={startCountdown}>

      <div className="sticky top-0 h-screen w-full">
        <img
          src={item.imageUrl}
          alt={item.achievement}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex items-center justify-start pointer-events-none">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div
            className="w-full md:w-1/2 lg:w-2/5 bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl transition-opacity duration-700"
            style={{ opacity: visible ? 1 : 0 }}
          >
            <h2 className="text-7xl md:text-9xl font-black text-white/20 -ml-1">
              {item.season}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mt-2">
              {item.achievement}
            </h3>
            <div className="w-1/4 h-1 bg-[#d4af37] my-4 rounded-full" />
            <p className="text-lg text-white/80 leading-relaxed">
              {item.details}
            </p>

            <div className="mt-6 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d4af37]/50 rounded-full transition-none"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HistoryEvent;
