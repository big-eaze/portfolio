import { motion } from "framer-motion";
import "./Experience.css";

const stack = [
  "JavaScript",
  "TypeScript",
  "Python",
  "React.js",
  "React Native",
  "Expo",
  "Next.js",
  "Tailwind",
  "NativeWind",
  "shadcn",
  "Radix UI",
  "Material UI",
  "HTML",
  "CSS",
  "WordPress",
  "Framer Motion",
  "Redux Toolkit",
  "Zustand",
  "React Query",
  "Clerk",
  "Supabase",
  "Firebase",
  "Vite",
  "Git/GitHub",
];

export function Experience() {
  return (
    <section className="tech-strip" id="services" aria-label="Technology stack">
      {/* Edge-to-Edge Leaf Pattern Framing & Glow */}
      <div className="tech-vector-bg" aria-hidden="true">
        <div className="tech-vector-glow"></div>
      </div>

      <div className="shell tech-shell">
        <div className="tech-grid-layout">
          {/* Left Column: Heading & Philosophy */}
          <motion.div
            className="tech-header-block"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">Tech Stack &amp; Tools</span>
            <h2 className="tech-count">
              20 tools<span className="tech-slash"> / </span>01 approach
            </h2>
            <p className="tech-intro-text">
              Interfaces are built with the right tool for the feeling, not the loudest tool in the room. 
              Every framework and library is chosen for performance, scalability, and seamless motion experience.
            </p>
          </motion.div>

          {/* Right Column: Floating Interactive Pill Orbit */}
          <motion.div
            className="tech-orbit"
            aria-label="Tools and technologies"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {stack.map((tech, idx) => (
              <motion.div
                className={`tech-item ${idx === 0 ? "featured-tech" : ""}`}
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <span className="tech-dot" aria-hidden="true"></span>
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}