import { Link } from "react-router"
import "./HomeIntro.css"

export function HomeIntro() {
  return (
    <div className="container">
      <div>
        <img className="profile-picture" src="/profile-1.jpg" />
      </div>
      <div className="intro-text">
        <p className="hello">Hello, I'm  </p>
        <span className="myName">Israel oluwatobi Ojeleye</span>
        <p className="frontend">Frontend Developer</p>
        <Link to="contact">
          <button className="light-contact-btn">Contact me ➡</button>
        </Link>
      </div>
    </div>
  )
}