'use client';

import { categoryQuestions } from '@/app/data/categoryQuestions';
import PageTransition from '@/components/PageTransition';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = categoryQuestions[params.category];

  if (!category) {
    router.push('/');
    return null;
  }

  const handleCardClick = (questionId) => {
    router.push(`/categories/${params.category}/questions/${questionId}`);
  };

  return (
    <PageTransition>
      <div 
        className="min-h-screen w-full py-20 px-4"
        style={{ backgroundColor: category.backgroundColor }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-playfair italic text-4xl md:text-6xl text-white text-center mb-4"
          >
            {category.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-center mb-12 font-playfair italic text-xl"
          >
            {category.description}
          </motion.p>
          
          <div className="grid gap-6 md:grid-cols-2">
            {category.questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => handleCardClick(question.id)}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg cursor-pointer 
                          transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  {question.category}
                </p>
                <p className="font-playfair italic text-xl text-gray-800">
                  {question.question}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 