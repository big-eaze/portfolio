import "./Project.css"


export function Project({ img, title }) {
  return (
    <div className="project-container">
      <img className="project-img" src={img} />
      <h3>{title}</h3>
      <div className="project-btns">
        <button>GitHub</button>
        <button>Live Demo</button>
      </div>
    </div>
  )
}