'use client';

import React from 'react';

export function GamePlayer() {
  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xs">
      {/* Game Iframe Wrapper */}
      <div className="relative w-full game-container">
        <div className="relative w-full pb-[56.25%] bg-black">
          <iframe
            src="https://snowrider-unblocked.github.io/game"
            title="Snow Rider 3D Unblocked Game"
            className="w-full h-full border-0 absolute inset-0"
            allow="autoplay; fullscreen; gamepad; accelerometer; gyroscope"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default GamePlayer;
