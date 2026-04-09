import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Muhammad Ali", text: "Best dental clinic in Bahawalpur! Dr Chema is highly professional and made my root canal treatment completely painless. The clinic is very clean and modern.", rating: 5 },
  { name: "Fatima Khan", text: "Visited with my family for dental checkups. The staff is welcoming and Dr Chema explained everything in detail. Highly recommended for anyone looking for quality dental care.", rating: 5 },
  { name: "Ahmed Raza", text: "I was very nervous about my tooth extraction but Dr Chema made me feel comfortable. The new clinic is beautiful and well-equipped. Truly a specialist!", rating: 5 },
  { name: "Ayesha Bibi", text: "Excellent cosmetic dentistry work. My smile has completely transformed! Dr Chema is patient, skilled, and genuinely cares about his patients. Five stars!", rating: 5 },
  { name: "Usman Tariq", text: "The most hygienic and modern dental clinic I have seen in Bahawalpur. Dr Chema's expertise as an FCPS specialist really shows in the quality of treatment.", rating: 5 },
  { name: "Sana Iqbal", text: "Amazing experience! Got my teeth cleaned and scaled. The clinic environment is so comfortable and Dr Chema is very gentle. Will definitely come back.", rating: 4 },
];

const ReviewsSection = () => (
  <section id="reviews" className="py-16 md:py-24">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Patient Reviews</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          What Our Patients Say
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-2xl font-bold text-foreground">4.9</span>
          <span className="text-muted-foreground">/ 5 from 65 reviews</span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow">
            <Quote className="w-8 h-8 text-primary/20 mb-3" />
            <p className="text-foreground text-sm leading-relaxed mb-4">{r.text}</p>
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                  {r.name.charAt(0)}
                </div>
                <span className="font-medium text-foreground text-sm">{r.name}</span>
              </div>
              <div className="flex">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;
