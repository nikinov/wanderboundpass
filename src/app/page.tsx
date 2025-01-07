import Link from 'next/link';
import Image from 'next/image';
import Gallery from '../components/Gallery';

const homeGalleryImages = [
  {
    src: "/mosq_entrance.jpg",
    alt: "Hassan II Mosque",
    description: "The grand entrance of Hassan II Mosque in Casablanca"
  },
  {
    src: "/local_kitchen.jpg",
    alt: "Traditional Kitchen",
    description: "Learn authentic Moroccan cooking in local homes"
  },
  {
    src: "/desert.JPG",
    alt: "Sahara Desert",
    description: "The endless dunes of the Sahara Desert"
  },
  {
    src: "/mountain_town.jpg",
    alt: "Mountain Village",
    description: "Traditional villages nestled in the Atlas Mountains"
  },
  {
    src: "/local_spices.jpg",
    alt: "Spice Market",
    description: "Vibrant spice markets full of colors and aromas"
  },
  {
    src: "/traditional_outfit.JPG",
    alt: "Traditional Dress",
    description: "Experience Morocco's rich cultural heritage"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="fade-in space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Journey deeper.<br />Live richer.
          </h1>
          <p className="text-xl md:text-2xl text-muted mt-6">
            Uncharted Adventures. Unforgettable Stories.
          </p>
          <div className="pt-8">
            <Link 
              href="/about"
              className="inline-flex items-center px-8 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Discover More
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Glimpses of Morocco
          </h2>
          <p className="text-lg text-muted">
            From ancient medinas to Saharan dunes, discover the diverse landscapes and rich culture of Morocco.
          </p>
          <Gallery images={homeGalleryImages} compact />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 px-4 bg-accent/5">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Beyond the Ordinary – An Insider's Perspective
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            My five years in Morocco transformed me in ways I never expected. 
            Families welcomed me into their homes and hearts, helping me discover 
            a country beyond the tourist trail.
          </p>
          <Link 
            href="/about"
            className="inline-flex items-center text-accent hover:underline"
          >
            Read the full story →
          </Link>
        </div>
      </section>
    </div>
  );
}
