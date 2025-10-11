import { useRef } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Website",
    description:
      "A fully responsive single-page e-commerce web app with CRUD operations, built using React, Express, and SQLite.",
    tech: ["React", "Express", "SQLite"],
    link: "http://ginkbow-shop-env.eba-wzppp4xt.eu-north-1.elasticbeanstalk.com/",
  },
  {
    title: "Restaurant Web App",
    description:
      "A sleek, responsive restaurant prototype featuring smooth navigation and modern UI built with React, Tailwind, and shadcn.",
    tech: ["React", "TailwindCSS", "Shadcn"],
    link: "https://restaurant-ten-sable.vercel.app"
  },
  {
    title: "Outfit Matcher",
    description:
      "A smart React app that suggests outfit combinations using category-based matching logic and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "vsa-roxy.vercel.app",
  },
  {
    title: "Real Estate Web App",
    description:
      "Modern property listing site with filter, search, and dynamic cards powered by Next.js and Supabase.",
    tech: ["Next.js", "ShadCN", "CSS"],
    link: "prime-sphere-real-estate.vercel.app",
  },
  {
    title: "School Management App",
    description:
      "A modern, role-based (Admin, Student, Staff) school management system built with React, Express, and SQLite.",
    logs: [
      { role: "ADMIN", user: "jahman1092", pass: "Israel1092@" },
      { role: "STUDENT", user: "alex1092", pass: "Alex1092@" },
      { role: "STAFF", user: "john1092", pass: "John1092@" },
    ],
    tech: ["React", "Express", "SQLite"],
    link: "http://ginkbow-management-env.eba-wjasp6pr.eu-north-1.elasticbeanstalk.com",
  },
];



export function Projects() {

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span>Projects</span>
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.logs && (
                  <div className="logs">
                    <h4>Test Logins:</h4>
                    <div className="log-cards">
                      {project.logs.map((log, i) => (
                        <div className="log-card" key={i}>
                          <div className="log-card-inner">
                            <div className="log-card-front">
                              <h5>{log.role}</h5>
                              <p>Hover to view details</p>
                            </div>
                            <div className="log-card-back">
                              <p>
                                Username: <strong>{log.user}</strong>
                              </p>
                              <p>
                                Password: <strong>{log.pass}</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}




                <div className="project-links">
                  {project.link && (
                    <>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-project"
                      >
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
