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
    <section className="content-section section-wrap contact-section" id="contact">
      <SectionHeading eyebrow="Have an idea in mind?">Let&apos;s talk</SectionHeading>
      <div className="contact-layout">
        <div className="contact-copy">
          <h3>Let&apos;s discuss your project.</h3>
          <p>
            I&apos;m open to opportunities and new ideas. Have a question or
            just want to say hi? Send me a message.
          </p>
          <a className="email-link" href={`mailto:${profile.email}`}>
            <span className="email-icon material-symbols-outlined" aria-hidden="true">
              mail
            </span>
            <span>
              <small>Email me</small>
              <strong>{profile.email}</strong>
            </span>
            <span className="material-symbols-outlined email-arrow" aria-hidden="true">
              arrow_outward
            </span>
          </a>
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            Available for new projects
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <input
                autoComplete="name"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                autoComplete="email"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" placeholder="Project inquiry" required />
          </label>
          <label>
            <span className="message-label">
              Message
              <small>
                {message.length} / {MESSAGE_LIMIT}
              </small>
            </span>
            <textarea
              maxLength={MESSAGE_LIMIT}
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Tell me a little about what you have in mind..."
              required
              rows="5"
              value={message}
            />
          </label>
          <button className="button button-primary submit-button" type="submit">
            Open email app
            <span className="material-symbols-outlined" aria-hidden="true">
              send
            </span>
          </button>
          <p className="form-note">
            This form opens your default email app to send the message.
          </p>
        </form>
      </div>
    </section>
  );
}
