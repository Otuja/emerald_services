"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your turnaround time?",
    answer: "Our standard turnaround time for laundry and dry cleaning is 24-48 hours. We also offer same-day express service for orders placed before 10 AM.",
  },
  {
    question: "Do you offer free pickup and delivery?",
    answer: "Yes! We offer free pickup and delivery for all orders over ₦20,000 within our service area. You can schedule a pickup via WhatsApp.",
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use eco-friendly, hypoallergenic, and non-toxic cleaning products that are safe for your family, pets, and the environment.",
  },
  {
    question: "How do I pay for the service?",
    answer: "We accept cash, bank transfers, and mobile payments upon delivery. You will receive a detailed invoice with your clean clothes.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is our priority. If you're not happy with the results, let us know within 24 hours, and we will re-clean the item for free.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-600">
              Everything you need to know about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
