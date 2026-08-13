import { useState } from "react";

// ---- design tokens (matches Hero.jsx / Experience.jsx / Education.jsx / Projects.jsx) ----
const COLORS = {
  bg: "#0a0a0b",
  panel: "#101114",
  panelBorder: "#1e2128",
  border: "#20242c",
  text: "#f2f2f0",
  muted: "#8b93a1",
  mutedDim: "#565d68",
  green: "#3ef2a0",
};

const FONTS = {
  display: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

const SKILLS = [
  {
    title: "Languages",
    items: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "AI / ML",
    items: ["Machine Learning", "Data Science", "Reinforcement Learning", "Pandas", "NumPy"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Jupyter Notebook"],
  },
];

const SkillCard = ({ category }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-xl p-6 transition-all duration-300 sm:p-7"
      style={{
        backgroundColor: COLORS.panel,
        border: `1px solid ${hovered ? COLORS.green : COLORS.panelBorder}`,
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3
        className="mb-5 text-sm tracking-widest"
        style={{ fontFamily: FONTS.mono, color: COLORS.green }}
      >
        {category.title.toUpperCase()}
      </h3>

      <div className="flex flex-wrap gap-2.5">
        {category.items.map((item) => (
          <span
            key={item}
            className="rounded-full px-3.5 py-1.5 text-sm"
            style={{
              border: `1px solid ${COLORS.border}`,
              color: COLORS.muted,
              fontFamily: FONTS.mono,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section
      className="w-full px-6 py-24 md:px-14 lg:px-20"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: FONTS.display }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="mx-auto max-w-6xl">
        <p
          className="mb-3 text-sm tracking-widest"
          style={{ fontFamily: FONTS.mono, color: COLORS.green }}
        >
          SKILLS
        </p>

        <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;