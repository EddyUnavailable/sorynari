import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white font-sans min-h-screen">
        <header className="bg-zinc-800 shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">Galactic Lore Archive</h1>
          <nav className="space-x-4">
            <Link href="/formivarn">
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-xl transition-all">Formivarn Lore</button>
            </Link>
            <Link href="/sorynari">
              <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-xl transition-all">Sorynari Lore</button>
            </Link>
          </nav>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}