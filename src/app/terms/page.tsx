import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Snow Rider 3D Unblocked',
  description: 'Terms of service and user conduct for Snow Rider 3D Unblocked.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Game
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Terms of Service</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: September 2026
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing or playing Snow Rider 3D Unblocked, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the site immediately.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            2. Intellectual Property & Fair Use
          </h2>
          <p>
            All game titles, characters, images, and audio assets are property of their respective creators. This site provides an unblocked community portal under fair-use principles for educational and entertainment access.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            3. Disclaimer of Warranties
          </h2>
          <p>
            This website and its games are provided "as is" and "as available" without warranty of any kind. We do not guarantee uninterrupted or error-free access.
          </p>
        </section>
      </div>
    </div>
  );
}
