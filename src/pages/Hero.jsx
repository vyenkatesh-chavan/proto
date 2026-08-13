import { useEffect, useState } from "react";

// ---- design tokens (kept in one place so the palette stays disciplined) ----
const COLORS = {
  bg: "#0a0a0b",
  panel: "#101114",
  panelBorder: "#1e2128",
  border: "#20242c",
  text: "#f2f2f0",
  muted: "#8b93a1",
  mutedDim: "#565d68",
  green: "#3ef2a0",
  greenDim: "#2bb87a",
};

const FONTS = {
  display: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, key: "name", value: "\"Vyenkatesh Chavan\"" },
  { indent: 1, key: "focus", value: "\"AI / ML Developer\"" },
  { indent: 1, key: "role", value: "\"Backend & Full Stack Dev\"" },
  { indent: 1, key: "stack", value: "[\"Node\", \"Python\", \"React\"]" },
  { indent: 1, key: "status", value: "\"available\"" },
  { indent: 0, text: "};" },
];

const Hero = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 180);
    return () => clearTimeout(t);
  }, [visibleLines]);

  useEffect(() => {
    const t = setInterval(() => setShowCursor((c) => !c), 600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="min-h-screen w-full flex items-center px-6 py-24 md:px-14 lg:px-20"
      style={{ backgroundColor: COLORS.bg, color: COLORS.text, fontFamily: FONTS.display }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* faint dot-grid backdrop, restrained */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `radial-gradient(${COLORS.border} 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black, transparent)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        {/* ---------------- LEFT: intro ---------------- */}
        <div>
          <p
            className="mb-6 inline-flex items-center gap-2 text-sm"
            style={{ fontFamily: FONTS.mono, color: COLORS.muted }}
          >
            <span style={{ color: COLORS.green }}>guest@portfolio</span>
            <span style={{ color: COLORS.mutedDim }}>:~$</span>
            <span>echo $GREETING</span>
            <span
              className="inline-block w-[7px]"
              style={{
                height: "1em",
                backgroundColor: COLORS.green,
                opacity: showCursor ? 1 : 0,
                verticalAlign: "middle",
              }}
            />
          </p>

          <p className="text-lg sm:text-xl" style={{ color: COLORS.muted }}>
            Hi, I'm
          </p>

          <h1 className="mt-2 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            VYENKATESH CHAVAN
          </h1>

          <h2
            className="mt-6 text-xl font-medium sm:text-2xl md:text-3xl"
            style={{ color: COLORS.green }}
          >
            AI/ML Developer
          </h2>

          <p
            className="mt-1 text-lg sm:text-xl"
            style={{ color: COLORS.text }}
          >
            Backend &amp; Full Stack Developer
          </p>

          <p
            className="mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8"
            style={{ color: COLORS.muted }}
          >
            I build real-world software products across AI/ML, backend, and
            full-stack development, combining intelligent models with
            scalable web technologies to turn ideas into working
            applications.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg px-6 py-3 text-sm font-semibold transition-colors sm:text-base"
              style={{ backgroundColor: COLORS.green, color: "#06110b" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.greenDim)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.green)}
            >
              View Projects
            </a>

            <a
              href="https://github.com/vyenkatesh-chavan"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 text-sm font-medium transition-colors sm:text-base"
              style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.green)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/vyenkatesh-chavan-54813a2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-6 py-3 text-sm font-medium transition-colors sm:text-base"
              style={{ border: `1px solid ${COLORS.border}`, color: COLORS.text }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.green)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.border)}
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* ---------------- RIGHT: terminal signature element ---------------- */}
        <div className="relative hidden lg:block">
          <div
            className="rounded-xl shadow-2xl"
            style={{ backgroundColor: COLORS.panel, border: `1px solid ${COLORS.panelBorder}` }}
          >
            {/* title bar */}
            <div
              className="flex items-center justify-between rounded-t-xl px-4 py-3"
              style={{ borderBottom: `1px solid ${COLORS.panelBorder}` }}
            >
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#3a3d44" }} />
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#3a3d44" }} />
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: "#3a3d44" }} />
              </div>
              <span
                className="text-xs"
                style={{ fontFamily: FONTS.mono, color: COLORS.mutedDim }}
              >
                developer.ts
              </span>
            </div>

            {/* code body */}
            <div className="px-6 py-8 text-sm leading-7" style={{ fontFamily: FONTS.mono }}>
              {CODE_LINES.slice(0, visibleLines).map((line, i) => (
                <div key={i} style={{ paddingLeft: line.indent * 20 }}>
                  {line.text ? (
                    <span style={{ color: COLORS.muted }}>{line.text}</span>
                  ) : (
                    <span>
                      <span style={{ color: COLORS.muted }}>{line.key}</span>
                      <span style={{ color: COLORS.mutedDim }}>: </span>
                      <span style={{ color: COLORS.green }}>{line.value}</span>
                      <span style={{ color: COLORS.mutedDim }}>,</span>
                    </span>
                  )}
                </div>
              ))}
              <span
                className="inline-block w-[7px] align-middle"
                style={{
                  height: "1.1em",
                  backgroundColor: COLORS.green,
                  opacity: visibleLines >= CODE_LINES.length && showCursor ? 1 : 0,
                }}
              />
            </div>

            {/* status footer */}
            <div
              className="flex items-center gap-2 rounded-b-xl px-6 py-3 text-xs"
              style={{
                borderTop: `1px solid ${COLORS.panelBorder}`,
                fontFamily: FONTS.mono,
                color: COLORS.mutedDim,
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS.green }}
              />
              build passing
            </div>
          </div>

          {/* faint corner bracket accents referencing code syntax */}
          <span
            className="absolute -top-3 -left-3 text-3xl"
            style={{ color: COLORS.panelBorder, fontFamily: FONTS.mono }}
          >
            {"{"}
          </span>
          <span
            className="absolute -bottom-3 -right-3 text-3xl"
            style={{ color: COLORS.panelBorder, fontFamily: FONTS.mono }}
          >
            {"}"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;