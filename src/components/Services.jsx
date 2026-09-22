import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import serviceOrbit from "../assets/service-orbit.svg";
import "./Services.css";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive interfaces built with React, Next.js and modern tooling. Fast, accessible and enjoyable to use.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    num: "02",
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences with React Native — smooth navigation, polished motion and native-grade feel.",
    tags: ["React Native", "Expo", "Firebase", "Supabase"],
  },
  {
    num: "03",
    title: "API Integration & State",
    description:
      "Robust data flows between your backend and both web and mobile clients — typed, cached and kept in sync across the whole product.",
    tags: ["REST", "GraphQL", "React Query", "Redux Toolkit"],
  },
  {
    num: "04",
    title: "Maintenance & Growth",
    description:
      "Ongoing support, performance tuning and feature work that keeps your product fast, secure and moving forward.",
    tags: ["Optimization", "Monitoring", "Refactoring", "WordPress"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export function Services() {
  const [open, setOpen] = useState(0);

  return (
    <section className="services" id="services">
      <img className="services-vector" src={serviceOrbit} alt="" aria-hidden="true" />
      <div className="shell">
        <motion.div
          className="section-head services-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <span className="section-eyebrow">Services</span>
          <h2 className="section-title">
            What I <em>can</em> do for you
          </h2>
          <a href="#contact" className="services-seemore">
            See more <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <div className="services-list">
          {services.map((service, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={service.num}
                className={`service-row ${isOpen ? "open" : ""}`}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <button
                  className="service-toggle"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="service-num">{service.num}</span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-icon" aria-hidden="true">
                    <Plus size={18} />
                  </span>
                </button>

                <motion.div
                  className="service-panel"
                  initial={false}
                  animate={isOpen ? "open" : "closed"}
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    closed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="service-desc">{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="service-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}