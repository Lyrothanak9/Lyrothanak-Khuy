import SectionHeading from "./SectionHeading.jsx";
import { skills } from "../data/portfolio.js";

export default function Skills() {
  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 py-20 scroll-mt-20"
      id="skills"
    >
      <SectionHeading eyebrow="Tools of the trade">Technical skills</SectionHeading>
      <p className="-mt-6 mb-8 text-sm text-slate-600">
        Technologies I use to turn ideas into working software.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ name, icon }, index) => (
          <article
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-black/30 hover:shadow-md"
            key={name}
          >
            <span className="font-mono text-xs font-semibold text-slate-400">
              0{index + 1}
            </span>
            <span
              className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-slate-100 text-slate-800 transition-colors group-hover:bg-black group-hover:text-white"
              aria-hidden="true"
            >
              <span className="material-symbols-outlined text-xl">{icon}</span>
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              {name}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
