import "./About.css";

export function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <p className="about-subtitle">Get to Know More</p>
        <h1 className="about-title">About Me</h1>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src="/portfolio/israel2.png"  alt="Israel Ojeleye" />
        </div>

        <div className="about-text">
          <div className="about-cards">
            <div className="about-card">
              <img  src="/portfolio/work-history-dark.svg" alt="Experience" />
              <h3>Experience</h3>
              <p>2+ Years <br /> Frontend Development</p>
            </div>
            <div className="about-card">
              <img src="/portfolio/school-dark.svg" alt="Education" />
              <h3>Education</h3>
              <p>B.Sc Bachelor's Degree</p>
            </div>
            <div className="about-card">
              <img src="/portfolio/language-dark.svg" alt="Languages" />
              <h3>Languages</h3>
              <p>HTML, CSS, JS, React, TypeScript</p>
            </div>
          </div>

          <p className="about-description">
            I'm a passionate and experienced frontend developer with a knack for
            crafting visually stunning and user-friendly digital experiences. With
            years of experience in building responsive, interactive, and accessible
            web applications, I'm dedicated to delivering high-quality solutions
            that exceed client expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
