import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const steps = [
  "Fill the enquiry form below or visit the school",
  "Attend a campus tour and interaction session",
  "Submit required documents and complete registration",
  "Welcome to the A.S.R Dhrona family!",
];

export default function Admissions() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", parentName: "", phone: "", email: "", class: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Received!", description: "We'll contact you shortly. Thank you for choosing A.S.R Dhrona!" });
    setFormData({ name: "", parentName: "", phone: "", email: "", class: "" });
  };

  return (
    <main className="pt-28">
      <SEO title="Admissions 2026-27" description="Apply now for admissions at A.S.R Dhrona School Miryalaguda — Nursery to Class IX. Limited seats, IIT-JEE/NEET foundation, holistic education. Call +91 9493-46-1122." path="/admissions" />
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            ✦ 2026-27 Session
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Admissions <span className="text-primary">Open</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Nursery to Class IX — Limited seats available. Secure your child's future today.</p>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading label="Process" title="How to Apply" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <RevealDiv key={i} delay={i * 100}>
                <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm h-full">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 text-white",
                    i % 2 === 0 ? "bg-primary" : "bg-secondary"
                  )}>
                    {i + 1}
                  </div>
                  <p className="text-sm text-muted-foreground">{step}</p>
                </div>
              </RevealDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <SectionHeading label="Enquiry Form" title="Apply Now" description="Fill in your details and we'll get back to you within 24 hours." />
          <RevealDiv>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Student Name *</Label>
                  <Input id="name" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Enter student name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent Name *</Label>
                  <Input id="parentName" required value={formData.parentName} onChange={e => setFormData(p => ({ ...p, parentName: e.target.value }))} placeholder="Enter parent name" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" required value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Applying for Class *</Label>
                <Select value={formData.class} onValueChange={v => setFormData(p => ({ ...p, class: v }))}>
                  <SelectTrigger><SelectValue placeholder="Select class" /></SelectTrigger>
                  <SelectContent>
                    {["Nursery", "LKG", "UKG", "Class I", "Class II", "Class III", "Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX"].map(c => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground rounded-full text-base font-semibold">
                Submit Application <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Or call us directly: <a href="tel:+919493461122" className="text-secondary font-medium">+91 9493-46-1122</a>
              </p>
            </form>
          </RevealDiv>
        </div>
      </section>
    </main>
  );
}
