import { motion } from "framer-motion";
import "./Philosophy.css";

const principles = [
  {
    title: "Clean Design",
    description: "Interfaces that are minimal, intuitive, and aesthetic.",
    icon: "🎨",
  },
  {
    title: "Performance",
    description: "Optimized for fast load times and smooth interactions.",
    icon: "⚡",
  },
  {
    title: "Innovation",
    description: "Creative solutions tailored to user needs and business goals.",
    icon: "🚀",
  },
  {
    title: "Scalability",
    description: "Built to grow with your project, easy to maintain and extend.",
    icon: "📈",
  },
];

export function Philosophy() {
  return (
    <section className="philosophy-section" id="philosophy">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span>Approach</span>
      </motion.h2>

      <div className="philosophy-grid">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            className="philosophy-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.7, ease: "easeOut" }}
          >
            <div className="card-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
