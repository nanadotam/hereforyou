import Link from 'next/link';

export default function Home() {
  return (
    <div className="question-card" style={{ backgroundColor: 'var(--purple)' }}>
      <div className="flex flex-col items-center gap-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold text-center font-playfair">
          Here for You
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-md font-playfair italic">
          A space for meaningful conversations
        </p>
        <Link href="/onboarding" className="nav-button text-black hover:text-black/80 font-playfair italic">
          Begin Journey
        </Link>
      </div>
    </div>
  );
}
