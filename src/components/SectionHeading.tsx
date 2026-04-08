import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ label, title, description, className, align = "center" }: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 transition-all duration-700",
        align === "center" ? "text-center max-w-2xl mx-auto" : "text-left",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary text-primary-foreground mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      )}
    </div>
  );
}
