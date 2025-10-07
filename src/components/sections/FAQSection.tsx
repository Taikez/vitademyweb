import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/Accordion";
import { faqs } from "@/data/faqs";
import { Button } from "../ui/Button";

export default function FAQSection() {
  return (
    <section id="faq">
      <div className="from-[#9f6cf0]/10 to-[#9f6cf0]/5 dark:from-[#7d5bb5]/20 dark:to-[#7d5bb5]/10 border-[#7d5bb5]/10 bg-gradient-to-b rounded-xl md:rounded-full py-15 px-5 md:p-20">
        <h1 className="text-4xl font-bold text-center mb-10">
          Frequently Asked Questions:
        </h1>
        <div className="flex flex-col items-center">
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full lg:max-w-3xl p-10"
          >
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                  <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                  <div className="text-muted-foreground lg:text-lg">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button className="text-center flex justify-center">
            More Questions
          </Button>
        </div>
      </div>
    </section>
  );
}
