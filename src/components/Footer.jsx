import "./Footer.css";
import { motion } from "framer-motion";
import { X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

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
            href="https://github.com/big-eaze"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/israel-ojeleye"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.tiktok.com/@isr_oj"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://x.com/realisr12"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://wa.me/2347067459884"
            className="social-link"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>


        </div>

        <div className="footer-divider"></div>

        <p className="footer-text">
          © {new Date().getFullYear()} <span>ISR</span>. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
