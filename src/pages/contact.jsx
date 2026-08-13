import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

// --------------------------------------------------
// DESIGN TOKENS
// --------------------------------------------------

const COLORS = {
  bg: "#0a0a0b",
  panel: "#101114",
  panelBorder: "#1e2128",
  border: "#20242c",
  text: "#f2f2f0",
  muted: "#8b93a1",
  mutedDim: "#565d68",
  green: "#3ef2a0",
  greenDim: "#2edb8d",
};

const FONTS = {
  display: "'Space Grotesk', ui-sans-serif, system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

// --------------------------------------------------
// CONTACT LINKS
// --------------------------------------------------

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "vyankateshc21@gmail.com",
    href: "mailto:vyankateshc21@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/vyenkatesh-chavan",
    href: "https://github.com/vyenkatesh-chavan",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vyenkatesh-chavan-54813a2b8",
    href: "https://linkedin.com/in/vyenkatesh-chavan-54813a2b8",
    external: true,
  },
];

// --------------------------------------------------
// FORM FIELD
// --------------------------------------------------

const FormField = ({ as = "input", ...props }) => {
  const [focused, setFocused] = useState(false);

  const Tag = as;

  return (
    <Tag
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={`mb-4 w-full rounded-lg px-4 py-3 outline-none transition-all duration-200 ${
        as === "textarea" ? "resize-none" : ""
      }`}
      style={{
        backgroundColor: COLORS.bg,
        border: `1px solid ${
          focused ? COLORS.green : COLORS.border
        }`,
        color: COLORS.text,
        boxShadow: focused
          ? `0 0 0 1px ${COLORS.green}20`
          : "none",
      }}
    />
  );
};

// --------------------------------------------------
// CONTACT CARD
// --------------------------------------------------

const ContactCard = ({ link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-xl p-5 transition-all duration-300"
      style={{
        backgroundColor: COLORS.panel,
        border: `1px solid ${
          hovered ? COLORS.green : COLORS.border
        }`,
        transform: hovered
          ? "translateY(-4px)"
          : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p
        className="mb-1 text-sm"
        style={{
          color: COLORS.mutedDim,
          fontFamily: FONTS.mono,
        }}
      >
        {link.label}
      </p>

      <a
        href={link.href}
        target={link.external ? "_blank" : undefined}
        rel={
          link.external
            ? "noopener noreferrer"
            : undefined
        }
        className="break-all transition-colors duration-200"
        style={{
          color: hovered ? COLORS.green : COLORS.muted,
        }}
      >
        {link.value}
      </a>
    </div>
  );
};

// --------------------------------------------------
// CONTACT COMPONENT
// --------------------------------------------------

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ------------------------------------------------
  // INITIALIZE EMAILJS
  // ------------------------------------------------

  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  // ------------------------------------------------
  // HANDLE INPUT
  // ------------------------------------------------

  const handleChange = (e) => {
    setFormData((previousData) => ({
      ...previousData,
      [e.target.name]: e.target.value,
    }));
  };

  // ------------------------------------------------
  // HANDLE FORM SUBMIT
  // ------------------------------------------------

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    console.log("SUCCESS:", response);

    setStatus("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error("EmailJS Error:", error);
    console.error("Error text:", error?.text);
    console.error("Error status:", error?.status);

    setStatus(
      `Failed to send: ${
        error?.text || "EmailJS request failed"
      }`
    );
  } finally {
    setLoading(false);
  }
};

  // ------------------------------------------------
  // UI
  // ------------------------------------------------

  return (
    <section
      id="contact"
      className="w-full px-6 py-24 md:px-14 lg:px-20"
      style={{
        backgroundColor: COLORS.bg,
        color: COLORS.text,
        fontFamily: FONTS.display,
      }}
    >
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        input::placeholder,
        textarea::placeholder {
          color: #565d68;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill {
          -webkit-text-fill-color: #f2f2f0;
          -webkit-box-shadow: 0 0 0px 1000px #0a0a0b inset;
          transition: background-color 5000s ease-in-out 0s;
        }
      `}</style>

      <div className="mx-auto max-w-6xl">

        {/* ------------------------------------------
            HEADING
        ------------------------------------------- */}

        <div className="mb-14">
          <p
            className="mb-3 text-sm tracking-widest"
            style={{
              fontFamily: FONTS.mono,
              color: COLORS.green,
            }}
          >
            CONTACT
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Connect
          </h2>

          <p
            className="mt-5 max-w-2xl text-lg leading-8"
            style={{
              color: COLORS.muted,
            }}
          >
            Have a project, opportunity, or idea you'd like
            to discuss? Feel free to reach out.
          </p>
        </div>

        {/* ------------------------------------------
            MAIN CONTENT
        ------------------------------------------- */}

        <div className="grid gap-8 md:grid-cols-2">

          {/* ----------------------------------------
              CONTACT FORM
          ----------------------------------------- */}

          <form
            onSubmit={handleSubmit}
            className="rounded-xl p-6 md:p-8"
            style={{
              backgroundColor: COLORS.panel,
              border: `1px solid ${COLORS.panelBorder}`,
            }}
          >
            <h3 className="mb-6 text-xl font-semibold">
              Send Me a Message
            </h3>

            {/* Name */}

            <FormField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              autoComplete="name"
            />

            {/* Email */}

            <FormField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              autoComplete="email"
            />

            {/* Message */}

            <FormField
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message..."
              rows={6}
              required
            />

            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full rounded-lg py-3 font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              style={{
                backgroundColor: COLORS.green,
                color: "#06110b",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  e.currentTarget.style.backgroundColor =
                    COLORS.greenDim;
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  COLORS.green;
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Status */}

            {status && (
              <div
                className="mt-4 rounded-lg border px-4 py-3 text-center text-sm"
                style={{
                  borderColor: status.startsWith("Message")
                    ? COLORS.green
                    : "#7f1d1d",

                  color: status.startsWith("Message")
                    ? COLORS.green
                    : "#f87171",

                  backgroundColor: status.startsWith("Message")
                    ? "#3ef2a008"
                    : "#7f1d1d10",
                }}
              >
                {status}
              </div>
            )}
          </form>

          {/* ----------------------------------------
              CONTACT INFORMATION
          ----------------------------------------- */}

          <div className="space-y-4">

            <h3 className="mb-6 text-xl font-semibold">
              Find Me Online
            </h3>

            {CONTACT_LINKS.map((link) => (
              <ContactCard
                key={link.label}
                link={link}
              />
            ))}

            {/* Availability */}

            <div
              className="mt-8 rounded-xl p-5"
              style={{
                backgroundColor: COLORS.panel,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    backgroundColor: COLORS.green,
                    boxShadow: `0 0 10px ${COLORS.green}`,
                  }}
                />

                <span
                  className="text-sm"
                  style={{
                    color: COLORS.muted,
                    fontFamily: FONTS.mono,
                  }}
                >
                  Open to opportunities
                </span>
              </div>

              <p
                className="mt-3 text-sm leading-6"
                style={{
                  color: COLORS.mutedDim,
                }}
              >
                Interested in software engineering,
                AI/ML, backend, and full-stack development
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------
            FOOTER
        ------------------------------------------- */}

        <div
          className="mt-20 pt-8 text-center"
          style={{
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          <p
            className="text-sm"
            style={{
              fontFamily: FONTS.mono,
              color: COLORS.mutedDim,
            }}
          >
            Designed &amp; Built by Vyenkatesh Chavan
          </p>
        </div>

      </div>
    </section>
  );
};

export default Contact;