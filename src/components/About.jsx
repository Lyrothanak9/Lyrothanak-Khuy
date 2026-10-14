import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const facts = [
  { label: "Location", value: profile.location, icon: "location_on" },
  { label: "Phone", value: profile.phone, icon: "call" },
  { label: "Email", value: profile.email, icon: "mail" },
];

export default function About() {
  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 pt-8 pb-16 md:pt-10 md:pb-20 scroll-mt-20"
      id="about"
    >
      <SectionHeading eyebrow="A little about me">About me</SectionHeading>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.75fr)]">
        <div>
          <p className="text-xl font-medium leading-relaxed tracking-tight text-slate-800 sm:text-2xl">
            Hello! I&apos;m Khuy Lyrothanak, an IT Engineering student at the
            Royal University of Phnom Penh. I enjoy building applications and
            learning new technologies, especially in mobile app development.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            I care about clean, simple, and user-friendly design. My goal is to
            keep growing as a developer and create useful applications that
            make everyday tasks easier.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article
              className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md"
              id="education"
            >
              <span
                className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-black text-white"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined">school</span>
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Education
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  Information Technology Engineering
                  <br />
                  Royal University of Phnom Penh
                </p>
              </div>
            </article>

            <article className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:shadow-md">
              <span
                className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-black text-white"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined">my_location</span>
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  My objective
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  Contribute my technical skills to a professional team and help
                  create useful software.
                </p>
              </div>
            </article>
          </div>
        </div>

        <aside
          className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm"
          aria-labelledby="quick-contact-title"
        >
          <div className="flex items-center gap-2.5 text-base font-semibold text-slate-900">
            <span
              className="material-symbols-outlined text-black"
              aria-hidden="true"
            >
              contact_page
            </span>
            <h3 id="quick-contact-title">Quick contact</h3>
          </div>

          <dl className="mt-6 divide-y divide-slate-100">
            {facts.map(({ label, value, icon }) => (
              <div className="py-3 first:pt-0 last:pb-0" key={label}>
                <dt className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-wider text-slate-400">
                  <span className="material-symbols-outlined text-base!" aria-hidden="true">
                    {icon}
                  </span>
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-800">
                  {label === "Email" ? (
                    <a
                      href={`mailto:${value}`}
                      className="text-black font-semibold hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <a
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-black transition hover:gap-2 hover:text-neutral-700"
            href={`mailto:${profile.email}`}
          >
            Say hello
            <span className="material-symbols-outlined text-base!" aria-hidden="true">
              arrow_outward
            </span>
          </a>
        </aside>
      </div>
    </section>
  );
}
