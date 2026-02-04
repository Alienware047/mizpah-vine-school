import type { Metadata } from "next";
import Gallery from "@/components/gallery/gallery";

export const metadata: Metadata = {
  title: "Gallery | Mizpah Vine Ark School",
  description:
    "Explore moments from classrooms, playgrounds, events, sports, arts, and teachers at Mizpah Vine Ark School.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our School Gallery
          </h1>

          <p className="text-muted max-w-2xl mx-auto text-lg">
            Discover learning, creativity, and joyful moments captured
            across our classrooms, playgrounds, and school activities.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-background">
        <Gallery />
      </section>
    </main>
  );
}
