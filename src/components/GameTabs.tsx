'use client';

import React, { useState } from 'react';
import { SLEDS, OBSTACLES, CONTROLS, PRO_TIPS } from '@/data/game-data';
import { FAQS } from '@/data/faqs';
import { ChevronDown } from 'lucide-react';

const TABS = [
  { id: 'about', label: 'About' },
  { id: 'how-to-play', label: 'How to Play' },
  { id: 'sleds', label: 'Sleds' },
  { id: 'obstacles', label: 'Obstacles' },
  { id: 'faq', label: 'FAQ' },
] as const;

type TabId = typeof TABS[number]['id'];

export default function GameTabs() {
  const [activeTab, setActiveTab] = useState<TabId>('about');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-xs overflow-hidden">
      {/* Tab Navigation Pill Bar */}
      <div
        role="tablist"
        aria-label="Game Guide Sections"
        className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-1.5 gap-1 overflow-x-auto scrollbar-none"
      >
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[90px] py-2 px-3 rounded-md text-sm font-medium transition-all text-center ${
                isActive
                  ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold shadow-xs'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 border border-transparent'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content Panels (ALL panels remain permanently in HTML DOM for 100% Google SEO indexing) */}
      <div className="p-6">
        {/* ABOUT TAB */}
        <div
          id="tabpanel-about"
          role="tabpanel"
          aria-labelledby="tab-about"
          className={activeTab === 'about' ? 'block' : 'hidden'}
        >
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Snow Rider 3D
              </h2>
              <p className="mb-3">
                Experience the thrill of downhill bobsledding in <strong>Snow Rider 3D</strong>, where stunning 3D graphics meet exhilarating, reflex-driven gameplay. Master steep procedural slopes, leap across bottomless ice ravines, dodge massive pine trees, and collect wrapped Christmas gifts in this ultimate unblocked winter sports adventure.
              </p>
              <p className="mb-3">
                Whether you are carving through fresh alpine powder, pulling off spectacular high-speed aerial leaps, or racing against time to beat your personal distance record, every run brings an unpredictable new challenge. With realistic momentum physics and instant keyboard steering, you will feel the intense rush of sliding down beautifully crafted mountain trails.
              </p>
              <p>
                Created by <strong>TapNation</strong> and enjoyed by millions of riders worldwide, Snow Rider 3D combines smooth 60 FPS WebGL rendering with deep replay value. The game runs directly in your browser on Chromebooks, school laptops, and desktop computers with zero downloads or plugins required.
              </p>
            </div>

            {/* Features list */}
            <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-3">
                Key Game Highlights
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 list-disc pl-5">
                <li><strong>Infinite Mountain Descent:</strong> Dynamic slope generation ensures no two runs are identical.</li>
                <li><strong>Unlockable Sleds Garage:</strong> Collect presents scattered across trails to unlock 6+ upgraded sleds.</li>
                <li><strong>Realistic Momentum Physics:</strong> Velocity increases gradually as you survive further down the summit.</li>
                <li><strong>Pure Unblocked WebGL:</strong> Optimized to run through school network firewalls at 60 FPS without lag.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* HOW TO PLAY TAB */}
        <div
          id="tabpanel-how-to-play"
          role="tabpanel"
          aria-labelledby="tab-how-to-play"
          className={activeTab === 'how-to-play' ? 'block' : 'hidden'}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                How to Play & Controls
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Control your sled using standard keyboard keys or mobile touch gestures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {CONTROLS.map((ctrl) => (
                <div
                  key={ctrl.action}
                  className="p-3.5 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                      {ctrl.action}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {ctrl.purpose}
                    </div>
                  </div>
                  <kbd className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 shadow-xs">
                    {ctrl.key}
                  </kbd>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
              <strong>Crucial Strategy Tip:</strong> Sleds cannot steer while airborne! Only jump when clearing mandatory canyon chasms or low barriers. On steep slopes, use micro-taps rather than holding keys to avoid dangerous drifting.
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider">
                Pro High-Score Rules
              </h3>
              <div className="space-y-2">
                {PRO_TIPS.map((tip, idx) => {
                  const [title, ...rest] = tip.split(': ');
                  return (
                    <div key={title} className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                      <span className="font-bold text-gray-900 dark:text-white shrink-0">{idx + 1}. {title}:</span>
                      <span>{rest.join(': ')}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* SLEDS TAB */}
        <div
          id="tabpanel-sleds"
          role="tabpanel"
          aria-labelledby="tab-sleds"
          className={activeTab === 'sleds' ? 'block' : 'hidden'}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Sleds Garage & Stats
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Collect wrapped holiday presents on the slopes to unlock faster, more agile downhill vehicles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SLEDS.map((sled) => (
                <div
                  key={sled.id}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col justify-between hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">🛷</span>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded-full ${
                        sled.giftsRequired === 0
                          ? 'bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-400'
                          : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400'
                      }`}>
                        {sled.giftsRequired === 0 ? 'Default' : `🎁 ${sled.giftsRequired} Gifts`}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {sled.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-3">
                      {sled.description}
                    </p>

                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Speed</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{sled.speed}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${sled.speed}%` }} />
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-500">Steering</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{sled.steering}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: `${sled.steering}%` }} />
                      </div>

                      <div className="flex justify-between">
                        <span className="text-gray-500">Stability</span>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{sled.stability}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 rounded-full" style={{ width: `${sled.stability}%` }} />
                      </div>
                    </div>
                  </div>

                  {sled.badge && (
                    <div className="mt-3 pt-2 border-t border-gray-100 dark:border-gray-800 text-[11px] font-bold text-green-600 dark:text-green-400">
                      ★ {sled.badge}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OBSTACLES TAB */}
        <div
          id="tabpanel-obstacles"
          role="tabpanel"
          aria-labelledby="tab-obstacles"
          className={activeTab === 'obstacles' ? 'block' : 'hidden'}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Mountain Obstacles & Evasion Tactics
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A single impact will wreck your sled. Learn to read the slopes in advance.
              </p>
            </div>

            <div className="space-y-3">
              {OBSTACLES.map((obs) => (
                <div
                  key={obs.name}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl p-2 bg-gray-100 dark:bg-gray-800 rounded-lg shrink-0">
                      {obs.icon}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                          {obs.name}
                        </h3>
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${
                          obs.danger === 'Extreme'
                            ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400'
                            : obs.danger === 'High'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-950/50 dark:text-yellow-400'
                        }`}>
                          {obs.danger} Risk
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                        {obs.description}
                      </p>
                    </div>
                  </div>

                  <div className="sm:max-w-xs shrink-0 bg-gray-50 dark:bg-gray-800/70 p-2.5 rounded-md border border-gray-200/60 dark:border-gray-700/60 text-xs">
                    <span className="font-bold text-gray-700 dark:text-gray-300">Counter: </span>
                    <span className="text-gray-600 dark:text-gray-400">{obs.avoidanceTip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ TAB */}
        <div
          id="tabpanel-faq"
          role="tabpanel"
          aria-labelledby="tab-faq"
          className={activeTab === 'faq' ? 'block' : 'hidden'}
        >
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Common questions about Snow Rider 3D unblocked gameplay, school access, and controls.
              </p>
            </div>

            <div className="space-y-2">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden bg-white dark:bg-gray-900"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white text-sm pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isOpen ? 'rotate-180 text-blue-500' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
