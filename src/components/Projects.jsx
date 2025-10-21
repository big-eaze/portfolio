import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive single-page e-commerce web app with CRUD operations, built using React, Express, and SQLite.",
    tech: ["React", "Express", "SQLite"],
    link: "http://ginkbow-shop-env.eba-wzppp4xt.eu-north-1.elasticbeanstalk.com/",
    Demo: "Broken Link",
  },
  {
    title: "Restaurant Web App",
    description:
      "A sleek, responsive restaurant prototype featuring smooth navigation and modern UI built with React, Tailwind, and shadcn.",
    tech: ["React", "TailwindCSS", "Shadcn"],
    link: "https://restaurant-ten-sable.vercel.app",
    Demo: "Stable Link",
  },
  {
    title: "Outfit Matcher",
    description:
      "A smart React app that suggests outfit combinations using category-based matching logic and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://vsa-roxy.vercel.app",
    Demo: "Stable Link",
  },
  {
    title: "Real Estate Web App",
    description:
      "Modern property listing site with filter, search, and dynamic cards powered by Next.js and Supabase.",
    tech: ["Next.js", "ShadCN", "CSS"],
    link: "https://prime-sphere-real-estate.vercel.app",
    Demo: "Stable Link",
  },
  {
    title: "School Management App",
    description:
      "A modern, role-based (Admin, Student, Staff) school management system built with React, Express, and SQLite.",
    logs: [
      { role: "ADMIN", user: "jahman1092", pass: "Israel1021@" },
      { role: "STUDENT", user: "lori1092", pass: "Lori1092@" },
      { role: "STAFF", user: "john1092", pass: "John1092@" },
    ],
    tech: ["React", "Express", "Supabase"],
    link: "https://aurora-end.vercel.app/",
    Demo: "Stable Link",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="projects-container" variants={containerVariants}>
        <motion.h2 className="section-title" variants={cardVariants}>
          Featured <span>Projects</span>
        </motion.h2>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.04,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.25)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {/* Tech stack */}
                {project.tech && (
                  <ul className="tech-list">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}

                {/* Demo status */}
                {project.Demo && (
                  <div
                    className={`demo-status ${project.Demo === "Stable Link" ? "stable" : "broken"
                      }`}
                  >
                    {project.Demo}
                  </div>
                )}


                {/* Test Logins */}
                {project.logs && (
                  <div className="logs">
                    <h4>Test Logins</h4>
                    <div className="log-badges">
                      {project.logs.map((log, i) => (
                        <div className="log-badge" key={i}>
                          {log.role}
                          <div className="tooltip">
                            <p><span>User:</span> {log.user}</p>
                            <p><span>Pass:</span> {log.pass}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live demo link */}
                {project.link && (
                  <div className="project-links">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-project"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
