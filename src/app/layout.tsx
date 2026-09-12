import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://snowrider-unblocked.com'),
  title: {
    default: 'Snow Rider 3D - Alpine Slope Runner & Sled Adventure',
    template: '%s | Snow Rider 3D',
  },
  description:
    'Conquer endless snowy peaks in Snow Rider 3D! Steer your sled at breakneck speeds, dodge rolling boulders and frozen chasms, and collect gifts to unlock 10+ epic rides. Play free & unblocked directly in your browser.',
  keywords: [
    'snow rider 3d',
    'snow rider 3d unblocked',
    'snow rider',
    'snow rider unblocked',
    'snow rider unblocked 76',
    'snow rider unblocked 6x',
    'snow rider github',
    'snow rider 3d online free',
    'snow rider game',
    'unblocked games 66',
    'unblocked games 76',
    'unblocked games wtf',
    'school unblocked games',
    'winter games unblocked',
    'free sled game 3d',
  ],
  authors: [{ name: 'Snow Rider 3D Team' }],
  creator: 'Snow Rider 3D',
  publisher: 'Snow Rider 3D',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://snowrider-unblocked.com',
    siteName: 'Snow Rider 3D',
    title: 'Snow Rider 3D - Alpine Slope Runner & Sled Adventure',
    description:
      'Conquer endless snowy peaks in Snow Rider 3D! Steer your sled at breakneck speeds, dodge rolling boulders and frozen chasms, and collect gifts to unlock 10+ epic rides. Play free & unblocked directly in your browser.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Snow Rider 3D - Alpine Slope Runner & Sled Adventure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snow Rider 3D - Alpine Slope Runner & Sled Adventure',
    description:
      'Conquer endless snowy peaks in Snow Rider 3D! Steer your sled at breakneck speeds, dodge rolling boulders and frozen chasms, and collect gifts to unlock 10+ epic rides.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png?v=2', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/apple-touch-icon.png?v=2',
  },
  alternates: {
    canonical: 'https://snowrider-unblocked.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('snowrider:theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased selection:bg-green-500 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          <Header />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
