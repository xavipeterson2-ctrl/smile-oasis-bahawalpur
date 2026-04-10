import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-16 md:py-24 bg-secondary/50">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Contact Us</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Get in Touch
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Phone", value: "0318 6379364", href: "tel:03186379364" },
            { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/923186379364" },
            { icon: MapPin, label: "Address", value: "Near Alpha Square, opposite Girls H/S School, Commercial Area, Satellite Town, Bahawalpur 63100" },
            { icon: Clock, label: "Hours", value: "Open Daily — Closes at 10:00 PM" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border shadow-card">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="flex gap-3">
            <a href="tel:03186379364"><Button className="gap-2"><Phone className="w-4 h-4" />Call Now</Button></a>
            <a href="https://wa.me/923186379364" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="gap-2"><MessageCircle className="w-4 h-4" />WhatsApp</Button>
            </a>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-2xl overflow-hidden border border-border shadow-card min-h-[320px]">
          <iframe
            title="Specialist Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.7890123456!2d71.68360000000001!3d29.395600000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90052a3e6d7b%3A0x7c8e3e7f1a2b3c4d!2sSatellite%20Town%2C%20Bahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 320 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
