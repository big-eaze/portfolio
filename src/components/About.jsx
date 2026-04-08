import { motion } from "framer-motion";
import { Code2, Palette, Zap, Award } from "lucide-react";
import "./About.css";

export function About() {
  const skills = [
    { icon: Code2, label: "Clean Code", color: "#22d3ee" },
    { icon: Palette, label: "Modern Design", color: "#8b5cf6" },
    { icon: Zap, label: "Performance", color: "#f59e0b" },
    { icon: Award, label: "Best Practices", color: "#10b981" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="about-content">
          <motion.div className="about-header" variants={itemVariants}>
            <span className="section-label">Who I Am</span>
            <h2>
              About <span className="highlight">Me</span>
            </h2>
          </motion.div>

          <motion.div className="about-text" variants={itemVariants}>
            <p className="lead-text">
              I'm a <strong>Frontend & Mobile Developer</strong> passionate about turning creative ideas
              into smooth, interactive, and visually engaging web and mobile experiences.
            </p>
            <p>
              I enjoy crafting clean interfaces, writing maintainable code, and bringing digital
              products to life through thoughtful design and motion. My focus is on building
              high-performance, responsive, and accessible applications across web and mobile
              platforms using modern technologies like <strong>React</strong>, <strong>React Native</strong>, <strong>JavaScript</strong>, <strong>Next.js</strong>, and <strong>CSS</strong>.
            </p>
            <p>
              I'm constantly exploring new tools and trends to stay ahead and improve how people
              interact with digital products.
            </p>
          </motion.div>

          <motion.div className="skill-grid" variants={itemVariants}>
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="skill-card"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="skill-icon" style={{ backgroundColor: `${skill.color}15`, color: skill.color }}>
                  <skill.icon size={24} />
                </div>
                <span className="skill-label">{skill.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="about-actions" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#experience"
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              My Tech Stack
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="about-visual"
          variants={itemVariants}
        >
          <div className="visual-container">
            <motion.div
              className="shape shape-1"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="shape shape-2"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            <motion.div
              className="shape shape-3"
              animate={{
                y: [0, -25, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <div className="visual-glow"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}