import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function RevealDiv({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const contactInfo = [
  { icon: MapPin, title: "Address", lines: ["Vasavi Nagar, Miryalaguda", "Telangana, India"], color: "primary" },
  { icon: Phone, title: "Phone", lines: ["+91 9493-46-1122", "+91 9493-56-1122"], color: "secondary" },
  { icon: Mail, title: "Email", lines: ["asrdhrona@gmail.com"], color: "primary" },
  { icon: Clock, title: "School Hours", lines: ["Mon – Sat: 8:00 AM – 4:00 PM"], color: "secondary" },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-28">
      <SEO title="Contact Us" description="Contact A.S.R Dhrona School Miryalaguda — visit Vasavi Nagar, call +91 9493-46-1122 or email asrdhrona@gmail.com. Schedule a campus tour today." path="/contact" />
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">Contact <span className="text-secondary">Us</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out for admissions, queries, or a campus visit.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <SectionHeading align="left" title="Get in Touch" description="Visit us or drop a message — we're always happy to help." />
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((c, i) => (
                  <RevealDiv key={c.title} delay={i * 80}>
                    <div className="bg-card rounded-xl p-5 border border-border/50 shadow-sm h-full">
                      <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-3", c.color === "secondary" ? "bg-secondary/10" : "bg-primary/10")}>
                        <c.icon className={cn("w-5 h-5", c.color === "secondary" ? "text-secondary" : "text-primary")} />
                      </div>
                      <h3 className="font-display font-semibold text-foreground text-sm mb-1">{c.title}</h3>
                      {c.lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </RevealDiv>
                ))}
              </div>

              {/* Map */}
              <RevealDiv className="mt-6">
                <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm">
                  <iframe
                    title="School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30474.0!2d79.56!3d16.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3a1c0b0b0b0b0b%3A0x0!2sMiryalaguda!5e0!3m2!1sen!2sin!4v1600000000000"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </RevealDiv>
            </div>

            {/* Form */}
            <RevealDiv delay={100}>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 shadow-lg h-fit sticky top-24">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="c-name">Your Name *</Label>
                    <Input id="c-name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="Full name" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="c-email">Email</Label>
                      <Input id="c-email" type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="c-phone">Phone *</Label>
                      <Input id="c-phone" type="tel" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="c-msg">Message *</Label>
                    <Textarea id="c-msg" required rows={4} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="How can we help you?" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-secondary text-secondary-foreground rounded-full font-semibold">
                    Send Message
                  </Button>
                </form>
              </div>
            </RevealDiv>
          </div>
        </div>
      </section>
    </main>
  );
}
