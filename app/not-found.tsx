"use client";
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-lg">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent mb-4">404</p>
          <h1 className="text-5xl font-display font-bold text-primary mb-4">Page Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
