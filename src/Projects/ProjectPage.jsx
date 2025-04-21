import { HomeNav } from "../components/nav/HomeNav"
import { Project } from "./Project"
import "./ProjectPage.css"
export function ProjectPage({isDarkMode}) {
  return (
    <div className={isDarkMode ? "project-main-d-container" : "project-main-l-container"}>
      <HomeNav />
      <div className="project-page-body">
        <div className="start-text">
          <p>Browse my Recent</p>
          <h1>Projects</h1>
        </div>
        <p className="welcome-msg">Welcome to my web development portfolio! <br/>Explore a collection of projects showcasing my <br/>expertise in front-end development.</p>
        <div className="projects-container">
          <Project
            img="/project-one.jpg"
            title="Project One"
          />
          <Project
            img="/project-two.webp"
            title="Project Two"
          />
          <Project
            img="/project-three.webp"
            title="Project Three"
          />
        </div>
      </div>
    </div>
  )
}