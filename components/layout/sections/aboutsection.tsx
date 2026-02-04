"use client";

import Image from "next/image";
import SectionWrapper from "../sectionwrapper";

export default function AboutSection() {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Seamless background blobs (MATCHES WhyChooseUs)
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-primary/15 blur-[120px] opacity-70 pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[32rem] h-[32rem] bg-accent/15 blur-[120px] opacity-70 pointer-events-none" /> */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2 relative h-72 sm:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/images/principal.jpg"
            alt="Principal of Mizpah Vine Ark School"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply rounded-xl" />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            About Mizpah Vine Ark School
          </h2>

          <p className="text-muted mb-8 text-lg sm:text-xl leading-relaxed">
            Founded with a commitment to academic excellence and holistic development,
            Mizpah Vine Ark School nurtures students to become confident, responsible,
            and ethical leaders of tomorrow.
          </p>

          {/* Mission & Vision */}
          <div className="mb-10 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
              <p className="text-muted text-base sm:text-lg">
                To provide a nurturing and challenging environment where every child thrives academically, socially, and morally.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Our Vision</h3>
              <p className="text-muted text-base sm:text-lg">
                To be a leading international school recognized for excellence, innovation, and character development.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <ValueCard
              title="Excellence"
              description="Pursuing the highest academic and personal standards."
            />
            <ValueCard
              title="Discipline"
              description="Fostering responsibility, respect, and integrity."
            />
            <ValueCard
              title="Holistic Development"
              description="Nurturing mind, body, and character."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <h4 className="font-bold text-primary text-lg sm:text-xl mb-2">
        {title}
      </h4>
      <p className="text-muted text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}
