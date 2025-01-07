import Link from 'next/link';
import Image from 'next/image';
import Gallery from '../../components/Gallery';

const aboutGalleryImages = [
  {
    src: "/desert_person.JPG",
    alt: "Desert Guide",
    description: "Local guides sharing their deep connection with the Sahara"
  },
  {
    src: "/waterfall.jpg",
    alt: "Atlas Waterfall",
    description: "Hidden waterfalls in the High Atlas Mountains"
  },
  {
    src: "/meat_dish.JPG",
    alt: "Traditional Tagine",
    description: "Savor authentic Moroccan cuisine"
  },
  {
    src: "/mosq_columns.jpg",
    alt: "Mosque Architecture",
    description: "Stunning Islamic architecture and detailed craftsmanship"
  },
  {
    src: "/waterfall.jpg",
    alt: "Mountain Waterfall",
    description: "Natural wonders tucked away in Morocco's valleys"
  },
  {
    src: "/stone_beach.jpg",
    alt: "Coastal Landscape",
    description: "Morocco's dramatic Atlantic coastline"
  },
  {
    src: "/town_view.JPG",
    alt: "City Vista",
    description: "Panoramic views of ancient Moroccan cities"
  },
  {
    src: "/local_disert.jpg",
    alt: "Desert Experience",
    description: "Authentic desert experiences beyond the tourist trail"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Beyond the Ordinary – An Insider's Perspective
          </h1>
          
          {/* Main Content */}
          <div className="space-y-8 text-lg leading-relaxed text-muted">
            <p>
              My five years in Morocco transformed me in ways I never expected. 
              Families welcomed me into their homes and hearts, helping me discover 
              a country beyond the tourist trail. Sharing meals, celebrations, and 
              adventures revealed Morocco's true heart—one filled with generosity 
              and kindness.
            </p>
            
            <p>
              From Berber homes high in the Atlas Mountains to Sahara sunsets with 
              guides who became family, these deep connections unlock experiences 
              you won't find elsewhere: hidden riads, family workshops, and places 
              where traditions still shape daily life.
            </p>
            
            <p>
              Whether you're drawn to cultural tours through ancient medinas, 
              culinary adventures in local homes, or desert expeditions under 
              starlit skies, let me show you the Morocco I've come to know and love.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="pt-16">
            <h2 className="text-3xl font-semibold mb-8">Morocco Through My Lens</h2>
            <Gallery images={aboutGalleryImages} />
          </div>

          {/* CTA Section */}
          <div className="pt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
            >
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 