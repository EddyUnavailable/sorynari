import Link from 'next/link'

export const metadata = {
  title: 'Galactic Lore Archive',
  description: 'A universe of stories and civilizations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <header className="p-4 border-b border-gray-700 bg-gray-900">
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-purple-400">🏠 Home</Link>
            <Link href="/formivarn" className="hover:text-purple-400">🦾 Formivarn</Link>
            <Link href="/sorynari" className="hover:text-purple-400">🐾 Sorynari</Link>
            <Link href="/humans" className="hover:text-purple-400">👤 Humans</Link>
            <Link href="/universeLore" className="hover:text-purple-400">🌌 Universal Lore</Link>
            <Link href="/hyperspaceNotes" className="hover:text-purple-400">🌌 Todo</Link>
            <Link href="/storyIdeas" className="hover:text-purple-400">🌌 Story Ideas</Link>
            <Link href="/kalariLore" className="hover:text-purple-400">🌌 Kalari</Link>
            <Link href="/telnariLore" className="hover:text-purple-400">🌌 Telnari</Link>
            <Link href="/futureRaces" className="hover:text-purple-400">🌌 Future Races</Link>
            <Link href="/storyRules" className="hover:text-purple-400">🌌 Story Ruless</Link>
          </nav>
        </header>

        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
