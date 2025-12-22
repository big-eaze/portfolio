import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import "./Experience.css";

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt /> },
  { name: "JavaScript", level: 92, icon: <FaJs /> },
  { name: "React.js", level: 88, icon: <FaReact /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss /> },
  { name: "Next.js", level: 75, icon: <SiNextdotjs /> },
];

export function Experience() {
  return (
    <section className="experience-section" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span>Expertise</span>
      </motion.h2>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34,211,238,0.35)" }}
          >
            <div className="icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="radial-container">
              <svg className="radial-progress" viewBox="0 0 36 36">
                <path
                  className="radial-bg"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="radial-fill"
                  strokeDasharray={`${skill.level}, 100`}
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35">{skill.level}%</text>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
