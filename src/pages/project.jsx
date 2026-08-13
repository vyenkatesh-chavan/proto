import { useState } from "react";

// ---- design tokens (matches Hero.jsx / Experience.jsx / Education.jsx) ----
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

// A link is only rendered if it's a real, non-placeholder URL.
const hasLink = (url) => Boolean(url && url !== "#");

const PROJECTS = [
  {
    number: "01",
    title: "Daily Vegies",
    description:
      "Farm-to-table supply chain platform with four roles: farmer, consumer, delivery, and admin. An ML model predicts crop prices for profitability, and direct farmer-to-consumer transactions help ensure fair pricing.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Flask", "Machine Learning"],
    details: [
      "Integrated a Flask-based ML model for crop price prediction.",
      "Implemented authentication and optimized backend APIs for order management.",
    ],
    github: "#",
    live: "https://dailyvegies.onrender.com/",
  },
  {
    number: "02",
    title: "Final Bid",
    description:
      "Real-time bidding platform for project posting and bidding, with an ML-powered chatbot for project price prediction and secure chat-based interactions.",
    technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Machine Learning"],
    details: [],
    github: "https://github.com/vyenkatesh-chavan/finalbid",
    live: null,
  },
  {
    number: "03",
    title: "e-Turf Booking System",
    description: "A MERN-based turf booking platform with role-based authentication and booking management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    details: [
      "Implemented dynamic slot availability and owner management.",
      "Built an admin approval workflow for booking management.",
    ],
    github: "https://github.com/vyenkatesh-chavan/e-turf",
    live: null,
  },
  {
    number: "04",
    title: "Stock Price Prediction using Reinforcement Learning",
    description:
      "An AI-driven stock trading system using Reinforcement Learning to learn Buy, Sell, and Hold actions from historical stock market data.",
    technologies: ["Python", "Reinforcement Learning", "Pandas", "NumPy", "Matplotlib"],
    details: [
      "Trained an RL agent to learn Buy, Sell, and Hold actions.",
      "Performed data preprocessing and feature engineering.",
      "Evaluated model performance using historical market data.",
      "Visualized stock trends, portfolio growth, and model performance.",
    ],
    github: null,
    live: null,
  },
  {
    number: "05",
    title: "Heart Disease Prediction",
    description:
      "A Data Science and Machine Learning project that analyzes healthcare data and predicts the likelihood of heart disease.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning"],
    details: [
      "Performed data cleaning and preprocessing on healthcare data.",
      "Analyzed health-related features and their relationships.",
      "Trained and evaluated Machine Learning classification models.",
      "Visualized data patterns and model performance.",
    ],
    github: "https://github.com/vyenkatesh-chavan/ml_basic/blob/main/ml_basic02.ipynb",
    live: null,
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);
  const showLinks = hasLink(project.github) || hasLink(project.live);

  return (
    <article
      className="rounded-xl p-6 transition-all duration-300 md:p-8"
      style={{
        backgroundColor: hovered ? COLORS.panel : "transparent",
        border: `1px solid ${hovered ? COLORS.panelBorder : COLORS.border}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top row: number + links */}
      <div className="flex items-start justify-between gap-4">
        <span className="text-sm" style={{ color: COLORS.green, fontFamily: FONTS.mono }}>
          {project.number}
        </span>

        {showLinks && (
          <div className="flex gap-4 text-sm" style={{ fontFamily: FONTS.mono }}>
            {hasLink(project.github) && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: COLORS.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.green)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
              >
                GitHub ↗
              </a>
            )}
            {hasLink(project.live) && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: COLORS.muted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.green)}
                onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.muted)}
              >
                Live ↗
              </a>
            )}
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold tracking-tight" style={{ color: COLORS.text }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7" style={{ color: COLORS.muted }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <p className="mt-5 text-sm leading-6" style={{ color: COLORS.green, fontFamily: FONTS.mono }}>
        {project.technologies.join(" · ")}
      </p>

      {/* Highlights (only rendered when provided) */}
      {project.details.length > 0 && (
        <ul className="mt-6 space-y-3 text-sm leading-6">
          {project.details.map((detail, i) => (
            <li key={i} className="flex items-start gap-3" style={{ color: COLORS.muted }}>
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: COLORS.mutedDim }}
              />
              {detail}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full px-6 py-24 md:px-14 lg:px-20"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: FONTS.display }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm tracking-widest" style={{ fontFamily: FONTS.mono, color: COLORS.green }}>
          PROJECTS
        </p>

        <h2 className="mb-16 text-4xl font-bold tracking-tight sm:text-5xl">
          Things I've Built
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;