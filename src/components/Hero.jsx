import "./Hero.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="hero-greeting">Hello, I’m</p>
        <h1 className="hero-name">Israel Oluwatobi Ojeleye</h1>
        <h2 className="hero-role">Frontend Developer</h2>
        <p className="hero-tagline">
          I build smooth, modern, and interactive web experiences.
        </p>
        <a href="#projects" className="hero-button">
          Explore My Work <ArrowRight className="icon" />
        </a>
      </motion.div>
    </section>
  );
}
