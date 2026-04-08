import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Stethoscope, Lock, Bus, ShieldCheck, Wifi, BookOpen } from "lucide-react";

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const facilities = [
  { icon: Stethoscope, title: "Student Health Tracking", desc: "Every student has a personal health card with regular check-ups, BMI tracking, and vision/dental screenings. Parents receive periodic health reports.", highlight: true },
  { icon: Lock, title: "Personal Lockers", desc: "No heavy bags! Every student gets a personal locker to safely store books and belongings. We believe in healthy spines and happy children.", highlight: true },
  { icon: Bus, title: "Transport Facility", desc: "Safe, GPS-tracked school buses covering all major areas of Miryalaguda. Experienced drivers and attendants ensure door-to-door safety." },
  { icon: ShieldCheck, title: "Safe Campus", desc: "CCTV surveillance, trained security staff, visitor management system, and child-safe infrastructure throughout the campus." },
  { icon: Wifi, title: "Smart Classrooms", desc: "Digital learning aids, projectors, and interactive boards make lessons engaging and effective for the modern learner." },
  { icon: BookOpen, title: "Library & Reading Room", desc: "A well-stocked library with thousands of books across genres, plus a quiet reading room to foster a love for reading." },
];

export default function Facilities() {
  return (
    <main className="pt-28">
      <SEO title="Facilities" description="World-class school facilities at A.S.R Dhrona — smart classrooms, student health cards, personal lockers, GPS-tracked transport, library & safe campus in Miryalaguda." path="/facilities" />
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Facilities</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">World-class infrastructure designed for safety, comfort, and learning.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Infrastructure" title="Built for Excellence" description="Every facility at A.S.R Dhrona is designed with your child's safety and growth in mind." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <RevealDiv key={f.title} delay={i * 80}>
                <div className={cn(
                  "rounded-xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full",
                  f.highlight ? "bg-card border-primary/20 ring-1 ring-primary/10" : "bg-card border-border/50"
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    f.highlight ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                  )}>
                    <f.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  {f.highlight && (
                    <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                      ✦ Unique to A.S.R Dhrona
                    </span>
                  )}
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
