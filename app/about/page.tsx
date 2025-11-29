"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { Users, Award, Leaf, Target, Heart, Zap, CheckCircle2 } from "lucide-react";

const values = [
  { 
    icon: Users, 
    title: "Customer First", 
    desc: "We prioritize your needs and satisfaction above all else.",
    gradient: "from-teal-500 to-cyan-500"
  },
  { 
    icon: Leaf, 
    title: "Eco-Friendly", 
    desc: "We use sustainable products to protect the planet.",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    icon: Award, 
    title: "Excellence", 
    desc: "We strive for perfection in every service we provide.",
    gradient: "from-blue-500 to-indigo-500"
  },
  { 
    icon: Target, 
    title: "Reliability", 
    desc: "On-time service delivery, every single time.",
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: Heart, 
    title: "Care", 
    desc: "We treat your belongings as if they were our own.",
    gradient: "from-rose-500 to-red-500"
  },
  { 
    icon: Zap, 
    title: "Innovation", 
    desc: "Using the latest cleaning technology and methods.",
    gradient: "from-amber-500 to-orange-500"
  },
];

const milestones = [
  { year: "2010", title: "Founded", desc: "Started with a vision to revolutionize cleaning services" },
  { year: "2015", title: "Expansion", desc: "Opened 5 new locations across the city" },
  { year: "2020", title: "Going Green", desc: "100% eco-friendly product transition" },
  { year: "2025", title: "5000+ Customers", desc: "Serving thousands of happy clients" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif leading-tight">
                <span className="block">Our Story of</span>
                <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Clean the World started with a simple idea: to provide high-quality, reliable, and eco-friendly cleaning services to our community. Over 15 years later, we've grown into a trusted name, serving thousands of satisfied customers.
              </p>
              <div className="flex gap-4">
                {[
                  { label: "15+ Years", sublabel: "Experience" },
                  { label: "5000+", sublabel: "Happy Clients" },
                  { label: "100%", sublabel: "Eco-Friendly" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="text-3xl font-bold text-teal-600 font-serif">{stat.label}</div>
                    <div className="text-sm text-slate-600">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                  alt="Professional cleaning"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=800&auto=format&fit=crop"
                  alt="Eco-friendly products"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
                  alt="Team at work"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover -mt-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src="https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=800&auto=format&fit=crop"
                  alt="Happy customer"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10" />
                
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-xl text-slate-600">
              Milestones that shaped our story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-teal-200 last:border-transparent last:pb-0"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full border-4 border-white shadow-lg" />
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl font-bold text-teal-600 mb-2 font-serif">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h3>
                  <p className="text-slate-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">Our Mission</h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  To provide exceptional cleaning services that exceed expectations while maintaining our commitment to environmental sustainability and customer satisfaction. We believe that a clean environment contributes to a clear mind and a better quality of life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "100% Customer Satisfaction",
                    "Eco-Friendly Practices",
                    "Professional Excellence",
                    "Community Impact"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
