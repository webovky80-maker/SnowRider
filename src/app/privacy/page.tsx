import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Snow Rider 3D Unblocked',
  description: 'Privacy policy, Google AdSense cookie disclosure, COPPA, CCPA, and GDPR compliance details for Snow Rider 3D Unblocked.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Game
        </Link>
        <span>/</span>
        <span className="text-gray-900 dark:text-white">Privacy Policy</span>
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: September 2026
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-8 shadow-xs space-y-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            1. Introduction & Overview
          </h2>
          <p>
            Welcome to <strong>Snow Rider 3D Unblocked</strong>. We respect your privacy and are committed to protecting any data collected through your interaction with our website. This website does not require registration, personal user accounts, or financial transactions to play.
          </p>
        </section>

        {/* Mandatory Google AdSense Section */}
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            2. Google AdSense & Advertising Cookies Disclosure
          </h2>
          <p>
            We may partner with third-party advertising vendors, including <strong>Google AdSense</strong>, to display advertisements when you visit our website.
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Third-Party Vendor Cookies:</strong> Third-party vendors, including Google, use cookies (such as the DoubleClick DART cookie) to serve advertisements based on a user's prior visits to this website or other websites on the Internet.
            </li>
            <li>
              <strong>Personalized Ads:</strong> Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites across the Internet.
            </li>
            <li>
              <strong>Opt-Out Options:</strong> Users may opt out of personalized advertising at any time by visiting{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-semibold"
              >
                Google Ads Settings
              </a>. Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting{' '}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-semibold"
              >
                www.aboutads.info
              </a>.
            </li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            3. Local Storage & Functional Data
          </h2>
          <p>
            Our website uses browser <code>localStorage</code> purely to enhance your browsing experience:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Remembering your chosen interface theme (Dark or Light mode).</li>
            <li>Saving your high scores and accumulated in-game gift tallies locally within your browser.</li>
          </ul>
          <p>
            This data remains stored exclusively on your device and is never transmitted to or stored on our servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            4. Children's Online Privacy Protection Act (COPPA)
          </h2>
          <p>
            We strictly adhere to the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect or maintain any personal identifiable information (PII) from children under the age of 13. If you believe that a child has submitted personal information on our site, please contact us immediately so we can promptly delete it.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            5. GDPR & CCPA/CPRA Privacy Rights
          </h2>
          <p>
            Under the EU General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA/CPRA), visitors have the right to request access to, deletion of, or restriction of their personal data, as well as the right to opt out of the sale or sharing of personal information. Because we do not collect personal identifiers, no sellable personal profile data is held.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            6. Contact Information
          </h2>
          <p>
            For any inquiries, privacy concerns, or questions regarding our data practices, please visit our{' '}
            <Link href="/contact" className="text-green-600 hover:underline font-semibold">
              Contact Page
            </Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
