'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const changelogData = [
  {
    version: "1.2.0",
    date: "December 2024",
    changes: [
      "Added 'Intimacy with God' - a new category designed for spiritual reflection and deepening your faith journey",
      "Expanded question library to over 360 thoughtfully crafted prompts across all categories",
      "Enhanced existing categories with more depth-focused questions",
      "Added this changelog to keep you informed of new features and improvements"
    ]
  }
];

const usageExamples = [
  {
    title: "Personal Reflection",
    description: "Use the 'Yourself' category during your morning routine for daily reflection.",
    color: "var(--purple)"
  },
  {
    title: "Date Night",
    description: "Explore the 'Your Partner' category to deepen your connection.",
    color: "var(--pale-blue)"
  },
  {
    title: "Spiritual Growth",
    description: "Journey through 'Intimacy with God' for meaningful spiritual conversations and biblical reflection.",
    color: "var(--deep-rose)"
  }
];

export default function ChangelogModal() {
  const [mounted, setMounted] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    setMounted(true);
    const seen = localStorage.getItem('hasSeenChangelog');
    setShouldShow(!seen);
  }, []);

  const handleClose = () => {
    setShouldShow(false);
    localStorage.setItem('hasSeenChangelog', 'true');
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!mounted) {
    return null;
  }

  const slides = [
    {
      title: "What's New",
      content: (
        <div className="space-y-4">
          {changelogData.map((version) => (
            <div key={version.version} className="space-y-2">
              <h3 className="font-playfair italic text-xl">Version {version.version}</h3>
              <p className="text-sm text-gray-500">{version.date}</p>
              <ul className="list-disc list-inside space-y-1">
                {version.changes.map((change, index) => (
                  <li key={index} className="text-gray-700">{change}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
    },
    {
      title: "How to Use",
      content: (
        <div className="grid gap-4">
          {usageExamples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg"
              style={{ backgroundColor: example.color + '10' }}
            >
              <h3 className="font-playfair italic text-xl mb-2">{example.title}</h3>
              <p className="text-gray-700">{example.description}</p>
            </motion.div>
          ))}
        </div>
      )
    }
  ];

  return (
    <Dialog open={shouldShow} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto w-[95%] p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl text-center">
            {slides[currentSlide].title}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            {currentSlide === 0 
              ? "Check out what's new in this update"
              : "Learn how to make the most of Here for You"
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {slides[currentSlide].content}
        </div>

        <div className="flex justify-between mt-6 gap-4">
          <button
            onClick={handleClose}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full 
                     font-playfair italic text-gray-800 transition-colors text-sm md:text-base"
          >
            Skip
          </button>
          <button
            onClick={() => {
              if (currentSlide === slides.length - 1) {
                handleClose();
              } else {
                setCurrentSlide(current => current + 1);
              }
            }}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-full 
                     font-playfair italic text-gray-800 transition-colors text-sm md:text-base"
          >
            {currentSlide === slides.length - 1 ? 'Start' : 'Next'}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 