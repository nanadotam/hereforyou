import Link from 'next/link';
import CategoryDropdown from './CategoryDropdown';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-purple/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-playfair text-2xl font-bold text-black hover:text-black/80">
            Here for You
          </Link>
          <div className="flex gap-6 items-center">
            <CategoryDropdown />
          
          </div>
        </div>
      </div>
    </nav>
  );
} 