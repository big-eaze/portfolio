import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiWordpress,
  SiExpo,
  SiFramer,
  SiRedux,
  SiReactquery,
  SiSupabase,
  SiFirebase,
  SiVite,
  SiGit,
  SiReacthookform,
} from "react-icons/si";
import leafSprig from "../assets/leaf-sprig.svg";
import leafCluster from "../assets/leaf-cluster.svg";
import profileImage from "../assets/ISR.png";
import "./About.css";

const skills = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React.js", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
  { name: "Expo", Icon: SiExpo, color: "#000000" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", Icon: SiCss3, color: "#1572B6" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
  { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
  { name: "Redux Toolkit", Icon: SiRedux, color: "#764ABC" },
  { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
  { name: "React Hook Form", Icon: SiReacthookform, color: "#EC5990" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Zustand", Icon: null, short: "Z", color: "#443BA3" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
];

const traits = [
  "Innovations",
  "Excellence",
  "Creativity",
  "Experience",
  "Passion",
  "Problem-solving",
];

export function About() {
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  useEffect(() => {
    if (!isSkillsOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeydown = (event) => {
      if (event.key === "Escape") setIsSkillsOpen(false);
    };
    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [isSkillsOpen]);

  return (
    <section className="about" id="about">
      {/* Botanical artwork stays behind the readable content. */}
      <div className="about-vector-bg" aria-hidden="true">
        <img className="about-leaf about-leaf-sprig" src={leafSprig} alt="" />
        <img className="about-leaf about-leaf-cluster" src={leafCluster} alt="" />
      </div>

      <div className="about-floating-label" aria-hidden="true">ABOUT</div>

      <div className="shell about-inner">
        <motion.div
          className="about-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 36 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <span className="section-eyebrow">About me</span>
          <h2 className="section-title">
            My goal is to craft products that <em>feel</em> as good as they work.
          </h2>
          <p className="about-lead">
            A website is more than a digital presence — it&rsquo;s a tool that tells your
            story and moves your business forward. I&rsquo;m <strong>Israel Oluwatobi Ojeleye</strong>,
            a Frontend Developer passionate about turning creative ideas
            into fast, interactive, and visually engaging experiences across web and
            mobile.
          </p>
          <p className="about-body">
            I write clean, maintainable code with a focus on performance, accessibility
            and thoughtful motion. I&rsquo;m always exploring new tools and trends to stay
            ahead — and to make products people genuinely enjoy using.
          </p>

          <div className="about-traits">
            {traits.map((trait) => (
              <span key={trait}>
                <Check size={13} /> {trait}
              </span>
            ))}
          </div>

          <button
            type="button"
            className="about-readmore"
            onClick={() => setIsSkillsOpen(true)}
            aria-expanded={isSkillsOpen}
          >
            My tech stack <span className="about-arrow">&rarr;</span>
          </button>
        </motion.div>

        <motion.div
          className="about-visual"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            className="about-photo-frame"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            <div className="about-photo-backdrop" aria-hidden="true" />
            <img className="about-photo" src={profileImage} alt="Israel Ojeleye" />
          </motion.div>

          <div className="about-skills">
            <p className="about-note">
              Honest about weak spots too — always leveling up the sharpest tool in the box.
            </p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isSkillsOpen && (
          <motion.div
            className="about-skills-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSkillsOpen(false)}
          >
            <motion.aside
              className="about-skills-modal"
              role="dialog"
              aria-modal="true"
              aria-label="Tech stack"
              initial={{ opacity: 0, x: 120, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 120, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="about-skills-modal-header">
                <div>
                  <span className="section-eyebrow section-eyebrow-small">Tech stack</span>
                  <h3>What I work with</h3>
                </div>
                <button
                  type="button"
                  className="about-modal-close"
                  aria-label="Close tech stack"
                  onClick={() => setIsSkillsOpen(false)}
                >
                  <X size={18} />
                </button>
              </div>
              <div className="about-modal-list">
                {skills.map((skill) => (
                  <div className="skill-tile" key={skill.name}>
                    {skill.Icon ? (
                      <skill.Icon
                        className="skill-logo"
                        style={{ color: skill.color }}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="skill-logo skill-logo-letter" aria-hidden="true">
                        {skill.short}
                      </span>
                    )}
                    <span className="skill-tile-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}