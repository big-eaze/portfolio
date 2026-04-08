import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import "./Experience.css";

const skills = [
  { name: "HTML",        icon: <FaHtml5 />,        },
  { name: "CSS",         icon: <FaCss3Alt />,       },
  { name: "JavaScript",  icon: <FaJs />,            },
  { name: "React.js",    icon: <FaReact />,         },
  { name: "TypeScript",  icon: <SiTypescript />,    },
  { name: "Tailwind CSS",icon: <SiTailwindcss />,   },
  { name: "Next.js",     icon: <SiNextdotjs />,      },
  { name: "WordPress",   icon: <BsWordpress />,     },
  {name: "React Native" , icon: <FaReact />,         },
];

export function Experience() {
  return (
    <section className="experience-section" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <div className="section-badge">Mastery</div>
        <h2 className="section-title">
          My <span className="gradient-text">Expertise</span>
        </h2>
      </motion.div>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <div className="skill-icon-wrap">
              <span className="skill-icon">
                {skill.icon}
              </span>
            </div>
            <h3>{skill.name}</h3>
            <span className="skill-dot" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}