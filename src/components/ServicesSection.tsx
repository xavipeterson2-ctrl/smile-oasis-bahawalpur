import { Search, Cog, Sparkles, Wrench, Scissors, SmilePlus, Heart, ShieldCheck, Scan, Users } from "lucide-react";

const services = [
  { icon: Search, title: "Dental Checkup", desc: "Comprehensive oral examination and early detection of dental issues." },
  { icon: Cog, title: "Root Canal Treatment", desc: "Expert endodontic treatment to save and restore damaged teeth." },
  { icon: Sparkles, title: "Teeth Cleaning & Scaling", desc: "Professional cleaning for healthier gums and brighter teeth." },
  { icon: Wrench, title: "Fillings", desc: "Tooth-colored restorations for cavities and damaged teeth." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Safe, gentle extractions with patient comfort as our priority." },
  { icon: SmilePlus, title: "Cosmetic Dentistry", desc: "Transform your smile with modern cosmetic dental solutions." },
  { icon: Heart, title: "Restorative Dentistry", desc: "Rebuild and restore teeth to their natural form and function." },
  { icon: ShieldCheck, title: "Endodontic Treatment", desc: "Specialist-level root canal and pulp therapy treatments." },
  { icon: Scan, title: "Smile Consultation", desc: "Personalized smile analysis and treatment planning." },
  { icon: Users, title: "Family Dental Care", desc: "Complete dental care for every member of your family." },
];

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Comprehensive Dental Care
        </h2>
        <p className="text-muted-foreground text-lg">
          From routine checkups to specialist endodontic treatment, we offer a full range of dental services under one roof.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
