'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config'; // Targets sanity.config.ts in your project root folder

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-white text-black relative z-50">
      <NextStudio config={config} />
    </main>
  );
}