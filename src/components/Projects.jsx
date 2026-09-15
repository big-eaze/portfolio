import { motion } from "framer-motion";
import { ArrowUpRight, Lock } from "lucide-react";
import eCom from "../assets/e-commerce.png";
import outfitMat from "../assets/outfit-matcher.png";
import primeSphere from "../assets/prime-sphere.png";
import saca from "../assets/saca-project.png";
import aurora from "../assets/aurora.png";
import restu from "../assets/restu.png";
import "./Projects.css";

const projects = [
  {
    title: "Ginkbow E-commerce",
    image: eCom,
    categories: ["Design", "Development"],
    description:
      "Fully responsive SPA with CRUD, cart and auth — React, Express & Supabase.",
    tech: ["React", "Tailwind", "Supabase", "Framer Motion"],
    link: "http://ginkbow.vercel.app",
    size: "wide",
  },
  {
    title: "Spice!Route",
    image: restu,
    categories: ["UI", "Web"],
    description:
      "Responsive restaurant prototype with smooth navigation & modern UI.",
    tech: ["React", "TailwindCSS", "Shadcn", "Framer Motion"],
    link: "https://restaurant-ten-sable.vercel.app",
  },
  {
    title: "Virtual Styling Assistant",
    image: outfitMat,
    categories: ["Mobile", "UI"],
    description:
      "Smart app suggesting outfit combos with category matching and motion.",
    tech: ["React", "Tailwind", "Framer Motion", "Firebase"],
    link: "https://vsa-rosy.vercel.app",
  },
  {
    title: "Prime Sphere Real Estate",
    image: primeSphere,
    categories: ["Web", "Data"],
    description:
      "Property listing with filters, search and dynamic cards — Next.js + Supabase.",
    tech: ["Next.js", "ShadCN", "CSS"],
    link: "https://prime-sphere-real-estate.vercel.app",
    size: "wide",
  },
  {
    title: "Aurora School Management",
    image: aurora,
    categories: ["Development", "Systems"],
    description:
      "Role-based management system (Admin, Student, Staff) — React, Express, SQLite.",
    tech: ["React", "Express", "Supabase"],
    link: "https://aurora-end.vercel.app/",
    login: { username: "jahman1092", password: "Israel1021@" },
  },
  {
    title: "SACA — HIV/AIDS Awareness",
    image: saca,
    categories: ["Design", "Civic"],
    description:
      "Informative awareness platform with resources & clean storytelling.",
    tech: ["React", "TailwindCSS"],
    link: "https://saca-project.vercel.app/",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 44 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: (i % 3) * 0.1 },
  }),
};

export function Projects() {
  return (
    <section className="works" id="works">
      <div className="shell">
        <motion.div
          className="section-head works-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-title">
            Featured <em>works</em>
          </h2>
        </motion.div>

        <div className="works-grid">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`work-card ${project.size === "wide" ? "wide" : ""}`}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              <span className="work-index">0{i + 1}</span>
              <div className="work-media">
                <img src={project.image} alt={project.title} className="work-img" />
                <div className="work-overlay">
                  <span className="work-open">
                    View project <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>

              <div className="work-meta">
                <div className="work-meta-top">
                  <div className="work-cats">
                    {project.categories.map((cat) => (
                      <span key={cat}>{cat}</span>
                    ))}
                  </div>
                  <ArrowUpRight className="work-arrow" size={18} />
                </div>
                <h3 className="work-title">{project.title}</h3>
                <p className="work-summary">{project.description}</p>
              </div>

              <div className="work-hover-desc">
                <div className="work-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                {project.login && (
                  <div className="work-login">
                    <Lock size={12} /> {project.login.username} / {project.login.password}
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="works-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="https://github.com/big-eaze" target="_blank" rel="noopener noreferrer" className="btn-ghost">
            More experiments on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}