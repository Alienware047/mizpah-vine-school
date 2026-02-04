"use client";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "../theme/themetoogle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/90 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 min-w-[150px] flex-shrink-0"
        >
          {/* Logo Image */}
          <img
            src="/logo.png"
            alt="Mizpah Vine Ark School Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          />
          {/* Logo Text */}
          <span className="text-lg sm:text-2xl font-bold text-primary whitespace-nowrap">
            Mizpah Vine Ark School
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/admissions">Admissions</NavLink>
          <NavLink href="/academics">Academics</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Right-side actions */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 border border-border rounded-md text-foreground hover:text-primary hover:border-primary transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-background/95 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          <MobileLink href="/" onClick={() => setOpen(false)}>
            Home
          </MobileLink>
          <MobileLink href="/about" onClick={() => setOpen(false)}>
            About
          </MobileLink>
          <MobileLink href="/admissions" onClick={() => setOpen(false)}>
            Admissions
          </MobileLink>
          <MobileLink href="/academics" onClick={() => setOpen(false)}>
            Academics
          </MobileLink>
          <MobileLink href="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </MobileLink>
          <MobileLink href="/contact" onClick={() => setOpen(false)}>
            Contact
          </MobileLink>
        </div>
        <div className="flex justify-center mt-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-foreground font-medium relative px-2 py-1 hover:text-primary transition whitespace-nowrap"
    >
      {/* Underline animation */}
      <span className="after:content-[''] after:block after:h-[2px] after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left">
        {children}
      </span>
    </Link>
  );
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-foreground font-medium py-2 px-3 rounded-md hover:bg-primary hover:text-white transition text-center"
    >
      {children}
    </Link>
  );
}
