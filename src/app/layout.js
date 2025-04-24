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
            <a href="/" className="hover:text-purple-400">🏠 Home</a>
            <a href="/formivarn" className="hover:text-purple-400">🦾 Formivarn</a>
            <a href="/sorynari" className="hover:text-purple-400">🐾 Sorynari</a>
            <a href="/humans" className="hover:text-purple-400">👤 Humans</a>
            <a href="/universeLore" className="hover:text-purple-400">🌌 Universal Lore</a>
            <a href="/hyperspaceNotes" className="hover:text-purple-400">🌌 Todo</a>
            <a href="/storyIdeas" className="hover:text-purple-400">🌌 Story Ideas</a>
            <a href="/kalariLore" className="hover:text-purple-400">🌌 Kalari</a>
            <a href="/telnariLore" className="hover:text-purple-400">🌌 Telnari</a>
            <a href="/futureRaces" className="hover:text-purple-400">🌌 Future Races</a>
          </nav>
        </header>

        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
