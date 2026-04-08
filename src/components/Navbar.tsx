import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/activities", label: "Activities" },
  { to: "/facilities", label: "Facilities" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Marquee Banner */}
      <div className="bg-primary text-primary-foreground text-xs sm:text-sm overflow-hidden whitespace-nowrap">
        <div className="animate-marquee inline-block py-1.5 px-4">
          📢 Admissions Open for 2026-27 &nbsp;|&nbsp; Classes Nursery to IX &nbsp;|&nbsp; IIT-JEE | NEET Training for VI to IX &nbsp;|&nbsp; 📞 +91 9493-46-1122
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          📢 Admissions Open for 2026-27 &nbsp;|&nbsp; Classes Nursery to IX &nbsp;|&nbsp; IIT-JEE | NEET Training for VI to IX &nbsp;|&nbsp; 📞 +91 9493-46-1122
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <nav
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-transparent"
        )}
      >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img src={logo} alt="A.S.R Dhrona Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <span className="font-display font-bold text-lg text-foreground leading-tight block">
              A.S.R Dhrona
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
              Global Vision, Indian Roots
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === link.to
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/admissions">
            <Button size="sm" className="ml-3 bg-primary text-primary-foreground border-0">
              Admissions Open
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/admissions" className="mt-2">
              <Button className="w-full bg-primary text-primary-foreground border-0">
                Admissions Open
              </Button>
            </Link>
            <a
              href="tel:+919493461122"
              className="flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground"
            >
              <Phone className="w-4 h-4" /> +91 9493-46-1122
            </a>
          </div>
        </div>
      )}
      </nav>
    </div>
  );
}
