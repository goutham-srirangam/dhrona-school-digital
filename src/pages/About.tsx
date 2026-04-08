import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Eye, Target, Heart, GraduationCap, Globe, Users } from "lucide-react";

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const values = [
  { icon: Heart, title: "Physical Growth", desc: "Yoga, sports, martial arts, and health tracking ensure every child stays active and healthy.", color: "primary" },
  { icon: GraduationCap, title: "Mental Growth", desc: "Concept-based learning, IIT foundation, and memory techniques sharpen young minds.", color: "secondary" },
  { icon: Globe, title: "Cultural Growth", desc: "Shlokas, Indian values, and traditional arts keep our students connected to their roots.", color: "primary" },
];

const faculty = [
  { name: "Expert Educators", desc: "Handpicked teachers from across India with proven track records in academic excellence." },
  { name: "Trained Mentors", desc: "Specialized coaches for yoga, chess, sports, and cultural activities." },
  { name: "NRI Leadership", desc: "Globally educated management bringing international best practices to local education." },
];

export default function About() {
  return (
    <main className="pt-28">
      <SEO title="About Us" description="Learn about A.S.R Dhrona School Miryalaguda — our vision, mission, NRI management, expert faculty, and commitment to physical, mental & cultural growth." path="/about" />
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">About <span className="text-secondary">A.S.R Dhrona</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Global Vision, Indian Roots — shaping tomorrow's leaders with timeless values.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <RevealDiv>
              <div className="bg-card rounded-xl p-8 border border-border/50 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be Miryalaguda's premier educational institution that combines global standards with Indian cultural heritage, producing well-rounded individuals ready for the future.
                </p>
              </div>
            </RevealDiv>
            <RevealDiv delay={100}>
              <div className="bg-card rounded-xl p-8 border border-secondary/20 shadow-sm h-full">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To nurture every child's physical, mental, and cultural growth through innovative teaching methods, Indian values, and a safe, inspiring environment.
                </p>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Our Philosophy" title="Physical · Mental · Cultural" description="We believe true education develops the whole child — body, mind, and spirit." />
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <RevealDiv key={v.title} delay={i * 100}>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm text-center h-full">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4", v.color === "secondary" ? "bg-secondary/10" : "bg-primary/10")}>
                    <v.icon className={cn("w-6 h-6", v.color === "secondary" ? "text-secondary" : "text-primary")} />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Our Team" title="World-Class Faculty" description="Our educators are carefully selected for their expertise, passion, and dedication to student success." />
          <div className="grid md:grid-cols-3 gap-6">
            {faculty.map((f, i) => (
              <RevealDiv key={f.name} delay={i * 100}>
                <div className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card shadow-sm">
                  <div className={cn("w-11 h-11 rounded-lg flex items-center justify-center shrink-0", i % 2 === 0 ? "bg-secondary/10" : "bg-primary/10")}>
                    <Users className={cn("w-5 h-5", i % 2 === 0 ? "text-secondary" : "text-primary")} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{f.name}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
