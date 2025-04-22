import { Link } from "react-router-dom"
import "./Navigation.css"

export function NavigationSet({inDisplay, setInDisplay}) {


  function openHamburgerMenu() {
      setInDisplay(true);
  }
  function closeHamburgerMenu() {
    setInDisplay(false);
  }
  
  return (
    <div className="Header-container">
      <Link className="DevName" to="/">Israel 👋</Link>
      <div className="navigation-list">
        <Link className="Name" to="/">Home</Link>
        <Link className="Name" to="about">About Me</Link>
        <Link className="Name" to="experience">Experience</Link>
        <Link className="Name" to="projects">Projects</Link>
      </div>
      <div className="menu-container">
        {!inDisplay && (<img onClick={openHamburgerMenu} className="menu-icon" src="/portfolio/vert.png" />)}
        {inDisplay && (
            <div className={`nav-container ${inDisplay ? "show" : ""}`}>
          <img onClick={closeHamburgerMenu} className="close-icon" src="/portfolio/close-icon.png" />
          <Link onClick={closeHamburgerMenu} className="Name" to="/">Home</Link>
          <Link onClick={closeHamburgerMenu} className="Name" to="about">About Me</Link>
          <Link onClick={closeHamburgerMenu} className="Name" to="experience">Experience</Link>
          <Link onClick={closeHamburgerMenu} className="Name" to="projects">Projects</Link>
        </div>
        )}
      </div>
      
    </div>
  )
}