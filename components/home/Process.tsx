"use client";

import { motion } from "framer-motion";
import { Calendar, Truck, Sparkles, Home } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description: "Schedule your pickup via WhatsApp, phone, or our website. Choose your preferred time slot.",
  },
  {
    icon: Truck,
    title: "We Collect",
    description: "Our team arrives at your doorstep to collect your items. Free pickup within the service area.",
  },
  {
    icon: Sparkles,
    title: "We Clean",
    description: "Expert cleaning with eco-friendly products. Each item receives meticulous care and attention.",
  },
  {
    icon: Home,
    title: "We Deliver",
    description: "Your items are returned fresh, clean, and perfectly folded. Delivered right to your door.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
            How It Works
          </h2>
          <p className="text-xl text-slate-600">
            Simple, fast, and hassle-free
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-300 to-transparent -translate-x-4" />
                )}

                {/* Step Card */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-teal-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
