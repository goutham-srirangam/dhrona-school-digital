import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/academics", label: "Academics" },
  { to: "/activities", label: "Activities" },
  { to: "/facilities", label: "Facilities" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg font-display">
                A
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-white">A.S.R Dhrona School</h3>
                <p className="text-xs tracking-widest uppercase text-white/50">
                  Global Vision, Indian Roots
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/60">
              Miryalaguda's First Future Ready School — nurturing the physical, mental & cultural growth of every child.
            </p>
            <p className="text-xs font-semibold tracking-wider uppercase text-primary">
              ✦ SMART way of Learning ✦
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                Vasavi Nagar, Miryalaguda
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <a href="tel:+919493461122" className="hover:text-primary transition-colors block">
                    +91 9493-46-1122
                  </a>
                  <a href="tel:+919493561122" className="hover:text-primary transition-colors block">
                    +91 9493-56-1122
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:asrdhrona@gmail.com" className="hover:text-primary transition-colors">
                  asrdhrona@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">School Hours</h4>
            <p className="text-sm text-white/60">Monday – Saturday</p>
            <p className="text-sm text-white/60">8:00 AM – 4:00 PM</p>
            <div className="mt-6">
              <Link
                to="/admissions"
                className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now →
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} A.S.R Dhrona School, Miryalaguda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
