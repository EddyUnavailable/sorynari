import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <h1 className="text-5xl font-bold mb-4">🪐 Welcome to the Galactic Lore Archive</h1>
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
        Discover the intricate histories, cultures, technologies, and hierarchies of the galaxy&apos;s most powerful and mysterious civilizations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <Link href="/formivarn">
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold">🦾 Formivarn</h2>
            <p className="text-sm text-gray-400">Hive-based insectoid civilization with massive reach and rigid caste systems.</p>
          </div>
        </Link>

        <Link href="/sorynari">
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold">🐾 Sorynari</h2>
            <p className="text-sm text-gray-400">Feline-primate hybrids with advanced tech and a peaceful philosophy.</p>
          </div>
        </Link>

        <Link href="/humans">
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold">👤 Humans</h2>
            <p className="text-sm text-gray-400">A rapidly advancing species, often underestimated by others.</p>
          </div>
        </Link>

        <Link href="/universeLore">
          <div className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition">
            <h2 className="text-xl font-semibold">🌌 Universal Lore</h2>
            <p className="text-sm text-gray-400">Explore hyperspace drives, galactic time systems, and travel mechanics.</p>
          </div>
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © Galactic Lore Network - All worlds observed. All truths recorded.
      </footer>
    </main>
  );
}

