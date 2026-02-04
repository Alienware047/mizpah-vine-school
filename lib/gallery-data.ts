export type GalleryCategory =
  | "all"
  | "classrooms"
  | "playground"
  | "events"
  | "sports"
  | "arts"
  | "teachers";

export interface GalleryItem {
  id: string;
  img: string;
  title: string;
  description: string;
  category: GalleryCategory;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "classroom-1",
    img: "/images/classroom.jpg",
    title: "Modern Classrooms",
    description: "Well-equipped and student-friendly learning spaces",
    category: "classrooms",
    height: 260,
  },
  {
    id: "playground-1",
    img: "/images/playground.jpg",
    title: "Safe Playground",
    description: "Outdoor fun and physical development",
    category: "playground",
    height: 300,
  },
  {
    id: "sports-1",
    img: "/images/sports-event.jpg",
    title: "Sports Activities",
    description: "Teamwork, fitness, and discipline",
    category: "sports",
    height: 240,
  },
  {
    id: "arts-1",
    img: "/images/music-class.jpg",
    title: "Creative Arts",
    description: "Music, art, and self-expression",
    category: "arts",
    height: 280,
  },
  {
    id: "teachers-1",
    img: "/images/teachers.jpg",
    title: "Dedicated Teachers",
    description: "Qualified and passionate educators",
    category: "teachers",
    height: 250,
  },
  {
    id: "events-1",
    img: "/images/students-event.jpg",
    title: "School Events",
    description: "Celebrations and special moments",
    category: "events",
    height: 290,
  },
];
