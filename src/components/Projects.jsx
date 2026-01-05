import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive SPA with CRUD functionality built with React, Express, and SQLite.",
    tech: ["React", "Express", "SQLite"],
    status: "broken link",
    link: "http://ginkbow-shop-env.eba-wzppp4xt.eu-north-1.elasticbeanstalk.com/",
  },
  {
    title: "Restaurant Web App",
    description:
      "Responsive restaurant prototype with smooth navigation & modern UI using React, Tailwind, and Shadcn.",
    tech: ["React", "TailwindCSS", "Shadcn"],
    status: "live",
    link: "https://restaurant-ten-sable.vercel.app",
  },
  {
    title: "Outfit Matcher",
    description:
      "Smart app suggesting outfit combinations with category-based matching logic and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    status: "live",
    link: "https://vsa-rosy.vercel.app",
  },
  {
    title: "Real Estate Web App",
    description:
      "Property listing site with filters, search, and dynamic cards powered by Next.js and Supabase.",
    tech: ["Next.js", "ShadCN", "CSS"],
    status: "live",
    link: "https://prime-sphere-real-estate.vercel.app",
  },
  {
    title: "School Management App",
    description:
      "Role-based (Admin, Student, Staff) management system built with React, Express, and SQLite.",
    tech: ["React", "Express", "Supabase"],
    status: "live",
    link: "https://aurora-end.vercel.app/",
  },
  {
    title: "HIV/AIDS Awareness site",
    description:
      "Informative site on HIV/AIDS with resources, built using React and TailwindCSS.",
    tech: ["React", "TailwindCSS"],
    status: "live",
    link: "https://saca-project.vercel.app/",
  }
];

export function Projects() {
  return (
    <section className="projects-section" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Featured <span>Projects</span>
      </motion.h2>

      <div className="projects-editorial">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`project-row ${i % 2 === 0 ? "even" : "odd"}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-header">
                <span
                  className={`status-badge ${project.status}`}
                  title={project.status === "broken" ? "Project currently unavailable" : "Live project"}
                >
                  <span className="status-dot" />
                  {project.status}
                </span>


                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-project"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
