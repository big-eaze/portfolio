import "./Contact.css";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <p className="contact-subtitle">Let’s Connect</p>
        <h1 className="contact-title">Contact Me</h1>
      </div>

      <div className="contact-container">
        <form action="https://formspree.io/f/mnnzdbdk" method="POST" className="contact-form">
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
          {/*<input type="hidden" name="_redirect" value="https://israel-portfolio.com/thank-you" />*/}
        </form>
      </div>
    </section>
  );
}
