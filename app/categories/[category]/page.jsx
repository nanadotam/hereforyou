'use client';

import { categoryQuestions } from '@/app/data/categoryQuestions';
import PageTransition from '@/components/PageTransition';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const category = categoryQuestions[params.category];
  const [showCards, setShowCards] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(() => {
    const randomIndex = Math.floor(Math.random() * category?.questions.length);
    return category?.questions[randomIndex];
  });

  if (!category) {
    router.push('/');
    return null;
  }

  const handleCardClick = (questionId) => {
    const question = category.questions.find(q => q.id === questionId);
    setCurrentQuestion(question);
    setShowCards(false);
  };

  const handleNextQuestion = () => {
    const currentIndex = category.questions.findIndex(q => q.id === currentQuestion.id);
    const nextIndex = (currentIndex + 1) % category.questions.length;
    setCurrentQuestion(category.questions[nextIndex]);
  };

  const handlePreviousQuestion = () => {
    const currentIndex = category.questions.findIndex(q => q.id === currentQuestion.id);
    const prevIndex = currentIndex === 0 ? category.questions.length - 1 : currentIndex - 1;
    setCurrentQuestion(category.questions[prevIndex]);
  };

  return (
    <PageTransition>
      <div 
        className="min-h-screen w-full py-20 px-4 relative flex flex-col"
        style={{ backgroundColor: category.backgroundColor }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair italic text-4xl md:text-6xl text-white text-center mb-4"
        >
          {category.title}
        </motion.h1>

        {!showCards ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg mb-8 max-w-2xl w-full"
            >
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-4 text-center">
                {currentQuestion.category}
              </p>
              <p className="font-playfair italic text-3xl text-gray-800 text-center mb-8">
                {currentQuestion.question}
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handlePreviousQuestion}
                  className="px-6 py-3 bg-black/10 hover:bg-black/20 rounded-full 
                           font-playfair italic text-gray-800 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-black/10 hover:bg-black/20 rounded-full 
                           font-playfair italic text-gray-800 transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto w-full">
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
        )}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowCards(!showCards)}
          className="fixed bottom-8 right-8 px-6 py-3 bg-white rounded-full 
                     font-playfair italic text-gray-800 transition-colors hover:bg-white/90
                     shadow-lg"
        >
          {showCards ? 'Show Current Question' : 'View All Questions'}
        </motion.button>
      </div>
    </PageTransition>
  );
} 