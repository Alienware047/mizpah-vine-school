"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Ama Boateng",
    role: "Parent",
    quote:
      "Mizpah Vine Ark School has transformed my child’s learning experience. The teachers are exceptional!",
    avatar: "/images/parent1.jpg",
  },
  {
    name: "Kwame Mensah",
    role: "Student",
    quote:
      "I love the school’s STEM and arts programs. It’s fun and challenging at the same time!",
    avatar: "/images/student1.jpg",
  },
  {
    name: "Esi Adjei",
    role: "Parent",
    quote:
      "Safe, nurturing, and focused on holistic development. Couldn’t ask for a better environment.",
    avatar: "/images/parent2.jpg",
  },
];

const swipeThreshold = 80;

const wrapIndex = (index: number) =>
  ((index % testimonials.length) + testimonials.length) %
  testimonials.length;

export default function TestimonialsCarousel() {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const index = wrapIndex(page);

  const paginate = (dir: number) => {
    setPage(([prev]) => [prev + dir, dir]);
  };

  // Auto-slide (infinite)
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          What Parents & Students Say
        </h2>
        <p className="text-muted mt-3 text-lg">
          Real experiences from our school community
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative max-w-xl mx-auto px-4 min-h-[420px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            layout={false}
            custom={direction}
            initial={{ x: direction > 0 ? 260 : -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction < 0 ? 260 : -260, opacity: 0 }}
            transition={{
              x: { type: "spring", stiffness: 260, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.9}
            onDragEnd={(_, { offset }) => {
              if (offset.x > swipeThreshold) paginate(-1);
              if (offset.x < -swipeThreshold) paginate(1);
            }}
            className="w-full max-w-xl flex-shrink-0 bg-card hover:bg-primary hover:text-white border border-border rounded-2xl p-8 text-center shadow-lg"
          >
            {/* Quote Icon */}
            <div className="mx-auto mb-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
              <Quote className="w-5 h-5" />
            </div>

            {/* Avatar */}
            <div className="w-24 h-24 relative rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20">
              <Image
                src={testimonials[index].avatar}
                alt={testimonials[index].name}
                fill
                className="object-cover"
              />
            </div>

            {/* Quote */}
            <p className="mb-6 leading-relaxed">
              “{testimonials[index].quote}”
            </p>

            {/* Name */}
            <h4 className="font-semibold text-lg">
              {testimonials[index].name}
            </h4>
            <span className="text-sm ">
              {testimonials[index].role}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
