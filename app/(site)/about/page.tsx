"use client";
import Image from "next/image";
import Link from "next/link";

const values = [
  { title: "Excellence", description: "We pursue the highest academic and personal standards." },
  { title: "Discipline", description: "Fostering responsibility, respect, and integrity." },
  { title: "Holistic Development", description: "Nurturing mind, body, and character." },
  { title: "Innovation", description: "Encouraging creativity and critical thinking." },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-primary/30 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white z-10">
          About Mizpah Vine Ark School
        </h1>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50"></div>
      </div>
      {/* School Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/school-building.jpg"
            alt="Mizpah Vine Ark School Building"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our History</h2>
          <p className="text-muted mb-4 text-lg sm:text-xl">
            Founded with a commitment to academic excellence and holistic development, Mizpah Vine Ark School has nurtured generations of students to become confident, responsible, and ethical leaders.
          </p>
          <p className="text-muted mb-6 text-lg sm:text-xl">
            Our rich history reflects dedication to both academic achievements and character formation, emphasizing integrity, discipline, and creativity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Mission</h3>
            <p className="text-muted text-lg sm:text-xl">
              To provide a nurturing and challenging environment where every child thrives academically, socially, and morally.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-2">Our Vision</h3>
            <p className="text-muted text-lg sm:text-xl">
              To be a leading international school recognized for excellence, innovation, and character development.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, idx) => (
            <div
              key={idx}
              className="bg-card hover:bg-primary border border-border rounded-lg p-6 shadow hover:shadow-2xl transition group cursor-pointer"
            >
              <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-white">{v.title}</h4>
              <p className=" group-hover:text-white">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Principal's Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center gap-12 bg-card border-t border-border shadow-lg">
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/images/principal.jpg"
            alt="Principal of Mizpah Vine Ark School"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Message from the Principal</h2>
          <p className="text-muted mb-4 text-lg sm:text-xl">
            Welcome to Mizpah Vine Ark School! We are committed to providing an environment that nurtures academic excellence, creativity, and character development. Our dedicated faculty ensures every student is supported to reach their full potential.
          </p>
          <p className="text-muted mb-6 text-lg sm:text-xl">
            Join us on this exciting journey of learning, growth, and holistic development.
          </p>
          <Link href="/admissions" className="btn-primary">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}
