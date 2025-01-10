import React from 'react';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-100 p-4">
          <nav className="flex gap-4">
            {/* Navigasi ke halaman destination */}
            <Link href="/destination" className="text-blue-500">
              Top Destination
            </Link>
            {/* Navigasi ke halaman pricing */}
            <Link href="/add" className="text-blue-500">
              Pricing
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
