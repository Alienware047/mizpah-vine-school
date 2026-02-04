"use client";

import Image from "next/image";

/* =========================
   APPLY PAGE
========================= */
export default function ApplyPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection />
      <AdmissionsSteps />
      <ApplicationForm />
      <BottomCTA />
    </div>
  );
}

/* =========================
   HERO SECTION
========================= */
function HeroSection() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/students-happy.jpg"
        alt="Happy students at Mizpah Vine Ark School"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-3xl text-center px-6 text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Start Your Child’s Journey With Us
        </h1>

        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Apply to Mizpah Vine Ark School and give your child a strong academic,
          moral, and holistic foundation.
        </p>

        <a
          href="#apply-form"
          className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover px-8 py-4 rounded-lg font-semibold transition"
        >
          Start Application
        </a>
      </div>
    </section>
  );
}

/* =========================
   ADMISSIONS STEPS
========================= */
function AdmissionsSteps() {
  const steps = [
    {
      title: "Submit Application",
      description:
        "Fill out the online application form with your child’s basic information.",
    },
    {
      title: "Assessment & Interview",
      description:
        "The child and parents are invited for a short assessment and discussion.",
    },
    {
      title: "Admission Offer",
      description:
        "Successful applicants receive an official admission offer and next steps.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Admissions Process
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card p-8 text-center transition group hover:bg-primary hover:text-white"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-xl font-bold text-primary group-hover:text-white">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className=" group-hover:text-white/90">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   APPLICATION FORM
========================= */
function ApplicationForm() {
  return (
    <section
      id="apply-form"
      className="py-20 bg-card border-t border-border"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          New Student Application Form
        </h2>

        <form className="grid gap-6">
          {/* Child Details */}
          <input
            type="text"
            placeholder="Child's Full Name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="date"
            placeholder="Date of Birth"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>

          <select
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Class / Level</option>
            <option>Early Years</option>
            <option>Primary</option>
            <option>Junior High</option>
          </select>

          <input
            type="text"
            placeholder="Previous School (if any)"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Parent / Guardian Details */}
          <input
            type="text"
            placeholder="Parent / Guardian Name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Emergency Contact */}
          <input
            type="text"
            placeholder="Emergency Contact Name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Emergency Contact Phone"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Medical Info */}
          <textarea
            rows={3}
            placeholder="Medical Conditions / Allergies (if any)"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Preferred Start Date */}
          <input
            type="date"
            placeholder="Preferred Start Date"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Additional Info */}
          <textarea
            rows={4}
            placeholder="Additional information (optional)"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Consent */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
            />
            <span>I agree to the school's policies and terms</span>
          </label>

          <button
            type="submit"
            className="btn-primary w-full py-4 text-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}



/* =========================
   BOTTOM CTA
========================= */
function BottomCTA() {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Need More Information?
        </h3>

        <p className="text-muted mb-8">
          Speak to our admissions team or book a school tour.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="btn-primary">
            Book a Tour
          </a>

          <a
            href="/contact"
            className="px-6 py-3 rounded-lg border border-border hover:bg-border transition"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
