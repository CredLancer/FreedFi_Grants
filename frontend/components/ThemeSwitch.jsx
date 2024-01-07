'use client';

import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="flex items-center justify-center p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-opacity text-white"
      aria-label="Toggle Theme">
      {resolvedTheme === 'dark' ? (
        <FiSun className="text-yellow-400 text-lg" />
      ) : (
        <FiMoon className="text-blue-400 text-lg" />
      )}
    </button>
  );
}
