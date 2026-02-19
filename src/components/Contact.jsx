import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

export function Contact() {
  const [status, setStatus] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);

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
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="contact-section" id="contact">
      {/* Animated background orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <motion.div
        className="contact-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="section-header">
          <motion.h2 className="section-title">
            Let's Create
            <br />
            <span className="gradient-text">Something Amazing</span>
          </motion.h2>
          <motion.p className="section-subtitle">
            Have a project in mind? Drop me a message and let's bring your ideas to life.
          </motion.p>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <div className="form-grid">
            {/* Name Input */}
            <motion.div
              className={`input-wrapper ${focusedField === "name" ? "focused" : ""}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                required
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
              <div className="input-highlight"></div>
            </motion.div>

            {/* Email Input */}
            <motion.div
              className={`input-wrapper ${focusedField === "email" ? "focused" : ""}`}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
              <div className="input-highlight"></div>
            </motion.div>
          </div>

          {/* Message Textarea */}
          <motion.div
            className={`input-wrapper textarea-wrapper ${focusedField === "message" ? "focused" : ""}`}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`btn-contact ${status === "sending" ? "sending" : ""} ${status === "success" ? "success" : ""}`}
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="btn-text">
              {status === "sending"
                ? "Sending..."
                : status === "success"
                  ? "Sent Successfully!"
                  : "Send Message"}
            </span>
            <span className="btn-icon">
              {status === "success" ? "✓" : "→"}
            </span>
          </motion.button>

          {/* Status Messages */}
          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.div
                className="status-msg error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="status-icon">⚠</span>
                <span>Oops! Something went wrong. Please try again.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </section>
  );
}