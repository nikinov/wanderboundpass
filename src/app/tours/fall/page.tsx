import Link from 'next/link';

export default function FallTours() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Artisan's Path • 15 Days
          </h1>
          
          <div className="space-y-8 text-lg leading-relaxed text-muted">
            <p>
              A deeper immersion for those drawn to Morocco's crafts and traditions. 
              Learn traditional Berber patterns as you weave rugs alongside master 
              artisans, craft ceramics in ancient medina workshops, and discover 
              the spice-scented secrets of tagine cooking with local families.
            </p>
            
            <p>
              Spend unhurried days discovering stories behind these traditions while 
              bringing home pieces crafted by your own hands.
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