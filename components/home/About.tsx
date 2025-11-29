"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                Trusted Since 2010
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We're more than just a cleaning service. We're your partner in maintaining a pristine, healthy environment. With over a decade of experience, we've perfected the art of care and built lasting relationships with thousands of satisfied customers.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "100% Eco-Friendly Products",
                  "Certified & Trained Professionals",
                  "100% Satisfaction Guarantee",
                  "Free Pickup & Delivery",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
                  alt="Professional Cleaning Service"
                  className="w-full h-auto"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/20 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-bold text-teal-600 mb-1 font-serif">15+</div>
                <div className="text-sm text-slate-600 font-medium">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
