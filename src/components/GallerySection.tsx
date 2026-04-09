import { Camera } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.webp";

const images = [
  { src: gallery1, alt: "Dental restoration result - front view" },
  { src: gallery2, alt: "Dental treatment result - side view" },
  { src: gallery3, alt: "Restorative dentistry outcome" },
  { src: gallery4, alt: "Before treatment - dental case" },
  { src: gallery5, alt: "Rubber dam isolation technique" },
  { src: gallery6, alt: "Dental crown and bridge work" },
  { src: gallery7, alt: "Treatment cases collage - before and after" },
];

const GallerySection = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Clinic Gallery</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Take a Look Inside
        </h2>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Camera className="w-4 h-4" />
          <span className="text-sm">Our Treatment Results</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className={`rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group ${i === 6 ? "col-span-2" : ""}`}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
