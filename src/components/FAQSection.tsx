import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do I need an appointment before visiting?", a: "While walk-ins are welcome, we recommend booking an appointment to ensure you get the best possible care without waiting. You can book online, call us, or send a WhatsApp message." },
  { q: "What dental treatments do you offer?", a: "We offer a comprehensive range of dental services including checkups, root canal treatment, teeth cleaning, fillings, tooth extractions, cosmetic dentistry, restorative dentistry, endodontic treatment, smile consultations, and family dental care." },
  { q: "Are you open in the evening?", a: "Yes! We are open daily and our clinic remains open until 10:00 PM, making it convenient for working professionals and students to visit after hours." },
  { q: "Where is the clinic located?", a: "We are located near Alpha Square, opposite Girls H/S School, Commercial Area, Satellite Town, Bahawalpur 63100. Our new location offers excellent accessibility and parking." },
  { q: "How can I contact the clinic?", a: "You can call us at 0318 6379364, send a WhatsApp message to the same number, or fill out the appointment form on this website. Our team will respond promptly." },
];

const FAQSection = () => (
  <section className="py-16 md:py-24">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">FAQ</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card shadow-card px-5">
            <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
