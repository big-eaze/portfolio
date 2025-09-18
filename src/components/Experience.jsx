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
          {

            [
              {
                name: "HTML",
                experience: "Experienced",
                img: "/portfolio/html5-logo.png",
                alt: "HTML"
              },
              {
                name: "CSS",
                experience: "Experienced",
                img: "/portfolio/css3-logo.webp",
                alt: "CSS"
              },
              {
                name: "Javascript",
                experience: "Experienced",
                img: "/portfolio/javascript-logo.png",
                alt: "Javascript"
              },
              {
                name: "React.js",
                experience: "Experienced",
                img: "/portfolio/react-logo.png",
                alt: "React"
              },
              {
                name: "Tailwindcss",
                experience: "intermediate",
                img: "/portfolio/tailwindcss.jpg",
                alt: "Tailwindcss"
              },
              {
                name: "Next.js",
                experience: "intermediate",
                img: "/portfolio/nextjs.jpg",
                alt: "Next.js"
              }
            ].map((tech) =>
              <div className="tech-card">
                <img src={tech.img} alt={tech.alt} />
                <div>
                  <h3>{tech.name}</h3>
                  <p>{tech.experience}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}
