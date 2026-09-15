import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import "./Footer.css";

const socials = [
  { icon: <FaGithub />, href: "https://github.com/big-eaze", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/israel-ojeleye", label: "LinkedIn" },
  { icon: <FaTiktok />, href: "https://www.tiktok.com/@isr_oj", label: "TikTok" },
  { icon: <FaXTwitter />, href: "https://x.com/realisr12", label: "X" },
  { icon: <FaWhatsapp />, href: "https://wa.me/2347067459884", label: "WhatsApp" },
];

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="footer-logo">
            ISR<span className="footer-logo-dot">.</span>
          </span>
        </motion.div>

        <div className="footer-body">
          <motion.div
            className="footer-col footer-contact"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
          >
            <p>Frontend &amp; Mobile Developer crafting fast, interactive experiences from Abuja, Nigeria.</p>
            <a href="mailto:israelojeleye44@gmail.com" className="footer-email">
              israelojeleye44@gmail.com
            </a>
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.14 }}
          >
            <span className="footer-col-title">Navigate</span>
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            className="footer-col"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="footer-col-title">Social</span>
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} <strong>Israel Ojeleye</strong>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}