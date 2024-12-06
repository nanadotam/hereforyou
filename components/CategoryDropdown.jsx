'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const categories = [
  { name: 'Your Partner', href: '/categories/partner' },
  { name: 'Your Friends', href: '/categories/friends' },
  { name: 'Your Family', href: '/categories/family' },
  { name: 'Yourself', href: '/categories/self' },
  { name: 'The Table', href: '/categories/table' },
];

export default function CategoryDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-playfair italic text-black hover:text-black/80 flex items-center gap-2"
      >
        Categories
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ▼
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 bg-white/90 backdrop-blur-sm rounded-md shadow-lg py-2 z-50"
          >
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="block px-4 py-2 font-playfair italic text-purple hover:bg-purple/10 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 