import Link from 'next/link';

export default function SpringTours() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Morocco Unveiled • 12 Days
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted">
            <p>
              Journey through Morocco's celebrated places at a thoughtful pace, 
              with time to truly absorb each moment. While we visit iconic sites, 
              we step away from rushed tourist routines—lingering in morning markets, 
              joining families for lunch, or pausing for sunset tea in hidden courtyards.
            </p>
            
            <p>
              Perfect for first-time visitors who want to experience Morocco's 
              highlights while connecting with its soul.
            </p>
          </div>

          <div className="pt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Book This Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 