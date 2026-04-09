import { Award, GraduationCap, Building2, Heart, ThumbsUp, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Specialist Dental Care", text: "FCPS-qualified specialist level treatment" },
  { icon: GraduationCap, title: "Academic Excellence", text: "Assistant Professor at a leading university" },
  { icon: Building2, title: "Modern Clinic Setup", text: "Newly renovated, state-of-the-art facility" },
  { icon: Heart, title: "Patient Comfort", text: "Warm, friendly, and stress-free experience" },
  { icon: ThumbsUp, title: "Trusted in Bahawalpur", text: "4.9-star rating with 65+ reviews" },
  { icon: MapPin, title: "Convenient Location", text: "Easily accessible in Satellite Town" },
  { icon: Award, title: "First Specialist", text: "Pioneer specialist dentist in the city" },
  { icon: Stethoscope, title: "Full-Range Services", text: "From checkups to advanced endodontics" },
];

const WhyChooseUsSection = () => (
  <section className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Why Choose Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted Dental Excellence
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((r) => (
          <div key={r.title} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
