import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <About />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}