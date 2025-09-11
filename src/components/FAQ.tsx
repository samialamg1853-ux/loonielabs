import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const faqData = [
    {
      question: "How are crypto gains taxed in Canada?",
      answer: "Generally as capital gains (50% inclusion). Business-like activity may be income—see our examples."
    },
    {
      question: "Can I hold Bitcoin/ETH ETFs in a TFSA or RRSP?",
      answer: "Yes—most Canadian-listed ETFs are eligible. Consider MER, hedging, and tracking difference."
    },
    {
      question: "What is the superficial loss rule?",
      answer: "A loss may be denied if you or an affiliated person buy back substantially identical property within 30 days before/after the sale and still own it after."
    },
    {
      question: "What fees do I actually pay when buying crypto in Canada?",
      answer: "Spread + trading/commission + FX. Our FX tool shows the true drag vs spot."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about Canadian crypto taxes and ETF investing.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="cosmic-card px-6 py-2 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline hover:text-accent-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FAQ;