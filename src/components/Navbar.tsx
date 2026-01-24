import Link from 'next/link';
import ThemeSwitch from '@/components/ThemeSwitch';

type NavLinkType = {
  name: string;
  href: string;
}[];

const navLink: NavLinkType = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="bg-background/10 sticky top-0 z-999 hidden py-3 backdrop-blur-md md:block">
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
        <ThemeSwitch />
      </nav>
    </header>
  );
}
