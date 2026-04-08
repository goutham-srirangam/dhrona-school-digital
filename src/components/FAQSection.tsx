import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "What classes does A.S.R Dhrona School offer?",
    a: "A.S.R Dhrona School offers classes from Nursery to Class IX with English medium instruction, concept-based learning, and IIT-JEE/NEET foundation training from Class VI onwards."
  },
  {
    q: "Where is A.S.R Dhrona School located in Miryalaguda?",
    a: "A.S.R Dhrona School is located in Vasavi Nagar, Miryalaguda, Telangana. We are easily accessible and provide GPS-tracked transport facilities covering all major areas."
  },
  {
    q: "What makes A.S.R Dhrona different from other schools?",
    a: "We combine modern academics with Indian cultural values — offering yoga, chess, Karra Saamu, shlokas, IIT-JEE/NEET foundation, personal lockers, student health cards, and memory boost meditation techniques not found in typical schools."
  },
  {
    q: "How can I apply for admission at A.S.R Dhrona?",
    a: "You can apply online through our Admissions page or visit the school directly. Fill the enquiry form, attend a campus tour, submit documents, and complete registration. Call +91 9493-46-1122 for assistance."
  },
  {
    q: "Does the school provide transport facilities?",
    a: "Yes, A.S.R Dhrona provides safe, GPS-tracked school buses covering all major areas of Miryalaguda with experienced drivers and attendants for door-to-door safety."
  },
  {
    q: "What co-curricular activities are available?",
    a: "Students enjoy yoga & meditation, chess & Dhadi, Karra Saamu (Indian martial arts), sports (Kabaddi, Volleyball, Kho-Kho), cultural learning through shlokas & padyalu, and regular competitions."
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQSection() {
  return (
    <section className="section-padding">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="container mx-auto max-w-3xl">
        <SectionHeading
          label="FAQs"
          title="Frequently Asked Questions"
          description="Everything parents want to know about A.S.R Dhrona School."
        />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6 shadow-sm">
              <AccordionTrigger className="text-left font-display font-semibold text-foreground text-sm md:text-base py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
