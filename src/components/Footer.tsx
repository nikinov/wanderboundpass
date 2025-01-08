import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-auto">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-muted">
              <p>Singapore: +65 8061 2581</p>
              <p>US: +1 617 963 9372</p>
              <p>info@wanderboundpass.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tours</h3>
            <div className="space-y-2">
              <Link href="/tours/spring" className="block text-muted hover:text-accent">
                Spring Tour
              </Link>
              <Link href="/tours/fall" className="block text-muted hover:text-accent">
                Fall Tour
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-muted hover:text-accent">
                About
              </Link>
              <Link href="/contact" className="block text-muted hover:text-accent">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center text-sm text-muted mt-8 pt-8 border-t border-foreground/10">
          © {new Date().getFullYear()} Wanderbound Pass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}