'use client';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { motion } from 'framer-motion';

const faqs = [
  {
    q: 'How does Updatr work?',
    a: 'You enter your metrics, highlights and asks; our AI generates a polished investor email you can send immediately.',
  },
  {
    q: 'Can I customize the email?',
    a: 'Yes. You can edit, tweak or completely rewrite the generated content before sending.',
  },
  {
    q: 'Is my data secure?',
    a: 'All your updates are encrypted and only accessible to you. We never share your investor list.',
  },
  {
    q: 'Do you offer a free trial?',
    a: 'Yes, you can try Updatr free with limited features before upgrading to a paid plan.',
  },
];

export default function FAQSection() {
  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 md:px-6 lg:px-8 mt-24 mb-24">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center text-slate-800 mb-6"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Frequently Asked Questions
      </motion.h2>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-slate-800 font-medium">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 text-sm">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
