"use client";
// pages/index.js
import Head from "next/head";
import Image from "next/image";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import PackagesSection from "../components/PackagesSection";
import CampaignsSection from "../components/CampaignsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import LeadFormSection from "../components/LeadFormSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>WhatsApp Marketing Services | Reach 5000+ Users</title>
        <meta
          name="description"
          content="Professional WhatsApp marketing services to grow your brand visibility and generate leads"
        />
        {/* Custom font links moved to _document.tsx */}
      </Head>

      {/* Full-page background image and glassy overlay */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751970354/grlafv3hgrhw5edfcxqf.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Glassy blurry overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-lg"></div>
      </div>

      {/* Main content */}
      <HeroSection />
      <StatsSection />
      <PackagesSection />
      <CampaignsSection />
      <TestimonialsSection />
      <LeadFormSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}
