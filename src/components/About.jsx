import "./About.css";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span>Me</span>
        </motion.h2>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="about-text">
            I’m a <span>Frontend Developer</span> with a passion for turning
            creative ideas into smooth, interactive, and visually appealing
            web experiences. I love crafting clean interfaces, writing
            maintainable code, and bringing digital products to life through
            thoughtful design and motion.
          </p>

          <p className="about-text">
            My focus is on building high-performance, responsive, and
            accessible applications using modern technologies like{" "}
            <span>React</span>, <span>JavaScript</span>, and{" "}
            <span>CSS</span>. I’m constantly exploring new tools and trends
            to stay ahead and improve how people interact with the web.
          </p>

          <div className="about-buttons">
            <a href="#projects" className="btn-accent">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
