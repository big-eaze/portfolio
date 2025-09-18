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
          <img src="/portfolio/project1.jpg" alt="Project 1" />
          <div className="project-info">
            <h3>School Management APP</h3>
            <p>A modern, visually appealing, role based(Admin, Student, staff) SM web application built with React + Express + SQLITE.</p>
            <div>
              LOGS
              <p>ADMIN - Username:<strong>jahman1092</strong> password: <strong>Israel1092@</strong></p>
              <p>STUDENT - Username:<strong>alex1092</strong> password: <strong>Alex1092@</strong></p>
              <p>STAFF - Username:<strong>john1092</strong> password: <strong>John1092@</strong></p>
            </div>
            <div className="project-links">
              <a href="http://ginkbow-management-env.eba-wjasp6pr.eu-north-1.elasticbeanstalk.com" target="_blank" >Live Demo</a>
              <a href="https://github.com/big-eaze/Ginkbow-Management" target="_blank" >GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src="/portfolio/project2.jpg" alt="Project 2" />
          <div className="project-info">
            <h3>An E-commerce website (fully responsive & user friendly)</h3>
            <p>A single-page E-commerce website with full CRUD operations, built with React + Express + SQLITE.</p>
            <div className="project-links">
              <a href="http://ginkbow-shop-env.eba-wzppp4xt.eu-north-1.elasticbeanstalk.com/" target="_blank">Live Demo</a>
              <a href="https://github.com/big-eaze/Ginkbow-shop" target="_blank" >GitHub</a>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src="/portfolio/project3.jpg" alt="Project 2" />
          <div className="project-info">
            <h3>A Restuarant web app (responsive to mobile screen sizes and intuitive Navigations)</h3>
            <p>A prototype built with modern day tech.(React, tailwind-css, shadcn)</p>
            <div className="project-links">
              <a href="https://restaurant-ten-sable.vercel.app" target="_blank">Live Demo</a>
              <a href="https://github.com/big-eaze/Restaurant" target="_blank" >GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
