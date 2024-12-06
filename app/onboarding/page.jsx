'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { categoryQuestions } from '@/app/data/categoryQuestions';
import PageTransition from '@/components/PageTransition';

export default function OnboardingPage() {
  const router = useRouter();
  const categories = Object.entries(categoryQuestions);

  const handleCategorySelect = (categorySlug) => {
    router.push(`/categories/${categorySlug}`);
  };

  return (
    <PageTransition>
      <div className="question-card" style={{ backgroundColor: 'var(--purple)' }}>
        <div className="flex flex-col items-center gap-8 max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair italic text-4xl md:text-6xl text-white text-center mb-8"
          >
            Choose Your Journey
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
            {categories.map(([slug, category], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleCategorySelect(slug)}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg cursor-pointer
                          transform transition-all duration-200 hover:scale-105 hover:shadow-xl
                          flex flex-col items-center text-center gap-4"
                style={{ 
                  borderLeft: `4px solid ${category.backgroundColor}`,
                  minHeight: '280px'
                }}
              >
                <h2 className="font-playfair italic text-2xl text-gray-800">
                  {category.title}
                </h2>
                <p className="text-gray-600 font-playfair italic">
                  {category.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-2 rounded-full text-sm 
                                 font-playfair italic text-white"
                        style={{ backgroundColor: category.backgroundColor }}>
                    {category.questions.length} questions
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 