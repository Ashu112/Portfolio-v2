'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  if (!resolvedTheme) return null;

  return (
    <button
      aria-label="Toggle dark mode"
      className="bg-muted rounded-full p-3"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark ? <Moon /> : <Sun />}
    </button>
  );
}
