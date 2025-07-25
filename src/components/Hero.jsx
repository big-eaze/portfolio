import "./Hero.css";

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-image">
          <img src="/portfolio/profile-1.jpg" alt="Israel Ojeleye" />
        </div>
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Israel Oluwatobi Ojeleye</h1>
          <h2 className="title">Frontend Developer</h2>
          <a href="#contact" className="cta-button">
            Contact Me
            <img src="/portfolio/arrow-forward.svg" alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
