'use client';

import { categoryQuestions } from '@/app/data/categoryQuestions';
import PageTransition from '@/components/PageTransition';
import { useParams, useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';
import { useToast } from "@/hooks/use-toast";
import Link from 'next/link';

export default function CategoryQuestionPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (nextId) {
        router.push(`/categories/${params.category}/questions/${nextId}`);
        toast({
          title: "Next Question",
          description: "Swipe right to go back",
        });
      }
    },
    onSwipedRight: () => {
      if (prevId) {
        router.push(`/categories/${params.category}/questions/${prevId}`);
        toast({
          title: "Previous Question",
          description: "Swipe left to continue",
        });
      }
    },
  });

  const category = categoryQuestions[params.category];
  if (!category) {
    router.push('/');
    return null;
  }

  const questions = category.questions;
  const currentQuestion = questions.find(q => q.id === params.id);
  if (!currentQuestion) {
    router.push(`/categories/${params.category}`);
    return null;
  }

  const currentIndex = questions.findIndex(q => q.id === params.id);
  const nextId = currentIndex < questions.length - 1 ? questions[currentIndex + 1].id : questions[0].id;
  const prevId = currentIndex > 0 ? questions[currentIndex - 1].id : questions[questions.length - 1].id;

  return (
    <PageTransition>
      <div {...handlers} className="question-card" style={{ backgroundColor: category.backgroundColor }}>
        <div className="flex flex-col items-center gap-8 text-white">
          <Link 
            href={`/categories/${params.category}`}
            className="font-playfair italic text-xl hover:text-white/80 transition-colors"
          >
            {category.title}
          </Link>
          <span className="text-sm md:text-base uppercase tracking-wider">
            {currentQuestion.category}
          </span>
          <h2 className="question-text">
            {currentQuestion.question}
          </h2>
          <div className="flex gap-4 mt-8">
            <Link 
              href={`/categories/${params.category}/questions/${prevId}`} 
              className="nav-button text-black hover:text-black/80"
            >
              Previous
            </Link>
            <Link 
              href={`/categories/${params.category}/questions/${nextId}`} 
              className="nav-button text-black hover:text-black/80"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
