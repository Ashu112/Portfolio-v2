import { Moon } from 'lucide-react';
import Link from 'next/link';

type NavLinkType = {
  name: string;
  href: string;
}[];

const navLink: NavLinkType = [
  { name: 'About', href: '/' },
  { name: 'Experience', href: '/' },
  { name: 'Projects', href: '/' },
  { name: 'Education', href: '/' },
  { name: 'Skills', href: '/' },
  { name: 'Contact', href: '/' },
];

export default function Header() {
  return (
    <header className="py-5">
      <nav className="section-container flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="text-2xl font-bold">
          AK
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-1">
          {navLink.map((n, i) => (
            <li key={i} className="px-4 py-2">
              <Link href={n.href} className="text-sm font-medium">
                {n.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle*/}
        <button aria-label="Toggle dark mode">
          <Moon />
        </button>
      </nav>
    </header>
  );
}
