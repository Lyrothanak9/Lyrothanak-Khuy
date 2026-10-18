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
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-slate-50 p-5 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.08),0_6px_10px_-6px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-black/30 hover:shadow-xl"
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
