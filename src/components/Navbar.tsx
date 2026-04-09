'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2 shadow-md'
        : 'py-4 bg-white/80 dark:bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-orange-600 dark:text-orange-500">Ghalyoun<span className="text-gray-900 dark:text-white">Pack</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-800 hover:text-orange-600 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button> */}

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-orange-500 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full text-center transition duration-300 inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
