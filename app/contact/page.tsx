"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const contactInfo = [
  { 
    icon: MapPin, 
    title: "Visit Us", 
    content: "123 Clean Street, Suite 100\nNsukka, Enugu Nigeria",
    link: "https://maps.google.com/?q=Nsukka+Enugu+Nigeria"
  },
  { 
    icon: Phone, 
    title: "Call Us", 
    content: "+234 (555) 123-4567\nMon-Fri: 8am - 8pm",
    link: "tel:+2345551234567"
  },
  { 
    icon: Mail, 
    title: "Email Us", 
    content: "info@cleantheworld.com",
    link: "mailto:info@cleantheworld.com"
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600", name: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-600", name: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500", name: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700", name: "LinkedIn" },
];

export default function Contact() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif">
              <span className="block">Get in</span>
              <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              We're here to help. Reach out for any questions or to schedule a service.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.icon === MapPin ? "_blank" : undefined}
                rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-teal-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h3>
                <p className="text-slate-600 whitespace-pre-line leading-relaxed">{item.content}</p>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-slate-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all bg-white" 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all bg-white" 
                      placeholder="Doe" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all bg-white" 
                    placeholder="john@example.com" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea 
                    rows={6} 
                    className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 outline-none transition-all bg-white resize-none" 
                    placeholder="How can we help you?" 
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold py-4 rounded-xl hover:shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 h-[600px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126254.36556479384!2d7.3155!3d6.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3a7b8b3f7f7%3A0x3e8c8e8e8e8e8e8e!2sNsukka%2C%20Enugu%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location - Nsukka, Enugu"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
