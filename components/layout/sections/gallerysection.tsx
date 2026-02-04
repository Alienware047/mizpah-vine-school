"use client";
import Image from "next/image";
import { useState } from "react";
import SectionWrapper from "../sectionwrapper";

const galleryImages = [
  {
    src: "/images/classroom.jpg",
    caption: "Classroom Learning",
    description: "Our students learn in a safe, modern, and engaging classroom environment.",
  },
  {
    src: "/images/playground.jpg",
    caption: "Playground & Sports",
    description: "Safe outdoor spaces for sports, recreation, and fun.",
  },
  {
    src: "/images/sports-event.jpg",
    caption: "Sports Events",
    description: "We encourage physical activity and team spirit through events.",
  },
  {
    src: "/images/science-lab.jpg",
    caption: "Science Lab",
    description: "Hands-on experiments to spark curiosity and innovation.",
  },
  {
    src: "/images/music-class.jpg",
    caption: "Music & Arts",
    description: "Cultivating creativity through arts and music programs.",
  },
  {
    src: "/images/teachers.jpg",
    caption: "Our Dedicated Teachers",
    description: "Highly qualified educators committed to student growth.",
  },
  {
    src: "/images/students-event.jpg",
    caption: "Students in Action",
    description: "Engaging activities that foster holistic development.",
  },
];

export default function GallerySection() {
  const [current, setCurrent] = useState(0);
  const [fullScreen, setFullScreen] = useState(false);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Gallery & Campus Life
        </h2>
        <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
          Explore our vibrant campus and see our students, teachers, and facilities in action.
        </p>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-2 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {galleryImages.map((item, idx) => (
          <div
            key={idx}
            className="relative w-full h-60 sm:h-72 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
          >
            <Image src={item.src} alt={item.caption} fill className="object-cover" />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 transition-opacity duration-500 group-hover:opacity-0">
              <h3 className="text-white font-semibold text-lg">{item.caption}</h3>
              <p className="text-white text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet Carousel */}
      <div className="lg:hidden relative max-w-md mx-auto px-4 sm:px-6">
        <div
          className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer"
          onClick={() => setFullScreen(true)}
        >
          <Image
            src={galleryImages[current].src}
            alt={galleryImages[current].caption}
            fill
            className="object-cover"
          />

          {/* Caption Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg">
              {galleryImages[current].caption}
            </h3>
            <p className="text-white text-sm mt-1">{galleryImages[current].description}</p>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === current ? "bg-primary" : "bg-muted/50"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Modal for Mobile */}
      {fullScreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute top-6 right-6 text-white text-2xl font-bold z-50"
            onClick={() => setFullScreen(false)}
            aria-label="Close"
          >
            ×
          </button>

          <div className="relative w-full max-w-lg h-[80vh]">
            <Image
              src={galleryImages[current].src}
              alt={galleryImages[current].caption}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-bold text-lg">{galleryImages[current].caption}</h3>
              <p className="text-sm">{galleryImages[current].description}</p>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 flex items-center justify-center rounded-full"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
