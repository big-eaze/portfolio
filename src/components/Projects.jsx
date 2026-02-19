import { motion } from "framer-motion";
import { ExternalLink, Lock, ArrowUpRight } from "lucide-react";
import eCom from "../assets/e-commerce.png";
import outfitMat from "../assets/outfit-matcher.png";
import primeSphere from "../assets/prime-sphere.png";
import saca from "../assets/saca-project.png";
import aurora from "../assets/aurora.png";
import "./Projects.css";

const projects = [
  {
    title: "E-commerce Website",
    image: eCom,
    description:
      "A fully responsive SPA with CRUD functionality built with React, Express, and supabase.",
    tech: ["React", "tailwind", "Supabase"],
    status: "live",
    link: "http://ginkbow.vercel.app",
    accent: "#22d3ee"
  },
  {
    title: "Restaurant Web App",
    description:
      "Responsive restaurant prototype with smooth navigation & modern UI using React, Tailwind, and Shadcn.",
    tech: ["React", "TailwindCSS", "Shadcn"],
    status: "live",
    link: "https://restaurant-ten-sable.vercel.app",
    accent: "#f59e0b"
  },
  {
    title: "Outfit Matcher",
    image: outfitMat,
    description:
      "Smart app suggesting outfit combinations with category-based matching logic and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    status: "live",
    link: "https://vsa-rosy.vercel.app",
    accent: "#8b5cf6"
  },
  {
    title: "Real Estate Web App",
    image: primeSphere,
    description:
      "Property listing site with filters, search, and dynamic cards powered by Next.js and Supabase.",
    tech: ["Next.js", "ShadCN", "CSS"],
    status: "live",
    link: "https://prime-sphere-real-estate.vercel.app",
    accent: "#ec4899"
  },
  {
    title: "School Management App",
    image: aurora,
    description:
      "Role-based (Admin, Student, Staff) management system built with React, Express, and SQLite.",
    tech: ["React", "Express", "Supabase"],
    status: "live",
    loginDetails: {
      username: "jahman1092",
      password: "Israel1021@"
    },
    link: "https://aurora-end.vercel.app/",
    accent: "#10b981"
  },
  {
    title: "HIV/AIDS Awareness site",
    image: saca,
    description:
      "Informative site on HIV/AIDS with resources, built using React and TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    status: "live",
    link: "https://saca-project.vercel.app/",
    accent: "#ef4444"
  }
];

export function Projects() {
  return (
    <section className="projects-section" id="projects">
      {/* Decorative elements */}
      <div className="grid-pattern"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <div className="section-badge">Portfolio</div>
        <h2 className="section-title">
          Selected <span className="gradient-text">Work</span>
        </h2>
        <p className="section-subtitle">
          Crafting digital experiences that blend aesthetics with functionality
        </p>
      </motion.div>
      <div className="projects-showcase">
        {projects.map((project, i) => (
          <motion.article
            key={i}
            className={`project-item ${i % 2 === 0 ? 'layout-left' : 'layout-right'}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="project-visual">
              <motion.div
                className="project-thumbnail"
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={{ duration: 0.4 }}
              >
                {/* Actual Image */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="thumbnail-image"
                  />
                ) : (
                  <div
                    className="thumbnail-placeholder"
                    style={{
                      background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)`,
                      borderColor: `${project.accent}30`
                    }}
                  />
                )}
                {/* Gradient Overlay */}
                <div
                  className="thumbnail-overlay"
                  style={{ background: `linear-gradient(135deg, ${project.accent}15, ${project.accent}05)` }}
                >
                  <ArrowUpRight className="overlay-icon" />
                </div>

                {/* Big Number */}
                <div className="thumbnail-number" style={{ color: `${project.accent}20` }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.div>
            </div>


            <div className="project-details">
              <div className="project-meta">
                <motion.span
                  className={`status-pill ${project.status}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="status-indicator"></span>
                  {project.status}
                </motion.span>
                <span className="project-index">/{String(i + 1).padStart(2, '0')}</span>
              </div>

              <h3 className="project-title">
                <span className="title-accent" style={{ color: project.accent }}>→</span>
                {project.title}
              </h3>

              <p className="project-desc">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="tech-item"
                    style={{ borderColor: `${project.accent}40` }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: `${project.accent}10`,
                      borderColor: project.accent
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {project.loginDetails && (
                <motion.div
                  className="credentials-box"
                  initial={{ opacity: 0, height: 0 }}
                  whileInView={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="credentials-header">
                    <Lock size={14} />
                    <span>Test Account</span>
                  </div>
                  <div className="credentials-grid">
                    <div className="cred-item">
                      <span className="cred-label">Username</span>
                      <code className="cred-value">{project.loginDetails.username}</code>
                    </div>
                    <div className="cred-item">
                      <span className="cred-label">Password</span>
                      <code className="cred-value">{project.loginDetails.password}</code>
                    </div>
                  </div>
                </motion.div>
              )}

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                style={{
                  backgroundColor: project.accent,
                  boxShadow: `0 8px 24px ${project.accent}40`
                }}
                whileHover={{
                  y: -2,
                  boxShadow: `0 12px 32px ${project.accent}50`
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View Live Project</span>
                <ExternalLink size={18} />
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}