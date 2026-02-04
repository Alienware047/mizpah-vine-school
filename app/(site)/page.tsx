"use client";

import Slider from "@/components/layout/slider";
import AboutSection from "../../components/layout/sections/aboutsection";
import WhyChooseUs from "../../components/layout/sections/whychooseus";
import AcademicsSection from "../../components/layout/sections/academicssection";
import AdmissionsSection from "../../components/layout/sections/adminsionssection";
import GallerySection from "../../components/layout/sections/gallerysection";
import TestimonialsSection from "../../components/layout/sections/testimonials";
import NewsStackSection from "../../components/layout/sections/newsstacksection";
import ContactSection from "../../components/layout/sections/contactsection";
import AchievementsSection from "../../components/layout/sections/achievementsection";
import SectionWrapper from "@/components/layout/sectionwrapper";


export default function HomePage() {
  const slides = [
    {
      id: 1,
      title: "Welcome to Mizpah Vine Ark School",
      description:
        "An international school in Kumasi committed to excellence, discipline, and holistic development.",
      image: "/images/IMG-20211119-WA0061.webp",
      // ctaText: "Apply Now",
      // ctaLink: "/admissions",
    },
    {
      id: 2,
      title: "World-Class Education",
      description: "Empowering students with knowledge and values for a bright future.",
      image: "/images/IMG-20211125-WA0201.webp",
    },
    {
      id: 3,
      title: "A Vibrant Learning Community",
      description:
        "Where students thrive academically, socially, and morally.",
      image: "/images/unnamed.webp",
      // ctaText: "Learn More",
      // ctaLink: "/about",
    },
  ];

  return (
    <div className="flex flex-col">
      
      {/* Hero Slider */}
      <Slider slides={slides} interval={6000} />

      {/* About Section */}
      <SectionWrapper>
        <AboutSection />

        {/* WhyChooseUs */}
        <WhyChooseUs />

        {/* Academics Section */}
        <AcademicsSection />

        {/* Admissions Section */}
        <AdmissionsSection />

        {/* Gallery Section */}
        <GallerySection />

        <TestimonialsSection/>

        <NewsStackSection/>

        <ContactSection />
        
        <AchievementsSection />
      </SectionWrapper>
    </div>
  );
}
