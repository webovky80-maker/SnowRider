import React from 'react';
import GamePlayer from '@/components/GamePlayer';
import GameTabs from '@/components/GameTabs';

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Primary Page Heading for SEO */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Snow Rider 3D Unblocked
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Play the ultimate 3D downhill winter sports runner game online for free in your browser.
        </p>
      </div>

      {/* Game Player Canvas */}
      <section id="game-player" className="w-full">
        <GamePlayer />
      </section>

      {/* Tabbed Guide, Controls, Sleds & FAQ */}
      <section id="game-tabs" className="w-full">
        <GameTabs />
      </section>

      {/* In-Depth SEO Guide (Clean, authoritative, human-written tone) */}
      <article className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 p-6 sm:p-8 shadow-xs space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Why Snow Rider 3D is the Premier Unblocked Winter Game
          </h2>
          <p>
            <strong>Snow Rider 3D Unblocked</strong> is one of the most popular 3D browser games in classrooms and offices across the world. Engineered using modern Unity WebGL technologies, the game puts you directly in the driver seat of a downhill bobsled sliding down an infinite alpine summit. With high downhill speed, procedural terrain obstacles, and floating holiday gift boxes to gather, it tests your motor reflexes and spatial anticipation like few other arcade games can.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            How Does Snow Rider 3D Run Unblocked at School?
          </h3>
          <p className="mb-2">
            Most educational networks deploy content filters like Securly, Lightspeed Systems, or GoGuardian that block traditional flash portals and heavy gaming sites. Snow Rider 3D Unblocked functions smoothly because:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <strong>Client-Side WebGL 2.0:</strong> The entire game simulation executes locally inside your web browser via WebAssembly without requiring external downloads, runtime plugins, or proxy bypasses.
            </li>
            <li>
              <strong>Static Hosting:</strong> Clean static asset delivery ensures fast load times even over throttled campus Wi-Fi connections.
            </li>
            <li>
              <strong>Zero Flash Dependencies:</strong> Adobe Flash was discontinued in 2020. This build is 100% native HTML5 and runs flawlessly on Google Chromebooks, Macs, Windows laptops, and iPads.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Downhill Physics & Momentum Mechanics
          </h3>
          <p>
            Unlike flat 2D runners, Snow Rider 3D incorporates true 3D momentum and gravity calculations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
            <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                Speed Escalation
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Every 100 meters traversed increases forward momentum. Surviving beyond 500 meters requires quick predictive scanning rather than reactive dodging.
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
              <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                Airborne Trajectories
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Natural snow mounds act as launch ramps. Time your jumps at the crest to maximize airborne distance across wide mountain chasms.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            The Gift Economy & Sled Garage
          </h3>
          <p>
            Scattered along the snowy path are colorful wrapped holiday gifts. While tempting, never compromise your line for a risky present positioned directly in front of a tree or cliff. Gifts accumulate across runs and never expire, allowing you to unlock higher-tier sleds in the garage like the <em>Alpine Bob Pro</em> and the <em>Carbon Stealth Glider</em>, each featuring enhanced velocity caps and responsive lateral steering.
          </p>
        </div>
      </article>
    </div>
  );
}
