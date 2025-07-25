import "./Contact.css";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <p className="contact-subtitle">Let’s Connect</p>
        <h1 className="contact-title">Contact Me</h1>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
