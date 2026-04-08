import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero-school.jpg";
import {
  Heart, Brain, Dumbbell, BookOpen, Trophy, Lock, Stethoscope,
  GraduationCap, Globe, Users, Lightbulb, BookOpenCheck, Sparkles,
  Calculator, Award, ChevronRight, Star, Quote
} from "lucide-react";

const highlights = [
  { icon: Heart, title: "Yoga & Meditation", desc: "Daily mindfulness and yoga practice for balanced growth" },
  { icon: Brain, title: "Chess & Dhadi", desc: "Strategic thinking through traditional and modern games" },
  { icon: Dumbbell, title: "Karra Saamu", desc: "Traditional Indian martial arts for discipline and fitness" },
  { icon: BookOpen, title: "Shlokas & Padyalu", desc: "Cultural learning through verses and poetry" },
  { icon: Stethoscope, title: "Student Health Card", desc: "Regular health monitoring for every child" },
  { icon: Lock, title: "Student Lockers", desc: "No heavy bags — safe personal storage" },
  { icon: Trophy, title: "Sports Excellence", desc: "Kabaddi, Volleyball, Kho-Kho & more" },
];

const whyChoose = [
  { icon: Globe, title: "Educated NRI Management", desc: "Globally experienced leadership bringing world-class vision" },
  { icon: Users, title: "Expert Faculty Across India", desc: "Handpicked educators from top institutions" },
  { icon: GraduationCap, title: "IIT-JEE / NEET Foundation", desc: "Competitive exam preparation from early grades" },
  { icon: BookOpenCheck, title: "Masters English Program", desc: "MEP — fluency-focused English curriculum" },
  { icon: Sparkles, title: "Memory Boost Meditation", desc: "MBM — scientifically designed memory techniques" },
  { icon: Calculator, title: "Mathematics Playground", desc: "MPG — hands-on, concept-driven maths learning" },
  { icon: Award, title: "Readers Win Rewards", desc: "Incentivized reading programs to build lifelong habits" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Parent of Class V Student", text: "My daughter has blossomed both academically and culturally. The yoga and meditation sessions have made her more focused and confident.", rating: 5 },
  { name: "Rajesh Kumar", role: "Parent of Class III Student", text: "The IIT-JEE foundation program sets this school apart. My son's problem-solving skills have improved dramatically.", rating: 5 },
  { name: "Sunitha Reddy", role: "Parent of Class VII Student", text: "The blend of Indian values with modern education is exactly what we wanted. The teachers truly care about each child.", rating: 5 },
];

function RevealCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <main className="pt-24 md:pt-28">
      <SEO
        title="A.S.R Dhrona School | Miryalaguda's First Future Ready School"
        description="A.S.R Dhrona School, Miryalaguda — Admissions open for Nursery to Class IX. IIT-JEE/NEET foundation, yoga, chess, Indian cultural values, smart classrooms & holistic education."
        path="/"
      />
      <section className="min-h-[60vh] md:min-h-[75vh] flex items-center py-10 md:py-0">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4 md:mb-6">
                ✦ Admissions Open for 2026-27
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-secondary leading-tight mb-4 md:mb-6">
                Miryalaguda's First{" "}
                <span className="text-primary">Future Ready</span>{" "}
                School
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
                We Truly Care for the Physical, Mental & Cultural Growth of Our Little Ones
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
                <Link to="/admissions">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-sm md:text-base px-6 md:px-8 rounded-full shadow-md">
                    Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-secondary/30 text-secondary hover:bg-secondary/5 rounded-full text-sm md:text-base px-6 md:px-8">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-6 lg:mt-0">
              <img src={heroImg} alt="Happy students at A.S.R Dhrona School" width={1920} height={1024} className="rounded-2xl shadow-xl object-cover w-full aspect-[16/9]" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            label="What Makes Us Special"
            title="Holistic Learning Experience"
            description="Beyond textbooks — we nurture tradition, fitness, and character in every student."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {highlights.map((item, i) => (
              <RevealCard key={item.title} delay={i * 80}>
                <div className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 hover:-translate-y-1">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform",
                    i % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                  )}>
                    <item.icon className={cn("w-6 h-6", i % 2 === 0 ? "text-primary" : "text-secondary")} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            label="Why A.S.R Dhrona"
            title="Why Parents Choose Us"
            description="A perfect blend of modern academics and timeless Indian values."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => (
              <RevealCard key={item.title} delay={i * 80}>
                <div className="flex gap-4 p-5 rounded-xl border border-border/50 hover:border-secondary/20 hover:shadow-md transition-all duration-300 bg-card">
                  <div className={cn(
                    "w-11 h-11 rounded-lg flex items-center justify-center shrink-0",
                    i % 2 === 0 ? "bg-secondary/10" : "bg-primary/10"
                  )}>
                    <item.icon className={cn("w-5 h-5", i % 2 === 0 ? "text-secondary" : "text-primary")} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            label="Testimonials"
            title="What Parents Say"
            description="Hear from families who trust A.S.R Dhrona for their children's future."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((t, i) => (
              <RevealCard key={t.name} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-secondary/20 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex gap-1 mb-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-semibold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
              Admissions Open for 2026-27
            </h2>
            <p className="text-secondary-foreground/70 mb-8 text-lg">
              Give your child the gift of a future-ready education rooted in Indian values.
            </p>
            <Link to="/admissions">
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full px-10 text-base">
                Apply Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
