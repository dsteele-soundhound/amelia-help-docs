'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface ThemeToggleProps {
  variant?: 'circle' | 'circle-blur' | 'gif';
  startPoint?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center';
  duration?: number;
}

export default function ThemeToggle({ 
  variant = 'circle',
  startPoint = 'center',
  duration = 700
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button 
        className="p-2 rounded-md transition-colors duration-200 hover:bg-primary-100 dark:hover:bg-primary-800"
        aria-label="Toggle theme"
      >
        <div className="w-5 h-5" />
      </button>
    );
  }

  const getStartPosition = () => {
    switch (startPoint) {
      case 'top-left':
        return { clipPath: 'circle(0% at 0% 0%)' };
      case 'top-right':
        return { clipPath: 'circle(0% at 100% 0%)' };
      case 'bottom-left':
        return { clipPath: 'circle(0% at 0% 100%)' };
      case 'bottom-right':
        return { clipPath: 'circle(0% at 100% 100%)' };
      case 'center':
      default:
        return { clipPath: 'circle(0% at 50% 50%)' };
    }
  };

  const getEndPosition = () => {
    const endClip = startPoint === 'center' 
      ? 'circle(150% at 50% 50%)'
      : 'circle(150% at 50% 50%)';
    return { clipPath: endClip };
  };

  const toggleTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    // Check if View Transition API is supported
    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    // Use View Transition API for smooth animation
    const transition = document.startViewTransition(() => {
      setTheme(newTheme);
    });

    try {
      await transition.ready;
      
      // Apply custom animation based on variant
      if (variant === 'circle' || variant === 'circle-blur') {
        const root = document.documentElement;
        const startPos = getStartPosition();
        const endPos = getEndPosition();
        
        // Set initial state
        root.style.setProperty('--theme-transition-start', startPos.clipPath);
        root.style.setProperty('--theme-transition-end', endPos.clipPath);
        root.style.setProperty('--theme-transition-duration', `${duration}ms`);
        
        // Apply animation class
        root.classList.add(`theme-transition-${variant}`);
        
        // Clean up after animation
        setTimeout(() => {
          root.classList.remove(`theme-transition-${variant}`);
        }, duration);
      }
    } catch {
      // Fallback if transition fails
      setTheme(newTheme);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-md transition-colors duration-200 hover:bg-primary-100 dark:hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5">
        <SunIcon 
          className={`absolute inset-0 w-5 h-5 text-primary-600 dark:text-primary-400 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <MoonIcon 
          className={`absolute inset-0 w-5 h-5 text-primary-600 dark:text-primary-400 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}