import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays } from "lucide-react";
import { toast } from "sonner";

const treatments = [
  "Dental Checkup",
  "Root Canal Treatment",
  "Teeth Cleaning & Scaling",
  "Fillings",
  "Tooth Extraction",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Endodontic Treatment",
  "Smile Consultation",
  "Family Dental Care",
  "Other",
];

const AppointmentSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      if (response.ok) {
        toast.success("Appointment request sent! We will contact you shortly.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      toast.error("Network error. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="appointment" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Book Appointment</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Schedule Your Visit
          </h2>
          <p className="text-muted-foreground">
            Fill in the form below and our team will contact you shortly to confirm your appointment.
          </p>
        </div>
        <form name="appointment" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-card border border-border shadow-card space-y-5">
          <input type="hidden" name="form-name" value="appointment" />
          <p style={{ display: "none" }}>
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input placeholder="Your Name" required name="name" maxLength={100} />
            <Input placeholder="Phone Number" required name="phone" type="tel" maxLength={20} />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input type="date" required name="date" />
            <Select name="time">
              <SelectTrigger>
                <SelectValue placeholder="Preferred Time" />
              </SelectTrigger>
              <SelectContent>
                {["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Select name="treatment">
            <SelectTrigger>
              <SelectValue placeholder="Treatment Needed" />
            </SelectTrigger>
            <SelectContent>
              {treatments.map((t) => (
                <SelectItem key={t} value={t}>{t}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea placeholder="Any message or special request..." name="message" rows={3} maxLength={500} />
          <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
            <CalendarDays className="w-4 h-4" />
            {loading ? "Submitting..." : "Request Appointment"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentSection;
