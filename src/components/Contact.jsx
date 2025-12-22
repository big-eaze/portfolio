import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

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
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get in <span>Touch</span>
      </motion.h2>

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          type="submit"
          className={`btn-contact ${status === "sending" ? "sending" : ""}`}
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Sending..."
            : status === "success"
            ? "Sent!"
            : "Send Message"}
        </button>

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              className="status-msg error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ❌ Something went wrong. Try again!
            </motion.p>
          )}
          {status === "success" && (
            <motion.p
              className="status-msg success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </section>
  );
}
