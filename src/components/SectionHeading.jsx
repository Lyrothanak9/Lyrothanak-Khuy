export default function SectionHeading({ children, eyebrow }) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <div>
        {eyebrow && (
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-black">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {children}
        </h2>
      </div>
    </div>
  );
}
