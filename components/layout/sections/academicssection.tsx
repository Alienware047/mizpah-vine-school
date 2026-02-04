"use client";
import Image from "next/image";
import { Cpu, Palette, Volleyball, BookOpen } from "lucide-react";
import SectionWrapper from "../sectionwrapper";

export default function AcademicsSection() {
  const programs = [
    {
      title: "Early Years",
      description: "Nurturing curiosity and foundational skills through play-based learning.",
      icon: <BookOpen className="w-8 h-8 mb-4 transition-colors" />,
      image: "/images/early-years.jpg",
    },
    {
      title: "Primary School",
      description: "Building core academic skills, creativity, and character development.",
      icon: <Palette className="w-8 h-8 mb-4 transition-colors" />,
      image: "/images/primary-school.jpg",
    },
    {
      title: "Secondary School",
      description: "Preparing students for higher education with advanced curriculum and life skills.",
      icon: <Cpu className="w-8 h-8 mb-4 transition-colors" />,
      image: "/images/secondary-school.jpg",
    },
    {
      title: "Special Programs",
      description: "STEM, Arts, Sports, and Languages for holistic student growth.",
      icon: <Volleyball className="w-8 h-8 mb-4 transition-colors" />,
      image: "/images/special-programs.jpg",
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background shapes */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Academics & Programs Offered
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Explore our curriculum and special programs designed to develop academic excellence, creativity, and leadership.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl hover:bg-primary-hover"
            >
              <div className="relative h-40 sm:h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 mix-blend-multiply"></div>
              </div>

              <div className="p-6 text-center">
                {/* Icon */}
                {program.icon && (
                  <div className="text-primary group-hover:text-white transition-colors">
                    {program.icon}
                  </div>
                )}
                <h3 className="font-bold text-xl mb-2 group-hover:text-white transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
