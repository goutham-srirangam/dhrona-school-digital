import SectionHeading from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Heart, Brain, Dumbbell, BookOpen, Shield, Music } from "lucide-react";

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const activities = [
  { icon: Heart, title: "Yoga & Meditation", desc: "Daily sessions to improve focus, reduce stress, and build inner strength. Our trained yoga instructors guide children through age-appropriate asanas and pranayama.", gradient: "from-rose-500 to-pink-600" },
  { icon: Brain, title: "Chess & Strategic Games", desc: "Regular chess coaching and traditional Indian games like Dhadi that develop critical thinking, patience, and strategic planning abilities.", gradient: "from-blue-500 to-indigo-600" },
  { icon: Music, title: "Cultural Learning", desc: "Shlokas, Padyalu, and traditional songs connect students to their rich cultural heritage. Regular cultural programs and celebrations throughout the year.", gradient: "from-amber-500 to-orange-600" },
  { icon: Dumbbell, title: "Sports & Playground", desc: "Dedicated ground for Kabaddi, Volleyball, Kho-Kho, and athletics. Professional coaching for physical fitness and team spirit.", gradient: "from-green-500 to-emerald-600" },
  { icon: Shield, title: "Karra Saamu & Martial Arts", desc: "Traditional Indian martial arts training that instills discipline, courage, and self-defense skills while preserving cultural traditions.", gradient: "from-red-500 to-rose-600" },
  { icon: BookOpen, title: "Indian Values & Discipline", desc: "Morning assemblies with prayers, respect for elders, community service, and moral education form the foundation of character building.", gradient: "from-violet-500 to-purple-600" },
];

export default function Activities() {
  return (
    <main className="pt-20">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-95" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Activities</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Beyond the classroom — building character, fitness, and cultural pride.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Co-Curricular" title="Activities That Shape Character" description="Every activity at A.S.R Dhrona is designed to develop the whole child — body, mind, and spirit." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <RevealDiv key={a.title} delay={i * 80}>
                <div className="group bg-card rounded-xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className={cn("h-2 bg-gradient-to-r", a.gradient)} />
                  <div className="p-6">
                    <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4 text-white", a.gradient)}>
                      <a.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{a.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
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
