"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "@/lib/gallery-data";
import { GalleryCategory } from "@/types/gallery";
import ScrollStack from "@/components/ui/ScrollStack";
const categories: GalleryCategory[] = [
  "all",
  "classrooms",
  "playground",
  "events",
  "sports",
  "arts",
  "teachers",
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryCategory>("all");

  const filtered =
    active === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            School Gallery
          </h2>
          <p className="text-muted mt-3">
            A glimpse into life at our school
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border
                ${
                  active === cat
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-card text-foreground border-border hover:bg-primary/10"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <ScrollStack >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border shadow-sm"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-background text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-background/80 text-sm capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        </ScrollStack>
      </div>
    </section>
  );
}
