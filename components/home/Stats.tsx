"use client";

import { motion } from "framer-motion";
import { Users, Award, Clock, Star } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: Award,
    value: 15,
    suffix: " Years",
    label: "Experience",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Service Available",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Customer Rating",
    decimal: true,
  },
];

function Counter({ value, decimal = false }: { value: number; decimal?: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {decimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-teal-50">
            Numbers that speak for our excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">
                <Counter value={stat.value} decimal={stat.decimal} />
                {stat.suffix}
              </div>
              <div className="text-teal-50 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
