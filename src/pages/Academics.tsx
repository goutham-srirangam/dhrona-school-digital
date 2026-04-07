import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { BookOpenCheck, Calculator, Sparkles, GraduationCap, Lightbulb, Brain } from "lucide-react";

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const programs = [
  { icon: BookOpenCheck, title: "Masters English Program (MEP)", desc: "Comprehensive English fluency curriculum with speaking, reading, and creative writing modules designed by language experts.", color: "bg-blue-500/10 text-blue-600" },
  { icon: Calculator, title: "Mathematics Playground (MPG)", desc: "Hands-on, concept-driven maths learning using physical models, puzzles, and real-world problem-solving activities.", color: "bg-green-500/10 text-green-600" },
  { icon: Sparkles, title: "Memory Boost Meditation (MBM)", desc: "Scientifically designed meditation and memory techniques that improve concentration, recall, and exam performance.", color: "bg-purple-500/10 text-purple-600" },
];

const grades = [
  { grade: "Nursery – KG", focus: "Play-based learning, motor skills, phonics, and social development" },
  { grade: "Class I – III", focus: "Foundation literacy, numeracy, environmental awareness, and values" },
  { grade: "Class IV – VI", focus: "Concept-based learning, science exploration, and IIT-JEE/NEET foundation begins" },
  { grade: "Class VII – IX", focus: "Advanced academics, competitive exam prep, leadership, and career guidance" },
];

export default function Academics() {
  return (
    <main className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Academics</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Nursery to Class IX — English medium, concept-based learning with IIT-JEE/NEET foundation from early grades.</p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Curriculum" title="Grade-Wise Learning Path" description="Structured progression from play-based learning to competitive exam readiness." />
          <div className="grid sm:grid-cols-2 gap-5">
            {grades.map((g, i) => (
              <RevealDiv key={g.grade} delay={i * 80}>
                <div className="bg-card rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground">{g.grade}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{g.focus}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="section-padding bg-muted/50">
        <div className="container mx-auto">
          <SectionHeading label="Signature Programs" title="Unique to A.S.R Dhrona" description="Exclusive programs designed to give your child an unmatched academic advantage." />
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <RevealDiv key={p.title} delay={i * 100}>
                <div className="bg-card rounded-xl p-7 border border-border/50 shadow-sm h-full hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                  <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-5", p.color)}>
                    <p.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-3 text-lg">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <RevealDiv>
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">Concept-Based Learning</h2>
              <p className="text-muted-foreground leading-relaxed">
                At A.S.R Dhrona, we go beyond rote learning. Our concept-based approach helps students understand the "why" behind every subject, building deep comprehension that lasts a lifetime. From hands-on science experiments to real-world maths applications, every lesson is designed to spark curiosity and critical thinking.
              </p>
            </div>
          </RevealDiv>
        </div>
      </section>
    </main>
  );
}
