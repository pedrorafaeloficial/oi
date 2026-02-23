'use client';

import Link from 'next/link';
import { ShoppingBag, Menu, Search, User } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 -ml-2 text-stone-600 hover:text-stone-900"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none">
            <Link href="/" className="font-serif text-2xl tracking-tighter font-bold text-stone-900">
              LUMINA.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            {['Novidades', 'Coleção', 'Acessórios', 'Editorial'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-wide"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden md:block p-2 text-stone-600 hover:text-stone-900 transition-colors">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-0.5 bg-black text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {['Novidades', 'Coleção', 'Acessórios', 'Editorial', 'Minha Conta'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-3 py-3 text-base font-medium text-stone-900 hover:bg-stone-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
