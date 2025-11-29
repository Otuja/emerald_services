"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { Shirt, Sparkles, Home, Clock, ShieldCheck, Truck, Droplets, Wind, CheckCircle2, ArrowRight } from "lucide-react";

const featuredServices = [
  {
    icon: Shirt,
    title: "Dry Cleaning",
    description: "Expert care for your delicate garments using eco-friendly solvents and advanced techniques.",
    features: ["Delicate fabric care", "Stain removal", "Professional pressing", "Same-day available"],
    gradient: "from-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Sparkles,
    title: "Laundry Service",
    description: "Wash, dry, and fold service for your everyday clothes and linens with premium care.",
    features: ["Wash & fold", "Premium detergents", "Fabric softener", "Eco-friendly options"],
    gradient: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Home,
    title: "House Cleaning",
    description: "Professional deep cleaning for your home. Kitchens, bathrooms, and living areas.",
    features: ["Deep cleaning", "Sanitization", "Eco-friendly products", "Flexible scheduling"],
    gradient: "from-blue-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
  },
];

const additionalServices = [
  { icon: Clock, title: "Express Service", desc: "Same-day pickup and delivery for urgent needs", gradient: "from-purple-500 to-pink-500" },
  { icon: ShieldCheck, title: "Stain Removal", desc: "Advanced techniques for tough stains", gradient: "from-rose-500 to-red-500" },
  { icon: Truck, title: "Pickup & Delivery", desc: "Free pickup and delivery at your doorstep", gradient: "from-amber-500 to-orange-500" },
  { icon: Droplets, title: "Carpet Cleaning", desc: "Deep steam cleaning for carpets and rugs", gradient: "from-green-500 to-emerald-500" },
  { icon: Wind, title: "Curtain Cleaning", desc: "Professional curtain and drape cleaning", gradient: "from-sky-500 to-blue-500" },
  { icon: Sparkles, title: "Upholstery Care", desc: "Furniture and upholstery deep cleaning", gradient: "from-violet-500 to-purple-500" },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif leading-tight">
              <span className="block">Our Premium</span>
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              Comprehensive cleaning solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-7xl mx-auto">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div
                    className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-full mb-6 shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <service.icon className="w-6 h-6" />
                    <span className="font-bold">Featured Service</span>
                  </motion.div>
                  
                  <h2 className="text-4xl font-bold text-slate-900 mb-4 font-serif">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1`}
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                
                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`} />
                  </div>
                  <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-50`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600">
              More ways we can help keep your world clean
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10" />
                
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Book your first service today and experience the difference of professional, eco-friendly cleaning.
              </p>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                <span>Book Now on WhatsApp</span>
                <ArrowRight className="w-6 h-6" />
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
