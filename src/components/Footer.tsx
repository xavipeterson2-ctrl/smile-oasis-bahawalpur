import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Appointment", href: "#appointment" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => (
  <footer className="bg-foreground text-background/80 py-12">
    <div className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div className="space-y-3">
          <h3 className="font-heading text-xl font-bold text-background">Specialist Dental Clinic</h3>
          <p className="text-sm">Dr Ahmed Mukhtar Chema — BDS, FCPS</p>
          <p className="text-sm">Expert dental care in Bahawalpur since day one.</p>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm hover:text-background transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-background mb-3">Contact Info</h4>
          <div className="flex items-center gap-2 text-sm"><Phone className="w-4 h-4 shrink-0" /> 0318 6379364</div>
          <div className="flex items-start gap-2 text-sm"><MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Near Alpha Square, Satellite Town, Bahawalpur 63100</div>
          <div className="flex items-center gap-2 text-sm"><Clock className="w-4 h-4 shrink-0" /> Open Daily — Closes 10 PM</div>
        </div>
        <div>
          <h4 className="font-semibold text-background mb-3">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Specialist Dental Clinic, Bahawalpur. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
