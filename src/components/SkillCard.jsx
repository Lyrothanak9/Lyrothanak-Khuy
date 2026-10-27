/**
 * SkillIcon Component using Font Awesome (https://docs.fontawesome.com/)
 * Loads icons via Font Awesome 6 brand & solid sets with brand color styling.
 */
export function SkillIcon({ name }) {
  switch (name) {
    // ----------------------------------------------------
    // Official Font Awesome Brands (https://docs.fontawesome.com/web/use-with/react)
    // ----------------------------------------------------
    case "JavaScript":
    case "js":
      return <i className="fa-brands fa-js text-[#F7DF1E] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Python":
      return <i className="fa-brands fa-python text-[#387EB8] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "PHP":
      return <i className="fa-brands fa-php text-[#8892BF] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "HTML5":
      return <i className="fa-brands fa-html5 text-[#E34F26] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "CSS3":
      return <i className="fa-brands fa-css3-alt text-[#1572B6] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "React":
      return <i className="fa-brands fa-react text-[#61DAFB] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Node.js":
      return <i className="fa-brands fa-node-js text-[#68A063] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Git":
      return <i className="fa-brands fa-git-alt text-[#F05032] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "GitHub":
    case "Github":
    case "github":
      return <i className="fa-brands fa-github text-white text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "GitLab":
    case "Gitlab":
    case "gitlab":
      return <i className="fa-brands fa-gitlab text-[#FC6D26] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Figma":
      return <i className="fa-brands fa-figma text-[#F24E1E] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Linux":
      return <i className="fa-brands fa-linux text-[#FCC624] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Docker":
      return <i className="fa-brands fa-docker text-[#2496ED] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "AWS":
      return <i className="fa-brands fa-aws text-[#FF9900] text-base sm:text-lg flex-none" aria-hidden="true" />;

    // ----------------------------------------------------
    // Databases / Platforms (Font Awesome Solid Icons)
    // ----------------------------------------------------
    case "PostgreSQL":
      return <i className="fa-solid fa-database text-[#336791] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "MySQL":
      return <i className="fa-solid fa-database text-[#00758F] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Supabase":
    case "supabase":
      return <i className="fa-solid fa-bolt text-[#3ECF8E] text-base sm:text-lg flex-none" aria-hidden="true" />;

    case "Redis":
      return <i className="fa-solid fa-server text-[#DC382D] text-base sm:text-lg flex-none" aria-hidden="true" />;

    // ----------------------------------------------------
    // Technologies not available in Font Awesome Free Brand set:
    // Rendered with matching vector brand graphics
    // ----------------------------------------------------
    case "TypeScript":
      return (
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-none rounded-[3px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M6 10h6v2H9.5v7h-2.5v-7H4v-2h2zm7 3.5c.8-.5 1.8-.8 2.8-.8 1.5 0 2.4.7 2.4 1.8 0 1.1-.7 1.7-2 2.2-1.2.4-1.6.7-1.6 1.3 0 .5.5.9 1.4.9.8 0 1.5-.3 2.1-.8l1 1.5c-.8.8-2 1.3-3.2 1.3-2.3 0-3.7-1.3-3.7-3 0-1.4.9-2.3 2.6-2.9 1.1-.4 1.4-.6 1.4-1.1 0-.5-.4-.8-1.2-.8-.7 0-1.4.3-1.9.7l-1.1-1.5z" fill="#fff" />
        </svg>
      );

    case "Kotlin":
      return (
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-none" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#7F52FF" d="M2 2h20L12 12l10 10H2V2z" />
          <path fill="#C711E1" d="M22 22H2l10-10 10 10z" />
          <path fill="#E4485D" d="M2 2h10L2 12V2z" />
        </svg>
      );

    case "Flutter":
      return (
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-none" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#02569B" d="M14.3 2.5L4 12.8l3.2 3.2 13.5-13.5h-6.4z" />
          <path fill="#0175C2" d="M14.3 14.3L8.9 19.7l3.2 3.2 8.6-8.6h-6.4z" />
          <path fill="#29B6F6" d="M11.6 17l2.7-2.7 2.7 2.7-2.7 2.7z" />
        </svg>
      );

    case "Tailwind CSS":
      return (
        <svg className="w-4 h-4 sm:w-[18px] sm:h-[18px] flex-none" viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
          <path d="M12 6c-3 0-4.8 1.5-5.5 4.5 1.2-1.5 2.5-2 4-1.5 1 .3 1.6 1 2.3 1.8C14 12 15.3 13.5 18 13.5c3 0 4.8-1.5 5.5-4.5-1.2 1.5-2.5 2-4 1.5-1-.3-1.6-1-2.3-1.8C16 7.5 14.7 6 12 6zm-7 6c-3 0-4.8 1.5-5.5 4.5 1.2-1.5 2.5-2 4-1.5 1 .3 1.6 1 2.3 1.8C7 18 8.3 19.5 11 19.5c3 0 4.8-1.5 5.5-4.5-1.2 1.5-2.5 2-4 1.5-1-.3-1.6-1-2.3-1.8C9 13.5 7.7 12 5 12z" />
        </svg>
      );

    default:
      return <i className="fa-solid fa-code text-[#38bdf8] text-base sm:text-lg flex-none" aria-hidden="true" />;
  }
}

/**
 * Reusable SkillCard component representing an individual skill badge using Font Awesome.
 */
export default function SkillCard({ name, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-[#0c1222] border border-slate-800/90 shadow-xs hover:border-slate-700 hover:bg-[#11192e] transition-all duration-200 select-none ${className}`}
    >
      <SkillIcon name={name} />
      <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
        {name}
      </span>
    </div>
  );
}
