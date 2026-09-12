import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Snowflake, ShieldCheck, Heart, Users, Sparkles, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Snow Rider 3D Unblocked Community',
  description: 'Learn about the mission, web technology, and team behind the premier Snow Rider 3D Unblocked gaming community portal.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      {/* Header breadcrumb */}
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Game
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">About Us</span>
      </div>

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600 dark:text-green-400">
          <Snowflake className="w-4 h-4" /> About Our Portal
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          About Snow Rider 3D Unblocked
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          We are an enthusiast-driven browser gaming community dedicated to delivering lightweight, unrestricted, high-performance web gaming experiences to students, casual players, and speedrunners worldwide.
        </p>
      </div>

      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Our Mission: Clean, Accessible Web Gaming
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            The modern web is often cluttered with pop-up ads, intrusive trackers, paywalls, and slow loading times. For students on Chromebooks or workers taking a quick mental health break, finding an authentic, lag-free copy of Snow Rider 3D shouldn't require dodging malicious redirects or downloading shady browser extensions.
          </p>
          <p>
            Our portal was built from the ground up to solve this. Using modern Next.js static site architecture, WebGL 2.0 acceleration, and mobile-responsive viewport containers, we ensure you can hop into the game in under 2 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-2">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">100% Safe & Secure</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              No downloads, no logins, no credit cards. Safe for young gamers and classrooms.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center mb-2">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Zero Bloat</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Clean, ad-free player canvas optimized for 60 FPS on any Chromebook or laptop.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-2">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">Community First</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Created for gamers, by gamers. Regular updates and responsive feedback channels.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
        <h3 className="font-bold text-gray-900 dark:text-white text-base">
          Intellectual Property & Fair Use Notice
        </h3>
        <p className="leading-relaxed">
          Snow Rider 3D is the original creation and trademark of its respective game creators. This unblocked community website operates independently to archive, document, and provide accessible educational gameplay. We do not sell in-game purchases or claim ownership of original game code.
        </p>
      </section>
    </div>
  );
}
