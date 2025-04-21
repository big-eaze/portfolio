import { Link } from "react-router"
import "./HomeNav.css"

export function HomeNav() {
  return (
    <Link className="back-home-link" to="/">
      <img className="home-icon" src="/home.svg" />
    </Link>
  )
}