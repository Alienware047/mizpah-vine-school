"use client";
import Link from "next/link";

const steps = [
  { step: 1, title: "Submit Application", description: "Complete the online application form and provide required documents." },
  { step: 2, title: "Entrance Assessment", description: "Your child will participate in an assessment to evaluate readiness." },
  { step: 3, title: "Interview", description: "Meet our admissions team and discuss your child's needs." },
  { step: 4, title: "Admission Decision", description: "Receive confirmation and next steps for enrollment." },
];

const deadlines = [
  { term: "Term 1", date: "Jan 10, 2026" },
  { term: "Term 2", date: "May 5, 2026" },
  { term: "Term 3", date: "Sep 1, 2026" },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-primary/30 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white z-10">
          Admissions
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
      </section>

      {/* Steps to Apply */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
          How to Apply
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="bg-card border border-border hover:bg-primary rounded-lg p-6 shadow hover:shadow-2xl transition group cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary hover:bg-white hover:text-primary text-white font-bold mb-4">
                {s.step}
              </div>
              <h3 className="text-xl font-bold text-primary group-hover:text-white mb-2">{s.title}</h3>
              <p className="group-hover:text-white">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enrollment Deadlines */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-8">
            Enrollment Deadlines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {deadlines.map((d, idx) => (
              <div
                key={idx}
                className="bg-primary/10 border border-border rounded-lg p-6 shadow hover:bg-primary hover:text-white transition cursor-pointer"
              >
                <h3 className="font-bold mb-2">{d.term}</h3>
                <p className=" group-hover:text-white">{d.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          Ready to Join Us?
        </h2>
        <p className="text-muted mb-8 text-lg sm:text-xl">
          Take the next step in your child's education journey at Mizpah Vine Ark School.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/apply" className="btn-primary">
            Apply Now
          </Link>
          <Link href="/book-tour" className="btn-primary">
            Book a Tour
          </Link>
        </div>
      </section>

      {/* Optional FAQ / Requirements */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
          Requirements & FAQs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 shadow hover:shadow-2xl transition">
            <h3 className="font-bold text-primary mb-2">Documents Required</h3>
            <ul className="text-muted list-disc list-inside">
              <li>Birth Certificate</li>
              <li>Previous School Reports</li>
              <li>Passport-size Photos</li>
              <li>Vaccination Records</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 shadow hover:shadow-2xl transition">
            <h3 className="font-bold text-primary mb-2">Frequently Asked Questions</h3>
            <ul className="text-muted list-disc list-inside">
              <li>What is the application deadline?</li>
              <li>How do I schedule a school tour?</li>
              <li>Are there scholarship opportunities?</li>
              <li>What age groups are accepted?</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
