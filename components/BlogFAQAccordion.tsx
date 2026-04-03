import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogFAQAccordionProps {
  items: FAQItem[];
}

const BlogFAQAccordion = ({ items }: BlogFAQAccordionProps) => {
  return (
    <div id="frequently-asked-questions" className="my-10 scroll-mt-24">
      <h2 className="text-2xl font-bold font-display text-foreground mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`faq-${index}`}
            className="bg-background border border-border/50 rounded-lg px-6 data-[state=open]:border-gold/30 transition-colors"
          >
            <AccordionTrigger className="text-left text-foreground hover:text-gold hover:no-underline py-5 text-base sm:text-lg font-medium">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default BlogFAQAccordion;
