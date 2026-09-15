import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import contactSignal from "../assets/contact-signal.svg";
import "./Contact.css";

const contactInfo = [
  { icon: <Mail size={18} />, label: "Email", value: "israel.ojeleye.dev@gmail.com", href: "mailto:israel.ojeleye.dev@gmail.com" },
  { icon: <Phone size={18} />, label: "Phone / WhatsApp", value: "+234 706 745 9884", href: "tel:+2347067459884" },
  { icon: <MapPin size={18} />, label: "Location", value: "Lagos, Nigeria", href: null },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
};

export function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnnzdbdk", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="contact" id="contact">
      <img className="contact-vector" src={contactSignal} alt="" aria-hidden="true" />
      <div className="shell contact-inner">
        <motion.div
          className="contact-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.span className="section-eyebrow" variants={reveal} custom={0}>
            Contact
          </motion.span>
          <motion.h2 className="contact-title" variants={reveal} custom={1}>
            Let&rsquo;s work<br />together<span className="contact-accent">.</span>
          </motion.h2>
          <motion.p className="contact-blurb" variants={reveal} custom={2}>
            Have a project in mind? Drop me a message — I usually reply within a day.
          </motion.p>

          <motion.div className="contact-lines" variants={reveal} custom={3}>
            {contactInfo.map((info) => (
              <div className="contact-line" key={info.label}>
                <span className="contact-line-icon">{info.icon}</span>
                <div>
                  <span className="contact-line-label">{info.label}</span>
                  {info.href ? (
                    <a href={info.href}>{info.value}</a>
                  ) : (
                    <span className="contact-line-value">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
        >
          <motion.div className="form-field" variants={reveal} custom={0}>
            <label htmlFor="name">Your Name *</label>
            <input id="name" name="name" type="text" placeholder="John Doe" required />
          </motion.div>

          <motion.div className="form-field" variants={reveal} custom={1}>
            <label htmlFor="email">Your Email *</label>
            <input id="email" name="email" type="email" placeholder="john@example.com" required />
          </motion.div>

          <motion.div className="form-field" variants={reveal} custom={2}>
            <label htmlFor="message">Your Message *</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required />
          </motion.div>

          <motion.div className="form-actions" variants={reveal} custom={3}>
            <button
              type="submit"
              className={`contact-submit ${status === "sending" ? "sending" : ""} ${status === "success" ? "success" : ""}`}
              disabled={status === "sending"}
            >
              {status === "sending"
                ? "Sending\u2026"
                : status === "success"
                  ? "Sent \u2014 thank you!"
                  : "Send Message"}
              <ArrowUpRight size={17} />
            </button>
          </motion.div>

          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.p
                className="form-error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      <div className="contact-ticker" aria-hidden="true">
        <span>Let&rsquo;s build something great</span>
        <span className="contact-ticker-line"></span>
        <span>Let&rsquo;s build something great</span>
      </div>
    </section>
  );
}