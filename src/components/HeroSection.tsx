import { Button } from "@/components/ui/button";
import { Star, Phone, MessageCircle, ShieldCheck, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section id="home" className="relative pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-accent via-background to-secondary opacity-80" />
    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            Bahawalpur's First Specialist Dentist
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Expert Dental Care in <span className="text-gradient">Bahawalpur</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
            Specialist dental treatment with trust, comfort, and modern care by Dr Ahmed Mukhtar Chema — BDS, FCPS.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4">
            {[
              { icon: Star, label: "4.9 Star Rated" },
              { icon: Users, label: "65+ Reviews" },
              { icon: Award, label: "FCPS Specialist" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background shadow-card text-sm font-medium text-foreground">
                <b.icon className="w-4 h-4 text-primary" />
                {b.label}
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#appointment">
              <Button size="lg" className="gap-2 text-base">Book Appointment</Button>
            </a>
            <a href="tel:03186379364">
              <Button size="lg" variant="outline" className="gap-2 text-base">
                <Phone className="w-4 h-4" /> Call Now
              </Button>
            </a>
            <a href="https://wa.me/923186379364" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="gap-2 text-base">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img src={heroImage} alt="Modern dental clinic interior at Specialist Dental Clinic Bahawalpur" width={1920} height={1080} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-background rounded-xl shadow-card p-4 flex items-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-bold text-foreground">4.9/5</div>
              <div className="text-xs text-muted-foreground">Google Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
