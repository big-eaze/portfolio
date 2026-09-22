import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import { Navbar } from "./Navbar";
import cv from "../assets/Israel-CV.Docx";
import background from "../assets/background.jpg";
import background2 from "../assets/background2.jpg";
import background3 from "../assets/background3.jpg";
import background4 from "../assets/background4.jpg";
import background5 from "../assets/background5.jpg";
import background6 from "../assets/background6.jpg";
import background7 from "../assets/background7.jpg";
import background8 from "../assets/background8.jpg";

import "./Hero.css";

const socials = [
  { icon: <FaEnvelope />, href: "mailto:israel@ojeleye.dev", label: "Email" },
  { icon: <FaGithub />, href: "https://github.com/big-eaze", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/israel-ojeleye", label: "LinkedIn" },
];

// Curated Unsplash images showcasing graphic, vector-like, or clean digital web development themes
const backgroundSlides = [
  background,
  background2,
  background3,
  background4,
  background5,
  background6,
  background7,
  background8
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const selectSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero" id="home">
      <div className="hero-card">
        <Navbar variant="hero" />

        {/* Bold, Vivid Background Slider Layer */}
        <div className="hero-slider-container">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={currentSlide}
              className="hero-slide-item"
              initial={{
                clipPath: "inset(0 0 0 100%)",
                scale: 1.08,
              }}
              animate={{
                clipPath: "inset(0 0 0 0%)",
                scale: 1,
              }}
              exit={{
                clipPath: "inset(0 100% 0 0)",
                scale: 1,
              }}
              transition={{
                clipPath: {
                  duration: 1.2,
                  ease: [0.76, 0, 0.24, 1],
                },
                scale: {
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
            >
              <img
                src={backgroundSlides[currentSlide]}
                alt=""
                className="hero-slide-bg"
              />

              <div className="hero-slide-overlay" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Central Content Layout with Frosted Glass Box */}
        <div className="hero-main-content">
          <motion.div
            className="hero-content-glass-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="hero-main-title">
              Crafting digital products with <span>precision.</span>
            </h1>

            <p className="hero-desc-text">
              Hi, I&rsquo;m Israel Ojeleye. I design and build high-performance web & mobile applications,
              immersive motion systems, and clean interfaces that people love to use.
            </p>

            <div className="hero-actions-row">
              <a href="#works" className="hero-btn-primary">Explore Works</a>
              <a
                href={cv}
                className="hero-btn-outline hero-btn-cv-tooltip"
                download="Israel-CV.Docx"
                aria-label="Download my CV"
                data-tooltip="Download my CV"
              >
                <FaDownload />
              </a>
            </div>

            <div className="hero-social-cluster">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}