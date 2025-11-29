import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Dry Cleaning", href: "/services" },
    { name: "Laundry Service", href: "/services" },
    { name: "House Cleaning", href: "/services" },
    { name: "Express Service", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Clean the World
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Premium cleaning services for your modern lifestyle. Eco-friendly, professional, and always on time.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-teal-600 hover:to-cyan-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-serif">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-serif">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-teal-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-teal-400 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 font-serif">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>info@cleantheworld.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>123 Clean Street, Nsukka, Enugu Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Clean the World. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
