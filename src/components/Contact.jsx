import "./Contact.css";
import { motion } from "framer-motion";
import { useState } from "react";

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
      setStatus("error", err);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
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
            className={`btn-accent ${status === "sending" ? "sending" : ""}`}
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
                ? "Sent!"
                : "Send Message"}
          </button>

          {status === "error" && (
            <p className="error-text">❌ Something went wrong. Try again!</p>
          )}
          {status === "success" && (
            <p className="success-text">✅ Message sent successfully!</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
