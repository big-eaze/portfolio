import { HomeNav } from "../components/nav/HomeNav"
import "./ContactMe.css"

export function ContactMe() {
  return (
    <div className="contact-main-l-container">
      <HomeNav />
      <div className="contact-container">
        <p className="connect-light">Connect with me</p>
        <h1 className="inTouch-light">Get in touch</h1>
        <div className="question-text-container">
          <p className="question-text" >I'd love to hear from you! If you have questions, comments or feedback, please use the form below.</p>
        </div>
        <div className="input-container">
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="textarea-btn-container">
          <textarea placeholder="Enter your message" />
          <button className="btn-light">Submit now ➡ </button>
        </div>
      </div>
    </div>
  )
}