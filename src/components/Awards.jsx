import { motion } from "framer-motion";
import staircaseVideo from "../assets/staircase.mp4";
import "./Awards.css";

const clients = [
  "Ginkbow",
  "Aurora Schools",
  "Spice!Route",
  "Prime Sphere",
  "SACA",
  "Virtual Styling",
  "Platt",
  "FHandP"
];

export function Awards() {
  const logoTrack = [...clients, ...clients];

  return (
    <section className="awards clients" id="clients">
      <video
        className="awards-video"
        src={staircaseVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="awards-video-overlay" aria-hidden="true" />

      <div className="shell awards-shell">
        <motion.div
          className="section-head awards-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7 },
            },
          }}
        >
          <div>
            <span className="section-eyebrow">Wonderful clients</span>

            <h2 className="section-title">
              Built with <em>good people.</em>
            </h2>

            <p className="awards-intro">
              Thoughtful work happens when the right people bring their perspective
              to the room. Here are a few of the teams I have had the pleasure to
              build alongside.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="client-marquee" aria-label="Wonderful clients">
        <div className="client-track">
          {logoTrack.map((client, index) => (
            <span
              className="client-logo"
              key={`${client}-${index}`}
              aria-hidden={index >= clients.length}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}