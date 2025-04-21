import "./Introduction.css";
export function Introduction() {
  return (
    <div className="wrapper">
      <div className="introduction-light-container">
        <p>Get To Know More</p>
        <h1>About Me</h1>
      </div>
      <div className="content-container">
        <div className="img-wrapper">
          <img className="profile-pic" src="/profile-1.jpg" />
        </div>
        <div>
          <div className="experience-container">
            <div className="X-l-container">
              <img className="icon-experience" src="work-history-dark.svg" />
              <h2 className="light">Experience</h2>
              <p className="text-l-mix" >2+ years</p>
              <p className="text-l-mix">Frontend Development</p>
            </div>
            <div className="X-l-container">
              <img className="icon-experience" src="school-dark.svg" />
              <h2 className="light">Education</h2>
              <p className="empty-space"></p>
              <p className="text-l-mix">B.Sc Bachelors Degree</p>
            </div>
            <div className="X-l-container">
              <img className="icon-experience" src="language-dark.svg" />
              <h3 className="light">Languages</h3>
              <p className="text-l-mix">HTML, CSS, Javascript,<br /> React js, Typescript</p>
            </div>
          </div>
          <div className="about-l-text-container">
            <p className="moreInfo"><strong>I'm a passionate </strong> and experienced frontend developer with a knack for crafting visually stunning and user friendly digital experiences. With years  of experience in building responsive, interactive, and accessible web applications, i'm dedicated to delivering high quality solutions that exceeds client expectations.</p>
          </div>
        </div>
      </div>
    </div>
  )
}