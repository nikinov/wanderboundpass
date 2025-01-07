import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let's Start Your Journey
          </h1>
          
          {/* Main Content */}
          <div className="space-y-8 text-lg leading-relaxed text-muted">
            <p>
              Ready to explore Morocco's hidden treasures? Whether you have questions
              about our tours or want to create a custom experience, we're here to help.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {/* Phone Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-accent/5 p-8 transition-all hover:bg-accent/10">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-accent/10 transition-all group-hover:scale-[2.5]"></div>
              <div className="relative space-y-4">
                <h2 className="text-2xl font-semibold">Call Us</h2>
                <p className="text-muted">Available Monday to Friday, 9am - 6pm (SGT)</p>
                <div className="space-y-3">
                  <a 
                    href="tel:+6580612581"
                    className="inline-flex items-center gap-3 text-lg font-medium text-accent hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Singapore: +65 8061 2581
                  </a>
                  <a 
                    href="tel:+16179639372"
                    className="inline-flex items-center gap-3 text-lg font-medium text-accent hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    US: +1 617 963 9372
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group relative overflow-hidden rounded-2xl bg-accent/5 p-8 transition-all hover:bg-accent/10">
              <div className="absolute right-0 top-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-accent/10 transition-all group-hover:scale-[2.5]"></div>
              <div className="relative space-y-4">
                <h2 className="text-2xl font-semibold">Email Us</h2>
                <p className="text-muted">We typically respond within 24 hours</p>
                <a 
                  href="mailto:info@wanderboundpass.com"
                  className="inline-flex items-center gap-3 text-lg font-medium text-accent hover:opacity-80 transition-opacity"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@wanderboundpass.com
                </a>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="pt-12 border-t border-foreground/10 mt-12">
            <h2 className="text-2xl font-semibold mb-4">Response Time</h2>
            <p className="text-muted">
              We typically respond within 24 hours during business days. For immediate 
              assistance, please don't hesitate to call us directly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 