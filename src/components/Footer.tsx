import React from 'react';
import Link from 'next/link';
import { Trophy, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 text-sm mt-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-gray-900 dark:text-white font-bold text-lg">
              <img
                src="/logo-sm.webp"
                alt="Snow Rider 3D Logo"
                width={28}
                height={28}
                className="w-7 h-7 rounded-full object-contain"
              />
              <span>Snow Rider 3D</span>
            </Link>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Play Snow Rider 3D unblocked online for free directly in your web browser. Optimized for Chromebooks, school networks, and desktop browsers.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Safe & school-friendly sandbox</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-3">
              Snow Rider 3D
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Play Now
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  How to Play & Controls
                </Link>
              </li>
              <li>
                <Link href="/#game-tabs" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Sleds Garage & Stats
                </Link>
              </li>
              <li>
                <Link href="/#game-tabs" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Obstacle Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Strategy & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-3">
              Guides & Tips
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/how-to-play" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Controls & Keybindings
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Pro High-Score Tips
                </Link>
              </li>
              <li>
                <Link href="/#game-tabs" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  FAQ & Troubleshooting
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200 mb-3">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-400 space-y-2">
          <p className="leading-relaxed">
            <strong>Disclaimer:</strong> Snow Rider 3D is developed by TapNation. This unblocked community site provides browser access for fans and students under fair use principles. All trademarks and copyrighted assets belong to their respective holders.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-gray-500 dark:text-gray-400">
            <div>
              © {currentYear} Snow Rider 3D Unblocked.
            </div>
            <div className="flex items-center gap-1">
              Built for downhill arcade fans worldwide
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
