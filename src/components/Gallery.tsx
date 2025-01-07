import Image from 'next/image';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
    description?: string;
  }[];
  compact?: boolean;
}

export default function Gallery({ images, compact = false }: GalleryProps) {
  return (
    <div className={`grid ${compact ? 'grid-cols-2 md:grid-cols-3 gap-4' : 'grid-cols-1 md:grid-cols-2 gap-8'}`}>
      {images.map((image, index) => (
        <div key={index} className="space-y-3">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {image.description && (
            <p className="text-muted text-sm">{image.description}</p>
          )}
        </div>
      ))}
    </div>
  );
} 