'use client';

import { questions } from '@/app/data/questions';
import { ToastProvider, Toast } from "@/components/ui/toast";
import PageTransition from '@/components/PageTransition';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useSwipeable } from 'react-swipeable';
import { useToast } from "@/hooks/use-toast";

export default function QuestionPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const currentId = parseInt(params.id);
  const question = questions.find(q => q.id === currentId);
  
  const nextId = currentId < questions.length ? currentId + 1 : 1;
  const prevId = currentId > 1 ? currentId - 1 : questions.length;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      router.push(`/questions/${nextId}`);
      toast({
        title: "Next Question",
        description: "Swipe right to go back",
      });
    },
    onSwipedRight: () => {
      router.push(`/questions/${prevId}`);
      toast({
        title: "Previous Question",
        description: "Swipe left to continue",
      });
    },
  });

  if (!question) return null;

  return (
    <PageTransition>
      <div {...handlers} className="question-card" style={{ backgroundColor: question.backgroundColor }}>
        <div className="flex flex-col items-center gap-8 text-white">
          <span className="text-sm md:text-base uppercase tracking-wider">
            {question.category}
          </span>
          <h2 className="question-text">
            {question.question}
          </h2>
          <div className="flex gap-4 mt-8">
            <Link href={`/questions/${prevId}`} className="nav-button text-black hover:text-black/80">
              Previous
            </Link>
            <Link href={`/questions/${nextId}`} className="nav-button text-black hover:text-black/80">
              Next
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
} 