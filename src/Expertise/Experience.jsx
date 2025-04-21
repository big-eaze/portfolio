import { Link } from "react-router";
import { LanguagePart } from "./LanguagePart";
import "./Experience.css"
import { HomeNav } from "../components/nav/HomeNav";

export function ExperiencePage({isDarkMode}) {
  return (
    <div className={isDarkMode ? "main-d-container" : "main-l-container " }>
      <HomeNav />
      <div className="ex-container">
        <div className="ex-header">
          <p className="explore">Explore My</p>
          <h1 >Experience</h1>
        </div>
        <div className="experi-content-container">
          <p className="front-headline">Frontend Development</p>
          <div className="experiences-grid">
            <LanguagePart language="HTML" level="Experienced" img="/html5-logo.png"/>
            <LanguagePart language="CSS" level="Experienced" img="/css3-logo.webp"/>
            <LanguagePart language="Javascript" level="Experienced" img="/javascript-logo.png" />
            <LanguagePart language="React" level="Intermediate" img="/react-logo.png" />
            <LanguagePart language="Typescript" level="Intermediate" img="/typescript-logo.png" />
          </div>
        </div>
      </div>
    </div>
  )
}