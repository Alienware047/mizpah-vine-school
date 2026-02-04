"use client";

import SectionWrapper from "../sectionwrapper";

export default function AchievementsSection() {
  const awards = ["Best International School 2025", "Excellence in STEM 2024", "Outstanding Arts Program 2023"];
  return (
    <div className="relative py-16 overflow-hidden " >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground">Achievements & Awards</h2>
      </div>
      <div className="max-w-4xl mx-auto  grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {awards.map((a, idx) => (
          <div key={idx} className="bg-card hover:bg-primary border border-border rounded-lg p-6 shadow hover:shadow-2xl transition group">
            <h3 className="font-bold text-primary group-hover:text-white">{a}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
