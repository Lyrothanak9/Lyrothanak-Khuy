export const profile = {
  name: "Khuy Lyrothanak",
  role: "Software Engineer",
  email: "lyrothanak2005@gmail.com",
  phone: "010 484 816",
  location: "Phnom Penh, Cambodia",
  portrait: "/assets/avatar.png",
  github: "https://github.com/Lyrothanak9",
};

export const skills = [
  { name: "PHP", icon: "code" },
  { name: "Kotlin", icon: "terminal" },
  { name: "Flutter", icon: "flutter_dash" },
  { name: "Python", icon: "data_object" },
  { name: "MySQL", icon: "database" },
  { name: "Git", icon: "hub" },
  { name: "Linux", icon: "settings_ethernet" },
];

export const projects = [
  {
    name: "Dino Run 3D",
    tagline: "THREE.JS · 2026",
    category: "3D GAME",
    image: "/assets/dino-run-3d.png",
    description:
      "A fully 3D reimagining of the classic endless runner game. Jump, duck, and dodge obstacles as you speed through the desert.",
    technologies: ["Three.js", "JavaScript", "WebGL", "Vite"],
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Dynamic procedural terrain generation with obstacle collision meshes",
      "Custom vertex & fragment shaders for desert lighting and heat distortion",
      "Smooth 60 FPS mobile and desktop WebGL performance",
    ],
  },
  {
    name: "Find Book",
    tagline: "REACT JS · 2024",
    category: "WEB APPLICATION",
    description:
      "A book discovery application built with React and the Google Books API.",
    technologies: ["React JS", "JavaScript", "Google API"],
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Real-time volume querying via Google Books API",
      "Debounced search with cached responses",
      "Client-side bookmarking and responsive reading list",
    ],
  },
  {
    name: "Middleware",
    tagline: "NODE.JS · 2024",
    category: "BACKEND API",
    description:
      "A backend middleware project built with Node.js, MongoDB, and TypeScript.",
    technologies: ["Node.js", "MongoDB", "TypeScript"],
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Modular Express middleware pipeline with TypeScript",
      "JWT authorization with refresh token rotation",
      "Zod schema validation and MongoDB indexing",
    ],
  },
  {
    name: "POJOEC",
    tagline: "GO · KAFKA · 2024",
    category: "DATA PIPELINE",
    description:
      "High-throughput ETL pipeline for large-scale sensor data processing and analysis.",
    technologies: ["Go", "Kafka", "Postgres"],
    liveUrl: "https://github.com/Lyrothanak9",
    repoUrl: "https://github.com/Lyrothanak9",
    highlights: [
      "Concurrent Go worker pool using channels and goroutines",
      "Kafka consumer group streaming and anomaly alerts",
      "Batch ingestion into TimescaleDB/PostgreSQL",
    ],
  },
];

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
