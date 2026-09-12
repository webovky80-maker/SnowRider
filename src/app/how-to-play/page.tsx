import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Gamepad2, ArrowLeft, Lightbulb, Play, Trophy, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { CONTROLS, PRO_TIPS } from '@/data/game-data';

export const metadata: Metadata = {
  title: 'How to Play Snow Rider 3D - Controls, Tips & Strategies Guide',
  description: 'Complete guide on how to play Snow Rider 3D unblocked. Master PC keyboard controls, mobile swipes, advanced jumping mechanics, and high-score survival tips.',
};

export default function HowToPlayPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Game
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">How to Play</span>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400">
          <Gamepad2 className="w-4 h-4" /> Official Gameplay Manual
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          How to Play Snow Rider 3D Unblocked: The Complete Guide
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Whether you are jumping onto the snowy slopes for the first time or striving to shatter your personal distance record, this comprehensive guide covers every control, movement mechanic, and evasion tactic you need.
        </p>
      </div>

      {/* Control Schemes */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <Gamepad2 className="w-6 h-6 text-green-600 dark:text-green-400" /> Control Schemes: Keyboard & Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTROLS.map((ctrl) => (
            <div
              key={ctrl.action}
              className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 flex items-center justify-between"
            >
              <div>
                <div className="font-bold text-gray-900 dark:text-white text-sm">
                  {ctrl.action}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {ctrl.purpose}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-xs">
                  {ctrl.key}
                </kbd>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Mechanics Deep-Dive */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <Trophy className="w-6 h-6 text-amber-500" /> Core Game Objectives & Rules
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            The game loop of <strong>Snow Rider 3D</strong> is straightforward to learn, yet relentlessly challenging to master:
          </p>
          <ul className="space-y-3 list-none pl-0">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong>Infinite Downhill Descent:</strong> There is no final finish line. The goal is to survive as many meters as possible down the infinite mountainside.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong>One-Hit Elimination:</strong> Colliding with any solid object—a tree, rock, snowman, or tumbling boulder—or falling down a ravine immediately ends your run.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <strong>Gift Economy:</strong> Scattered along the snow path are wrapped Christmas presents. Grabbing gifts does not give you an instant speed boost, but they persist in your garage balance so you can buy better sleds.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Advanced Strategies */}
      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2.5">
          <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" /> Advanced Movement & Reflex Tactics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRO_TIPS.map((tip, idx) => {
            const [title, ...rest] = tip.split(': ');
            const description = rest.join(': ');
            return (
              <div key={title} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
                <div className="flex items-center gap-2 font-bold text-gray-900 dark:text-white text-sm mb-1.5">
                  <span className="w-6 h-6 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center text-xs">
                    {idx + 1}
                  </span>
                  {title}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {description || title}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <div className="text-center py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-base shadow-sm hover:scale-105 active:scale-95 transition-all"
        >
          <Play className="w-5 h-5 fill-current" /> Play Snow Rider 3D Now
        </Link>
      </div>
    </div>
  );
}
