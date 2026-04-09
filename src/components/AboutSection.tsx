import { Award, GraduationCap, Stethoscope, MapPin } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";

const credentials = [
  { icon: GraduationCap, text: "BDS, FCPS — Nishtar Medical University, Multan" },
  { icon: Stethoscope, text: "Assistant Professor, Dept. of Restorative Dentistry & Endodontics" },
  { icon: Award, text: "First specialist dentist practicing in Bahawalpur" },
  { icon: MapPin, text: "Now at a brand-new, modern clinic in Satellite Town" },
];

const clinicFeatures = [
  "Modern, patient-friendly environment",
  "Improved ambiance & comfort",
  "Hygienic & sterilized setup",
  "Specialist-level treatment",
  "Family-friendly care",
  "State-of-the-art equipment",
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-secondary/50">
    <div className="container space-y-20">
      {/* About Doctor */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative mx-auto lg:mx-0 max-w-sm">
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img src={doctorImg} alt="Dr Ahmed Mukhtar Chema, Specialist Dentist Bahawalpur" width={800} height={1000} loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">About the Doctor</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Dr Ahmed Mukhtar Chema
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Dr Ahmed Mukhtar Chema is a highly qualified dental specialist with BDS and FCPS degrees from the prestigious Nishtar Medical University, Multan. Serving as an Assistant Professor in the Department of Restorative Dentistry and Endodontics, he brings academic excellence and clinical expertise to every patient interaction. He is proud to be the first specialist dentist practicing in Bahawalpur, delivering compassionate, expert dental care to the community.
          </p>
          <div className="space-y-3 pt-2">
            {credentials.map((c) => (
              <div key={c.text} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground text-sm font-medium pt-1.5">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Clinic */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-5">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">About the Clinic</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            A Modern, Comfortable Clinic
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Specialist Dental Clinic has recently shifted to a brand-new location offering much better ambiance, warmth, and a truly patient-friendly environment. Every detail is designed for your comfort — from the welcoming reception to the advanced treatment rooms.
          </p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            {clinicFeatures.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 mx-auto lg:mx-0 max-w-lg">
          <div className="rounded-2xl overflow-hidden shadow-card-hover">
            <img src={clinicImg} alt="Specialist Dental Clinic modern waiting area" width={800} height={600} loading="lazy" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
