import { motion } from "framer-motion";
import { Palette, Code, Wrench } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: <Palette />,
    title: "DESIGN",
    description: "I craft intuitive and visually stunning interfaces that blend aesthetics with functionality, ensuring every pixel serves a purpose.",
  },
  {
    icon: <Code />,
    title: "DEVELOPMENT",
    description: "I build robust, scalable applications from scratch using modern technologies and best practices to bring your vision to life.",
  },
  {
    icon: <Wrench />,
    title: "MAINTENANCE",
    description: "I provide ongoing support and optimization to keep your applications running smoothly, secure, and up-to-date with the latest standards.",
  },
];

export function Services() {
  return (
    <section className="services-section" id="services">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <div className="section-badge">Services</div>
        <h2 className="section-title">
          What I <span className="gradient-text">Offer</span>
        </h2>
      </motion.div>

      <div className="services-rail">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="service-row"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* LEFT: ICON NODE */}
            <div className="service-node">
              <div className="node-icon">{service.icon}</div>
              {i !== services.length - 1 && <span className="node-line" />}
            </div>

            {/* RIGHT: CONTENT */}
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}