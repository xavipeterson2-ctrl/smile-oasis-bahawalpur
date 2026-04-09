import { Camera } from "lucide-react";
import heroImg from "@/assets/hero-dental.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import equipImg from "@/assets/clinic-equipment.jpg";
import receptionImg from "@/assets/gallery-reception.jpg";
import treatmentImg from "@/assets/gallery-treatment.jpg";
import smileImg from "@/assets/gallery-smile.jpg";
import xrayImg from "@/assets/gallery-xray.jpg";
import sterilizationImg from "@/assets/gallery-sterilization.jpg";

const images = [
  { src: heroImg, alt: "Modern dental treatment room" },
  { src: clinicImg, alt: "Comfortable waiting area" },
  { src: equipImg, alt: "Sterilized dental instruments" },
  { src: receptionImg, alt: "Clinic reception desk" },
  { src: treatmentImg, alt: "Dental treatment in progress" },
  { src: smileImg, alt: "Happy patient with beautiful smile" },
  { src: xrayImg, alt: "Digital X-ray diagnostic room" },
  { src: sterilizationImg, alt: "Sterilization and hygiene area" },
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
          <span className="text-sm">21+ Photos</span>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group">
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
