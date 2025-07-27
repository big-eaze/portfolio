import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  

  const [displayNav, setDisplayNav] = useState("hide");
  
  console.log(displayNav);
  return (
    <div className="navbar-overall">
      <div className="navbar">
        <div className="navbar-logo">Israel Ojeleye</div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="mobil-scr">
        {displayNav === "show" ?
          <FaTimes
            className="close-icon"
            size={20}
            onClick={() => setDisplayNav("hide")}
          /> :
          <FaBars
            className="hamburger-icon"
            size={20}
            onClick={() => setDisplayNav("show")}
          />
        }
        

        {displayNav === "show" && <ul className="navbar-links-two">
          <li><a onClick={() => setDisplayNav("hide")} href="#home">Home</a></li>
          <li><a onClick={() => setDisplayNav("hide")} href="#about">About</a></li>
          <li><a onClick={() => setDisplayNav("hide")} href="#experience">Experience</a></li>
          <li><a onClick={() => setDisplayNav("hide")} href="#projects">Projects</a></li>
          <li><a onClick={() => setDisplayNav("hide")} href="#contact">Contact</a></li>
        </ul>
        }
      </div>
    </div>
  );
}
