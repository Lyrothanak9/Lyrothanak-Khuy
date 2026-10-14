export const profile = {
  name: "Khuy Lyrothanak",
  role: "Software Engineer",
  email: "lyrothanak2005@gmail.com",
  phone: "010 484 816",
  location: "Phnom Penh, Cambodia",
  portrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoX3WXXEU7iMb4dPzKAjhSqeub3Gc5ocmS-8Ip8oTcWxYvG3LKq8BGnnUev9I5qkoAf0yi7vIAalBALhg-EGrKMlv_hZljTN1d3MT-Khx9R4tsA9Lo3BSGoBBIYXQbBjIQK_eQJ-5spFuWXBCqY6vH4VnnN_bCHpfEUQnNspISXUKLAjPR1Gg3BoZwG82dY3xJxFoQkJ3rSSwa-qoUogV08UNmvk_S8qRR2WvkAYaA2b4BJIyQAUHI0Hk3q7_uJls7ilIlqfI5fQ",
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
    name: "Find Book",
    description:
      "A book discovery application built with React and the Google Books API.",
    artwork: "book",
    artworkIcon: "menu_book",
    artworkLabel: "A little more to read",
    technologies: ["React JS", "JavaScript", "Google API"],
  },
  {
    name: "Middleware",
    description:
      "A backend middleware project built with Node.js, MongoDB, and TypeScript.",
    artwork: "middleware",
    artworkIcon: "account_tree",
    artworkLabel: "Request · Response · Next",
    technologies: ["Node.js", "MongoDB", "TypeScript"],
  },
  {
    name: "POJOEC",
    description:
      "High-throughput ETL pipeline for large-scale sensor data processing and analysis.",
    artwork: "pipeline",
    artworkIcon: "hub",
    artworkLabel: "Sensor data pipeline",
    technologies: ["Go", "Kafka", "Postgres"],
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
