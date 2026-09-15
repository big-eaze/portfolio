import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "Israel transformed our clunky store into something our customers actually enjoy using. Fast, sharp and a genuine pleasure to work with.",
    name: "Dami A.",
    role: "Founder, Ginkbow",
  },
  {
    quote:
      "The interface he designed for our school platform is intuitive even for parents who aren't tech-savvy. Rollout was seamless.",
    name: "Mrs. Adebayo",
    role: "Principal, Aurora Schools",
  },
  {
    quote:
      "His eye for motion and detail is rare. Every interaction feels considered, and mobile-first was never an afterthought.",
    name: "Tunde O.",
    role: "Product Lead",
  },
  {
    quote:
      "Delivered a polished restaurant prototype ahead of schedule. Communicative, proactive and deeply invested in the outcome.",
    name: "Chiamaka N.",
    role: "Restaurant Owner",
  },
  {
    quote:
      "Reliable, modern and honest about trade-offs. He's my first call for any frontend work now.",
    name: "Kelvin E.",
    role: "Freelance Designer",
  },
];

export function Testimonials() {
  return (
    <section className="testimonials" aria-label="Client testimonials">
      <div className="shell">
        <motion.div
          className="section-head testimonials-head"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 32 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <span className="section-eyebrow">Testimonials</span>
          <h2 className="section-title">
            What <em>clients</em> say
          </h2>
        </motion.div>
      </div>

      <div className="shell testimonials-grid">
        {testimonials.map((t, i) => (
          <motion.figure
            className="tst-card"
            key={t.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: i * 0.08 }}
          >
            <Quote size={28} className="tst-quote-icon" />
            <span className="tst-index">0{i + 1}</span>
            <div className="tst-stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={13} fill="currentColor" />
              ))}
            </div>
            <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}