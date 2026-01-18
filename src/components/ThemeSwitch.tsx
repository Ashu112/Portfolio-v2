'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setMounted(true));

  if (!mounted) return null;

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
