import SectionHeading from "./SectionHeading.jsx";
import SkillCard from "./SkillCard.jsx";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "PHP", "Kotlin", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Flutter", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Supabase"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Figma", "Linux"],
  },
];

export default function Skills() {
  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 py-16 sm:py-20 scroll-mt-20"
      id="skills"
    >
      <SectionHeading eyebrow="Tools of the trade">Technical skills</SectionHeading>
      <p className="-mt-6 mb-12 text-sm text-slate-600">
        Technologies, frameworks, and databases I use to build robust modern software.
      </p>

      {/* Categorized Skills Grid */}
      <div className="flex flex-col gap-10 sm:gap-12">
        {skillCategories.map(({ title, skills }) => (
          <div key={title} className="flex flex-col gap-3.5 sm:gap-4">
            {/* Category Title */}
            <h3 className="font-sans text-base sm:text-lg font-bold tracking-tight text-slate-900">
              {title}
            </h3>

            {/* Pill Badges Container using extracted SkillCard */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {skills.map((name) => (
                <SkillCard key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
