"use client";

import { motion } from "framer-motion";
import { Shirt, Sparkles, Home, Clock } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert care for delicate garments with eco-friendly solutions.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Laundry Service",
    description: "Wash, dry, and fold with premium detergents and care.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Home,
    title: "House Cleaning",
    description: "Professional deep cleaning for every room in your home.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Same-day service for urgent cleaning requirements.",
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Comprehensive care for all your cleaning needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              <div className="absolute inset-[2px] bg-white rounded-2xl -z-10" />

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/services"
            className="inline-block bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
