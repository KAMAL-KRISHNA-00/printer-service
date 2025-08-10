'use client';

import Link from 'next/link';
import { FiPrinter, FiHome, FiUpload, FiClock, FiSettings } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '#', icon: FiHome, label: 'Home' },
  { href: '/printRequest', icon: FiUpload, label: 'Upload' },
  { href: '#', icon: FiClock, label: 'History' },
  { href: '#', icon: FiSettings, label: 'Settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-700 bg-slate-800/50 sm:flex p-4">
      <div className="flex h-[60px] items-center px-2">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <FiPrinter className="h-6 w-6 text-cyan-400" />
          <span>Dashboard</span>
        </Link>
      </div>
      <nav className="flex-1 flex flex-col gap-2 mt-8">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={pathname === item.href ? 'secondary' : 'ghost'}
            className={`justify-start text-base py-6 ${pathname === item.href ? 'bg-cyan-500/10 text-cyan-400' : 'hover:bg-slate-700/50'}`}
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Link>
          </Button>
        ))}
        <div className="mt-auto flex items-center gap-4 p-4 rounded-lg bg-slate-700/50">
           <img src="https://placehold.co/40x40/cyan/white?text=A" className="rounded-full" alt="User Avatar" />
           <div>
              <p className="font-semibold">Admin</p>
              <p className="text-xs text-slate-400">admin@example.com</p>
           </div>
        </div>
      </nav>
    </aside>
  );
}
