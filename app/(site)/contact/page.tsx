"use client";
import { useState } from "react";
import { MailOpen, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/layout/sectionwrapper";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Integration with backend needed)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    
    <div className="bg-background py-16">

     {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/school-campus.jpg" // replace with your hero image
          alt="Mizpah Vine Ark School Campus"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Welcome to Mizpah Vine Ark School
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 drop-shadow-md">
          Nurturing excellence, character, and holistic development for tomorrow’s leaders.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/admissions"
            className="btn-primary px-6 py-3 font-semibold text-white hover:bg-primary-hover transition"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-primary transition"
          >
            Book a Tour
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get in Touch
          </h2>
          <p className="text-muted text-lg">
            We’d love to hear from you! Whether you have questions about admissions, programs, or campus tours, reach out and we’ll respond promptly.
          </p>

          <div className="space-y-4">
            <ContactItem icon={<Phone className="w-6 h-6" />} text="+233 50 389 2532" />
            <ContactItem icon={<MailOpen className="w-6 h-6" />} text="info@mvaschoolgh.com" />
            <ContactItem icon={<MapPin className="w-6 h-6" />} text="MCVX+GV, Kumasi, Ghana" />
          </div>

          <div className="flex items-center gap-4 mt-4">
            <SocialIcon icon={<Instagram />} link="#" />
            <SocialIcon icon={<Facebook />} link="#" />
            <SocialIcon icon={<Twitter />} link="#" />
          </div>

          
        </div>

        {/* Right: Contact Form */}
        <div className="bg-card rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border border-border rounded-md bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition"
            />
            <button
              type="submit"
              className="btn-primary w-full text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* Google Map */}
          <div className="mt-6 w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Mizpah Vine Ark School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.123456789!2d-1.553456!3d6.688123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ac123456789ab%3A0xabcdef123456!2sMizpah%20Vine%20Ark%20School!5e0!3m2!1sen!2sgh!4v1699999999999!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
    </div>
    
   
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-foreground">
      <div className="p-2 bg-primary rounded-full text-white">{icon}</div>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function SocialIcon({ icon, link }: { icon: React.ReactNode; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-primary text-white hover:bg-primary-hover transition"
    >
      {icon}
    </a>
  );
}
