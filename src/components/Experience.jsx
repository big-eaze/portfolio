import "./Experience.css";

export function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <p className="experience-subtitle">Explore My</p>
        <h1 className="experience-title">Experience</h1>
      </div>

      <div className="experience-content">
        <h2 className="category-title">Frontend Development</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <img src="/portfolio/html5-logo.png" alt="HTML" />
            <div>
              <h3>HTML</h3>
              <p>Experienced</p>
            </div>
          </div>
          <div className="tech-card">
            <img src="/portfolio/css3-logo.webp" alt="CSS" />
            <div>
              <h3>CSS</h3>
              <p>Experienced</p>
            </div>
          </div>
          <div className="tech-card">
            <img src="/portfolio/javascript-logo.png" alt="JavaScript" />
            <div>
              <h3>JavaScript</h3>
              <p>Experienced</p>
            </div>
          </div>
          <div className="tech-card">
            <img src="/portfolio/react-logo.png" alt="React" />
            <div>
              <h3>React</h3>
              <p>Intermediate</p>
            </div>
          </div>
          <div className="tech-card">
            <img src="/portfolio/typescript-logo.png" alt="TypeScript" />
            <div>
              <h3>TypeScript</h3>
              <p>Basic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
