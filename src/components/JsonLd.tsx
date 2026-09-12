import React from 'react';
import { GAME_INFO } from '@/data/game-data';
import { FAQS } from '@/data/faqs';

export default function JsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Snow Rider 3D',
    alternateName: ['Snow Rider 3D Unblocked', 'Snow Rider', 'Snow Rider Game'],
    url: 'https://snowrider-unblocked.com',
    description:
      'Conquer endless snowy peaks in Snow Rider 3D! Steer your sled at breakneck speeds, dodge rolling boulders and frozen chasms, and collect gifts to unlock 10+ epic rides.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://snowrider-unblocked.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: GAME_INFO.title,
    description: GAME_INFO.description,
    genre: ['Arcade', 'Endless Runner', 'Winter Sports', 'Racing', '3D Game'],
    playMode: 'SinglePlayer',
    applicationCategory: 'Game',
    operatingSystem: 'Any (Web Browser, WebGL 2.0)',
    browserRequirements: 'Requires HTML5 and WebGL support. Compatible with Chrome, Edge, Safari, Firefox.',
    inLanguage: 'en-US',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GAME_INFO.rating.toString(),
      bestRating: '5.0',
      worstRating: '1.0',
      ratingCount: GAME_INFO.ratingCount.replace(/,/g, ''),
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      name: GAME_INFO.developer,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Snow Rider Unblocked Games Hub',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
