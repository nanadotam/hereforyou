'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="question-card" style={{ backgroundColor: 'var(--purple)' }}>
        <div className="max-w-2xl mx-auto w-full bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="font-playfair italic text-3xl text-gray-800 text-center mb-8">
              About Here for You
            </h1>
            
            <div className="space-y-4 text-gray-600 text-center">
              <p>
                Here for You was born from a simple yet profound desire: my girlfriend's wish to know me on a deeper level. 
                This journey of creating meaningful conversations has evolved into a tool that helps couples, friends, 
                families, and individuals foster deeper connections through thoughtful questions and shared moments.
              </p>
              
              <p>
                What started as a personal project has grown into a space where people can explore relationships, 
                self-discovery, and spiritual growth through carefully crafted questions that encourage 
                vulnerability and understanding.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-8">
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/nanadotam" 
                  target="_blank"
                  className="text-purple hover:text-purple/80 transition-colors"
                >
                  GitHub
                </Link>
                <Link 
                  href="https://linkedin.com/in/nanaamoako" 
                  target="_blank"
                  className="text-purple hover:text-purple/80 transition-colors"
                >
                  LinkedIn
                </Link>
              </div>
              
              <p className="text-sm text-gray-500">
                © 2024 Here for You. Created by Nana Amoako
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
} 