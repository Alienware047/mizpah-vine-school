"use client";

import { GraduationCap, UserCheck, Home, Heart } from "lucide-react";
import SectionWrapper from "../sectionwrapper";

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 mx-auto mb-4" />,
      title: "World-class Education",
      description: "Offering a curriculum that fosters excellence and innovation.",
    },
    {
      icon: <UserCheck className="w-8 h-8 mx-auto mb-4" />,
      title: "Qualified Teachers",
      description: "Our educators are highly trained, experienced, and caring.",
    },
    {
      icon: <Home className="w-8 h-8 mx-auto mb-4" />,
      title: "Safe & Modern Facilities",
      description: "State-of-the-art classrooms, labs, and secure campus environment.",
    },
    {
      icon: <Heart className="w-8 h-8 mx-auto mb-4" />,
      title: "Holistic Development",
      description: "Fostering academic, social, and moral growth in every student.",
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Seamless background blobs */}
      {/* <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-primary/15 blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-accent/15 blur-[120px] opacity-70 pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Why Choose Mizpah Vine Ark School
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Discover what sets us apart and why families trust us for their children’s education.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="
                group
                bg-card border border-border rounded-xl p-8 text-center
                text-primary
                shadow-lg transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                hover:bg-primary hover:text-white
              "
            >
              {/* Icon */}
              <div className="transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
