export default function SectionHeading({ children, eyebrow }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{children}</h2>
      </div>
    </div>
  );
}
