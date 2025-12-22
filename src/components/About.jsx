// About.jsx
import { motion } from "framer-motion";
import "./About.css";

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>About <span>Me</span></h2>
          <p>
            I’m a <span>Frontend Developer</span> with a passion for turning creative ideas into smooth, interactive, and visually appealing web experiences. I love crafting clean interfaces, writing maintainable code, and bringing digital products to life through thoughtful design and motion.
          </p>
          <p>
            My focus is on building high-performance, responsive, and accessible applications using modern technologies like <span>React</span>, <span>JavaScript</span>, and <span>CSS</span>. I’m constantly exploring new tools and trends to stay ahead and improve how people interact with the web.
          </p>
          <div className="about-buttons">
            <a href="#projects" className="btn-accent">View My Work</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </motion.div>
        <div className="visual-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>

      </div>
    </section>
  );
};
