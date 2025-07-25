import "./Projects.css";

export function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <p className="projects-subtitle">Browse My</p>
        <h1 className="projects-title">Projects</h1>
      </div>

      <div className="projects-grid">

        <div className="project-card">
          <img src="/project-one.jpg" alt="Project 1" />
          <div className="project-info">
            <h3>Portfolio Website</h3>
            <p>A modern single-page React portfolio website with scroll navigation and animations.</p>
            <div className="project-links">
              <a href="https://your-demo-link.com" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src="/project-two.webp" alt="Project 2" />
          <div className="project-info">
            <h3>Task Manager App</h3>
            <p>Task management tool with full CRUD operations, built with React + Express + MongoDB.</p>
            <div className="project-links">
              <a href="https://your-demo-link.com" target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/your-repo" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
