import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import About from "@/components/home/About";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
