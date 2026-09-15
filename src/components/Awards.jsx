import { motion } from "framer-motion";
import "./Awards.css";

const clients = [
  "Ginkbow",
  "Aurora Schools",
  "Spice!Route",
  "Prime Sphere",
  "SACA",
  "Virtual Styling",
];

export function Awards() {
  const logoTrack = [...clients, ...clients];

  return (
    <section className="awards clients" id="clients">
      <div className="shell">
        <motion.div
          className="section-head awards-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <span className="section-eyebrow">Wonderful clients</span>
          <h2 className="section-title">
            Built with <em>good people</em>
          </h2>
        </motion.div>
      </div>

      <div className="client-marquee" aria-label="Wonderful clients">
        <div className="client-track">
          {logoTrack.map((client, index) => (
            <span className="client-logo" key={`${client}-${index}`} aria-hidden={index >= clients.length}>
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}