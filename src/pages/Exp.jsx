import { useState } from "react";

// ---- design tokens (matches Hero.jsx so the two sections read as one system) ----
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

const EXPERIENCE = {
  date: "Jan 2026 — Apr 2026",
  role: "Backend Developer Intern",
  company: "Glory Quick IT Solutions",
  description:
    "Developed backend services and REST APIs for internal software systems and contributed to CRM-based platforms supporting business workflow automation.",
  responsibilities: [
    "Developed and maintained backend services",
    "Built and integrated REST APIs",
    "Worked on CRM modules and business logic",
    "Implemented data validation and processing logic",
    "Collaborated with frontend developers for API integration",
  ],
};

const Experience = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      className="w-full px-6 py-24 md:px-14 lg:px-20"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: FONTS.display }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="mx-auto max-w-4xl">
        {/* ---------------- Section heading ---------------- */}
        <p
          className="mb-3 text-sm tracking-widest"
          style={{ fontFamily: FONTS.mono, color: COLORS.green }}
        >
          EXPERIENCE
        </p>
        <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
          Where I've Worked
        </h2>

        {/* ---------------- Timeline ---------------- */}
        <div
          className="relative pl-8 md:pl-12"
          style={{ borderLeft: `1px solid ${COLORS.border}` }}
        >
          <span
            className="absolute -left-[7px] top-2 h-3 w-3 rounded-full"
            style={{
              backgroundColor: COLORS.green,
              boxShadow: `0 0 0 4px ${COLORS.bg}, 0 0 12px 2px rgba(62, 242, 160, 0.35)`,
            }}
          />

          <div
            className="rounded-xl p-6 transition-all duration-300 sm:p-8"
            style={{
              backgroundColor: hovered ? COLORS.panel : "transparent",
              border: `1px solid ${hovered ? COLORS.panelBorder : "transparent"}`,
              transform: hovered ? "translateY(-2px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <p
              className="mb-3 text-sm"
              style={{ fontFamily: FONTS.mono, color: COLORS.green }}
            >
              {EXPERIENCE.date}
            </p>

            <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {EXPERIENCE.role}
            </h3>

            <p className="mt-1 text-base" style={{ color: COLORS.muted }}>
              {EXPERIENCE.company}
            </p>

            <p
              className="mt-6 max-w-2xl text-base leading-7"
              style={{ color: COLORS.muted }}
            >
              {EXPERIENCE.description}
            </p>

            <ul className="mt-6 space-y-3">
              {EXPERIENCE.responsibilities.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-base leading-6"
                  style={{ color: COLORS.muted }}
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: COLORS.green }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;