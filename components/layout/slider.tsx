"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
}

interface SliderProps {
  slides: Slide[
    
  ];
  interval?: number; // auto-play interval in ms
}

export default function Slider({ slides, interval = 5000 }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [current, interval]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Swipe handling
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let isDragging = false;

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].clientX;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const diff = startX - e.touches[0].clientX;
      if (diff > 50) {
        nextSlide();
        isDragging = false;
      } else if (diff < -50) {
        prevSlide();
        isDragging = false;
      }
    };
    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Desktop drag support
    let mouseDown = false;
    let mouseStartX = 0;

    const handleMouseDown = (e: MouseEvent) => {
      mouseDown = true;
      mouseStartX = e.clientX;
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseDown) return;
      const diff = mouseStartX - e.clientX;
      if (diff > 50) {
        nextSlide();
        mouseDown = false;
      } else if (diff < -50) {
        prevSlide();
        mouseDown = false;
      }
    };
    const handleMouseUp = () => {
      mouseDown = false;
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mouseleave", handleMouseUp);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);

      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mouseleave", handleMouseUp);
    };
  }, [current]);

  if (slides.length === 0) return null;

  return (
    <section
      ref={sliderRef}
      className="relative w-full overflow-hidden h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="relative w-full flex-shrink-0 h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover w-full h-full"
              priority={slide.id === 1}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center px-4 sm:px-6 lg:px-20 max-w-3xl text-white">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg mb-6">{slide.description}</p>
                {slide.ctaText && slide.ctaLink && (
                  <a
                    href={slide.ctaLink}
                    className="inline-block bg-primary hover:bg-primary-hover text-white font-medium px-6 py-3 rounded-md transition"
                  >
                    {slide.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Refined Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx === current
                ? "bg-primary scale-110"
                : "bg-white/50 scale-90 hover:scale-105"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
