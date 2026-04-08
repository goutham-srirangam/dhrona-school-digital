import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, GraduationCap, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdmissionPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("admission-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem("admission-popup-dismissed", "true");
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full h-full flex flex-col items-center justify-center px-6 text-center">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold tracking-wide">
            ✦ 2026-27 Session
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight">
            Admissions <span className="text-primary">Now Open</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/70 max-w-lg mx-auto">
            Classes Nursery to IX — Limited seats available.<br />
            IIT-JEE & NEET Foundation from Class VI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link to="/admissions" onClick={dismiss}>
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold rounded-full px-8 text-base shadow-lg">
                Apply Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <a href="tel:+919493461122">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 text-base">
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </Button>
            </a>
          </div>

          <button onClick={dismiss} className="text-sm text-white/40 hover:text-white/60 transition-colors mt-4">
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
