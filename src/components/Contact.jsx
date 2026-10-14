import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

const MESSAGE_LIMIT = 500;

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(formData.get("subject"));
    const body = encodeURIComponent(
      `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      className="mx-auto w-[min(1160px,calc(100%-48px))] border-t border-slate-200/80 pt-20 pb-24 scroll-mt-20"
      id="contact"
    >
      <SectionHeading eyebrow="Have an idea in mind?">Let&apos;s talk</SectionHeading>
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s discuss your project.
          </h3>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            I&apos;m open to opportunities and new ideas. Have a question or
            just want to say hi? Send me a message.
          </p>

          <a
            className="group mt-6 flex w-full max-w-lg items-center justify-between rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-black/30 hover:shadow-md"
            href={`mailto:${profile.email}`}
          >
            <div className="flex items-center gap-4">
              <span
                className="grid h-12 w-12 place-items-center rounded-xl bg-black text-white"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined">mail</span>
              </span>
              <div>
                <small className="block font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  Email me
                </small>
                <strong className="block text-base font-semibold text-slate-900">
                  {profile.email}
                </strong>
              </div>
            </div>
            <span
              className="material-symbols-outlined text-xl! text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
              aria-hidden="true"
            >
              arrow_outward
            </span>
          </a>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            Available for new projects
          </div>
        </div>

        <form
          className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Name
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 focus:outline-none"
                autoComplete="name"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 focus:outline-none"
                autoComplete="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
          </div>

          <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-600">
            Subject
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 focus:outline-none"
              name="subject"
              placeholder="Project inquiry"
              required
            />
          </label>

          <label className="mt-4 block text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span className="flex items-center justify-between">
              <span>Message</span>
              <span className="font-mono text-xs font-normal text-slate-400">
                {message.length} / {MESSAGE_LIMIT}
              </span>
            </span>
            <textarea
              className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-normal text-slate-900 placeholder:text-slate-400 focus:border-black focus:bg-white focus:ring-2 focus:ring-black/10 focus:outline-none"
              maxLength={MESSAGE_LIMIT}
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me a little about what you have in mind..."
              required
              rows="5"
              value={message}
            />
          </label>

          <button
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800 hover:shadow-md cursor-pointer"
            type="submit"
          >
            Open email app
            <span className="material-symbols-outlined text-lg!" aria-hidden="true">
              send
            </span>
          </button>

          <p className="mt-3 text-center text-xs text-slate-500">
            This form opens your default email app to send the message.
          </p>
        </form>
      </div>
    </section>
  );
}
