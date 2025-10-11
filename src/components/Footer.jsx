import "./Footer.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="socials">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="social-link"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-divider"></div>

        <p className="footer-text">
          © {new Date().getFullYear()} <span>Israel Ojeleye</span>. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
