import "./LanguagePart.css"

export function LanguagePart({ language, level, img }) {
  return (
    <div className="Language-container">
      <img className="tech-logo" src={img} alt="tech logo" width="30px" />
      <div>
        <h3 className="text-name">{language}</h3>
        <p className="level">{level}</p>
      </div>
    </div>
  )
}