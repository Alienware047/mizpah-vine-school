"use client";
import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--background))] border-t border-[rgb(var(--border))] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Mizpah Vine Ark School Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="text-lg sm:text-xl font-bold text-[rgb(var(--primary))]">
              Mizpah Vine Ark School
            </span>
          </Link>
          <p className="text-[rgb(var(--foreground)/0.8)] text-sm">
            Empowering students with excellence, innovation, and character.
          </p>
          <div className="flex gap-3 mt-2">
            <Link
              href="#"
              className="text-[rgb(var(--foreground)/0.7)] hover:text-[rgb(var(--primary))] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-[rgb(var(--foreground)/0.7)] hover:text-[rgb(var(--primary))] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-[rgb(var(--foreground)/0.7)] hover:text-[rgb(var(--primary))] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[rgb(var(--foreground))] font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/admissions"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-[rgb(var(--foreground))] font-semibold mb-3">Resources</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/blog"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="hover:text-[rgb(var(--primary))] transition-colors"
              >
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[rgb(var(--foreground))] font-semibold mb-3">Contact</h3>
          <p className="text-[rgb(var(--foreground)/0.8)] text-sm">
            123 School Avenue, Accra, Ghana
          </p>
          <p className="text-[rgb(var(--foreground)/0.8)] text-sm">
            Phone:{" "}
            <Link
              href="tel:+233123456789"
              className="hover:text-[rgb(var(--primary))] transition-colors"
            >
              +233 123 456 789
            </Link>
          </p>
          <p className="text-[rgb(var(--foreground)/0.8)] text-sm">
            Email:{" "}
            <Link
              href="mailto:info@mizpahschool.com"
              className="hover:text-[rgb(var(--primary))] transition-colors"
            >
              info@mizpahschool.com
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[rgb(var(--border))] mt-8 py-4 text-center text-[rgb(var(--foreground)/0.7)] text-sm transition-colors">
        &copy; {new Date().getFullYear()} Mizpah Vine Ark School. All rights reserved.
      </div>
    </footer>
  );
}
