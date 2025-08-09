'use client';

import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Printer Service
        </Link>

        {/* Nav Links */}
        <nav className="space-x-6">
          <Link href="/printRequest" className="hover:underline">
            Request Print
          </Link>
          <Link href="/admin" className="hover:underline">
            Admin
          </Link>
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
