"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    title: "Dry Cleaning",
    description: "Perfect for professionals and delicate garments",
    price: "From ₦2,500",
    icon: Star,
    gradient: "from-teal-600 to-cyan-600",
    features: [
      "Shirt (Laundered) - ₦2,500",
      "Pants / Slacks - ₦5,000",
      "Suit (2-piece) - ₦12,000",
      "Dress (Regular) - ₦9,000",
      "Blouse - ₦5,500",
      "Coat / Jacket - ₦10,000",
      "Free pickup & delivery",
      "48-hour turnaround",
    ],
  },
  {
    name: "Popular",
    title: "Wash & Fold",
    description: "Everyday laundry made effortless",
    price: "₦1,200/kg",
    icon: Crown,
    gradient: "from-cyan-600 to-blue-600",
    popular: true,
    features: [
      "Regular Laundry - ₦1,200/kg",
      "Bedding (Comforter) - ₦18,000",
      "Towels - ₦1,000/kg",
      "Minimum order: 5kg",
      "Premium detergents included",
      "Fabric softener option",
      "Free pickup & delivery",
      "24-hour express available",
    ],
  },
  {
    name: "Premium",
    title: "House Cleaning",
    description: "Complete home deep cleaning service",
    price: "From ₦85,000",
    icon: Zap,
    gradient: "from-blue-600 to-indigo-600",
    features: [
      "Studio / 1 Bedroom - ₦85,000",
      "2 Bedrooms - ₦110,000",
      "3 Bedrooms - ₦140,000",
      "Deep Clean Add-on - +₦45,000",
      "Move-in / Move-out - Custom",
      "Eco-friendly products",
      "Professional team",
      "Satisfaction guaranteed",
    ],
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-teal-200 shadow-lg mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-semibold text-slate-700">
                Simple, Transparent Pricing
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif leading-tight">
              <span className="block">Choose Your</span>
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              No hidden fees. No surprises. Just quality service at fair prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative rounded-3xl overflow-hidden ${
                  plan.popular 
                    ? 'shadow-2xl shadow-cyan-500/20 scale-105 md:scale-110 z-10' 
                    : 'shadow-xl hover:shadow-2xl'
                } transition-all duration-300 hover:-translate-y-2`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 text-sm font-bold rounded-bl-3xl shadow-lg">
                    MOST POPULAR
                  </div>
                )}

                {/* Header */}
                <div className={`relative bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <plan.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-semibold uppercase tracking-wider opacity-90">
                        {plan.name}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2 font-serif">{plan.title}</h3>
                    <p className="text-white/90 mb-6">{plan.description}</p>
                    <div className="text-4xl font-bold font-serif">{plan.price}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="p-8 bg-white">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <div className={`w-5 h-5 bg-gradient-to-br ${plan.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center font-bold py-4 rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white hover:shadow-2xl hover:shadow-cyan-500/50 hover:-translate-y-1`
                        : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl p-12 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center font-serif">
                What's Included in Every Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Free Pickup", desc: "We come to you" },
                  { title: "Eco-Friendly", desc: "Safe for environment" },
                  { title: "Quality Assured", desc: "100% satisfaction" },
                  { title: "Fast Service", desc: "24-48 hour turnaround" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Still Have Questions?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us for custom quotes or special requirements. We're here to help!
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
