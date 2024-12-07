import { Playfair_Display, Open_Sans } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/Navbar';
import "./globals.css";
import ChangelogModal from "@/components/ChangelogModal";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "Here for You",
  description: "A space for meaningful conversations",
  openGraph: {
    title: 'Here for You',
    description: 'A space for meaningful conversations',
    url: 'https://hereforyou-love.vercel.app/',
    siteName: 'Here for You',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Here for You',
    description: 'A space for meaningful conversations',
    creator: 'github.com/nanadotam',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${openSans.variable}`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Toaster />
        <ChangelogModal />
      </body>
    </html>
  );
}
