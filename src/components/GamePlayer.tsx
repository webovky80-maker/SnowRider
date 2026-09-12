'use client';

import React, { useState, useRef } from 'react';
import { Play, Maximize2, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

export function GamePlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const reloadGame = () => {
    const iframe = containerRef.current?.querySelector('iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm transition-all">
      {/* Game Viewport Container (16:9 Aspect Ratio) */}
      <div
        ref={containerRef}
        className="relative w-full pb-[56.25%] bg-gray-950 overflow-hidden select-none"
      >
        {isPlaying ? (
          <iframe
            src="https://snowrider-unblocked.github.io/game"
            title="Snow Rider 3D Unblocked Game"
            className="w-full h-full border-0 absolute inset-0"
            allow="autoplay; fullscreen; gamepad; accelerometer; gyroscope"
            allowFullScreen
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-white text-center">
            {/* Optimized WebP Background Poster */}
            <img
              src="/appbg.webp"
              alt="Snow Rider 3D Mountain Slope Background"
              width={750}
              height={422}
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.5] scale-105 transform transition-transform duration-700"
              fetchPriority="high"
            />

            {/* Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/30 to-gray-950/60" />

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center max-w-md mx-auto space-y-3 sm:space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant Unblocked Version • No Install</span>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight drop-shadow-md text-white">
                  Snow Rider 3D
                </h2>
                <p className="text-xs sm:text-sm text-gray-200 font-medium drop-shadow-sm">
                  Dodge obstacles, grab gifts & slide down endless alpine slopes!
                </p>
              </div>

              {/* Big Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Click to start playing Snow Rider 3D"
                className="group/btn relative inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-extrabold text-base sm:text-lg shadow-lg hover:shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span>PLAY NOW</span>
              </button>

              {/* Controls hint */}
              <div className="text-[11px] sm:text-xs text-gray-300 flex items-center gap-2">
                <span className="bg-gray-800/90 px-2 py-0.5 rounded border border-gray-700 text-gray-200">WASD / Arrows</span>
                <span>to steer</span>
                <span className="bg-gray-800/90 px-2 py-0.5 rounded border border-gray-700 text-gray-200">Space</span>
                <span>to jump</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Under-Game Toolbar */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 bg-gray-50 dark:bg-gray-800/60 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span className="font-medium hidden sm:inline">HTML5 WebGL • Works on Chromebook & Mobile</span>
          <span className="font-medium sm:hidden">HTML5 WebGL</span>
        </div>

        <div className="flex items-center gap-1.5">
          {isPlaying && (
            <button
              onClick={reloadGame}
              aria-label="Reload game session"
              title="Restart game"
              className="p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen mode"
            title="Fullscreen mode"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 font-semibold text-gray-800 dark:text-gray-200 transition-colors shadow-2xs"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GamePlayer;
