import { useState } from "react";

// ---- design tokens (matches Hero.jsx / Experience.jsx) ----
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

const EDUCATION = [
  {
    date: "2023 — Expected June 2027",
    degree: "B.E. in Computer Engineering",
    institution: "SCTR's Pune Institute of Computer Technology (PICT)",
    metric: "CGPA: 8.76 / 10.0",
    current: true,
  },
  {
    date: "2021 — 2023",
    degree: "HSC (Class XII)",
    institution: "Dr. D.Y. Patil College, Kolhapur",
    metric: "Percentage: 76.67%",
    current: false,
  },
  {
    date: "2020 — 2021",
    degree: "SSC (Class X)",
    institution: "Shri Vasantrao Jaywantrao Deshmukh High School",
    metric: "Percentage: 91.20%",
    current: false,
  },
];

const EducationItem = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative">
      <span
        className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full md:-left-[51px]"
        style={{
          backgroundColor: item.current ? COLORS.green : COLORS.mutedDim,
          boxShadow: item.current
            ? `0 0 0 4px ${COLORS.bg}, 0 0 12px 2px rgba(62, 242, 160, 0.35)`
            : `0 0 0 4px ${COLORS.bg}`,
        }}
      />

      <div
        className="rounded-lg p-4 transition-all duration-300 sm:p-5"
        style={{
          backgroundColor: hovered ? COLORS.panel : "transparent",
          border: `1px solid ${hovered ? COLORS.panelBorder : "transparent"}`,
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p
          className="text-sm"
          style={{
            fontFamily: FONTS.mono,
            color: item.current ? COLORS.green : COLORS.muted,
          }}
        >
          {item.date}
        </p>

        <h3
          className="mt-2 tracking-tight"
          style={{
            color: COLORS.text,
            fontSize: item.current ? "1.5rem" : "1.25rem",
            fontWeight: item.current ? 700 : 600,
          }}
        >
          {item.degree}
        </h3>

        <p className="mt-1 text-base" style={{ color: COLORS.muted }}>
          {item.institution}
        </p>

        <p className="mt-3 text-sm" style={{ color: COLORS.mutedDim }}>
          {item.metric}
        </p>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section
      className="w-full px-6 py-24 md:px-14 lg:px-20"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: FONTS.display }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="mx-auto max-w-4xl">
        <p
          className="mb-3 text-sm tracking-widest"
          style={{ fontFamily: FONTS.mono, color: COLORS.green }}
        >
          EDUCATION
        </p>
        <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
          My Education
        </h2>

        <div
          className="space-y-10 pl-8 md:pl-12"
          style={{ borderLeft: `1px solid ${COLORS.border}` }}
        >
          {EDUCATION.map((item, i) => (
            <EducationItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;