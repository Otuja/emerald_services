"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Absolutely outstanding service! They've been handling my business suits for over a year now. The attention to detail is impeccable, and the eco-friendly approach aligns perfectly with my values.",
  },
  {
    name: "Michael Chen",
    role: "Family Man",
    image: "https://i.pravatar.cc/150?img=13",
    rating: 5,
    text: "As a busy parent, their pickup and delivery service is a lifesaver. My clothes come back looking brand new every single time. The team is professional, friendly, and always on schedule.",
  },
  {
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    image: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "I trust them with my most delicate fabrics and designer pieces. Their expertise in handling different materials is unmatched. They truly understand the art of cleaning.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">
            Real experiences from real customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-teal-100"
                />
                <div>
                  <div className="font-bold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
