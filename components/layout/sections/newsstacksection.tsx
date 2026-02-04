"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
// import ScrollStack from "@/components/ui/ScrollStack";

const events = [
  {
    title: "Science Fair 2026",
    date: "Feb 15, 2026",
    description:
      "Students showcase their projects and innovations, highlighting creativity, problem-solving, and scientific excellence.",
    image: "/images/science-fair.jpg",
  },
  {
    title: "Sports Day",
    date: "Mar 12, 2026",
    description:
      "Our annual sports competition promotes teamwork, discipline, and physical wellness across all grades.",
    image: "/images/sports-day.jpg",
  },
  {
    title: "Art Exhibition",
    date: "Apr 5, 2026",
    description:
      "A vibrant showcase of student creativity through painting, sculpture, and mixed media.",
    image: "/images/art-exhibition.jpg",
  },
];

export default function NewsStackSection() {
  const [activeEvent, setActiveEvent] = useState<(typeof events)[0] | null>(null);

  return (
    <section className="relative bg-background overflow-visible">
      {/* Header */}
      <div className="md:sticky md:top-0 z-20 pt-20 pb-10 text-center bg-background/80 backdrop-blur">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          News & Events
        </h2>
        <p className="text-muted mt-2 text-lg">
          Stay updated with our latest happenings
        </p>
      </div>

      {/* Scroll Area */}
      <div className="relative min-h-[220vh] pt-24 pb-40">
        
          {events.map((event, idx) => (
            <div
              key={idx}
              onClick={() => setActiveEvent(event)}
              className="grid md:grid-cols-2 gap-8 items-center cursor-pointer"
            >
              <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-sm text-muted mb-2">{event.date}</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {event.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {event.description}
                </p>
                <span className="mt-4 inline-block font-semibold text-primary">
                  Click to view details →
                </span>
              </div>
            </div>
          ))}
        
      </div>

      {/* Modal */}
      {activeEvent && (
        <div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveEvent(null)}
        >
          <div
            className="relative bg-background w-full max-w-3xl rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveEvent(null)}
              className="absolute top-4 right-4 bg-background/80 rounded-full p-2 hover:bg-background transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80">
              <Image
                src={activeEvent.image}
                alt={activeEvent.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <p className="text-sm text-muted">
                {activeEvent.date}
              </p>
              <h3 className="text-3xl font-bold mt-2">
                {activeEvent.title}
              </h3>
              <p className="mt-4 text-muted leading-relaxed">
                {activeEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
