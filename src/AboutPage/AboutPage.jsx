import { Introduction } from "./Introduction";
import "./AboutPage.css";
import { HomeNav } from "../components/nav/HomeNav";

export function AboutPage({isDarkMode, setIsDarkMode}) {
  return (
    <div className={isDarkMode ? "overall-dark-container " : "overall-light-container"}>
      <HomeNav/>
      <Introduction  isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  )
}