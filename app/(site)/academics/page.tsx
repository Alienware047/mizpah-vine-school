"use client";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Early Years",
    description: "Nurturing young minds through play-based learning and foundational skills.",
    image: "/images/early-years.jpg",
    bullets: ["Foundational literacy & numeracy", "Social and emotional development", "Creative play & exploration"],
  },
  {
    title: "Primary",
    description: "Building strong academic foundations with emphasis on critical thinking and character.",
    image: "/images/primary.jpg",
    bullets: ["STEM introduction", "Arts & music", "Physical education"],
  },
  {
    title: "Junior High",
    description: "Preparing students for higher education and global citizenship.",
    image: "/images/secondary.jpg",
    bullets: ["Advanced STEM courses", "Languages & humanities", "Sports & extracurriculars"],
  },
];

const specialPrograms = [
  { title: "STEM", image: "/images/stem.jpg" },
  { title: "Arts", image: "/images/arts.jpg" },
  { title: "Sports", image: "/images/sports.jpg" },
  { title: "Languages", image: "/images/languages.jpg" },
];

export default function AcademicsPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 bg-primary/30 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white z-10">
          Academics & Programs
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
      </section>

      {/* Programs Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
          Our Programs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, idx) => (
            <div
              key={idx}
              className="bg-card border hover:bg-primary border-border rounded-lg overflow-hidden shadow hover:shadow-2xl transition group cursor-pointer"
            >
              <div className="relative w-full h-48 sm:h-56">
                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary group-hover:text-white mb-2">{p.title}</h3>
                <p className="group-hover:text-white mb-4">{p.description}</p>
                <ul className="list-disc list-inside group-hover:text-white">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Programs */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
            Special Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrograms.map((sp, idx) => (
              <div
                key={idx}
                className="relative w-full h-100 rounded-lg overflow-hidden shadow hover:shadow-2xl transition group cursor-pointer"
              >
                <Image src={sp.image} alt={sp.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                  <h3 className="text-white font-bold text-lg sm:text-xl">{sp.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
          Explore More
        </h2>
        <p className="text-muted mb-8 text-lg sm:text-xl">
          Take the next step in your child's academic journey at Mizpah Vine Ark School.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/admissions" className="btn-primary">
            Apply Now
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
