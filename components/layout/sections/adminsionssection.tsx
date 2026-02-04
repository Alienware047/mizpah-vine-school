"use client";
import { Calendar, CheckCircle, UserPlus } from "lucide-react";
import SectionWrapper from "../sectionwrapper";
import Link from "next/link";

export default function AdmissionsSection() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 mx-auto mb-4" />,
      title: "Register Online",
      description: "Complete our simple online registration form to begin the admission process.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 mx-auto mb-4" />,
      title: "Submit Documents",
      description: "Provide necessary documents including previous report cards and birth certificate.",
    },
    {
      icon: <Calendar className="w-8 h-8 mx-auto mb-4" />,
      title: "Schedule Assessment / Tour",
      description: "Book an assessment or campus tour at a convenient time for your family.",
    },
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background shapes */}
      {/* <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Admissions Process
          </h2>
          <p className="text-muted text-lg sm:text-xl max-w-2xl mx-auto">
            Follow these simple steps to enroll your child at Mizpah Vine Ark School.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-primary-hover hover:text-background transition transform cursor-pointer"
            >
              <div className="text-primary group-hover:text-background transition-colors">
                {step.icon}
              </div>
              <h3 className="font-bold text-xl mb-2 group-hover:text-background transition-colors">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed group-hover:text-background transition-colors">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/apply"
            className="btn-primary hover:bg-primary-hover transition text-white"
          >
            Apply Now
          </Link>
          <Link
            href="/tour"
            className="btn-primary hover:bg-primary-hover transition text-white"
          >
            Book a Tour
          </Link>
        </div>

        {/* Enrollment Deadlines */}
        <div className="mt-10 text-center">
          <p className="text-muted text-lg sm:text-xl">
            Next Enrollment Deadline: <span className="font-semibold text-primary">March 31, 2026</span>
          </p>
        </div>
      </div>
    </div>
  );
}
