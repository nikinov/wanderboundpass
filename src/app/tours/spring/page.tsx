import Link from 'next/link';
import Timeline from '@/components/Timeline';

const tourSchedule = [
  {
    day: "Day 1",
    title: "Casablanca",
    activities: [
      "Arrive in Casablanca and spend the night",
      "Evening stroll along Ain Diab Beach",
      "Visit the iconic Hassan II Mosque"
    ]
  },
  {
    day: "Day 2",
    title: "Rabat",
    activities: [
      "Travel to Rabat for a day visit",
      "Explore the Hassan Tower",
      "Visit Kasbah of Udayas"
    ]
  },
  {
    day: "Day 3-4",
    title: "Fez",
    activities: [
      "Spend two nights in Fez",
      "Discover the Fez Medina",
      "Enjoy local cultural experiences"
    ]
  },
  {
    day: "Day 5",
    title: "Chefchaouen",
    activities: [
      "Travel to Chefchaouen for one night",
      "Explore the blue-washed streets",
      "Visit the Kasbah Museum"
    ]
  },
  {
    day: "Day 6",
    title: "Errachidia",
    activities: [
      "Head to Errachidia for an overnight stay",
      "Visit the Ziz Valley"
    ]
  },
  {
    day: "Day 7-8",
    title: "Merzouga",
    activities: [
      "Spend two nights in Merzouga",
      "Experience a Sahara Desert adventure",
      "Camel trek and night in a desert camp"
    ]
  },
  {
    day: "Day 9",
    title: "Ouarzazate",
    activities: [
      "Travel to Ouarzazate for one night",
      "Visit Atlas Film Studios",
      "Explore Ait Benhaddou"
    ]
  },
  {
    day: "Day 10",
    title: "Marrakech",
    activities: [
      "Spend one night in Marrakech",
      "Explore the Jemaa el-Fnaa",
      "Discover the medina"
    ]
  },
  {
    day: "Day 11-12",
    title: "Essaouira",
    activities: [
      "Enjoy two nights in Essaouira",
      "Relax by the coast",
      "Explore the Essaouira Medina",
      "Traditional hammam experience",
      "Return to Casablanca for departure"
    ]
  }
];

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

          <div className="pt-12">
            <h2 className="text-3xl font-semibold mb-8">Your Journey</h2>
            <Timeline events={tourSchedule} />
          </div>

          <div className="pt-8 flex justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-accent text-background hover:opacity-90 transition-opacity"
            >
              Book This Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 