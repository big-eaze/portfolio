import { AboutPage } from "../AboutPage/AboutPage";
import { NavigationSet } from "../components/nav/Navigation";
import { HomeIntro } from "./HomeIntro";
import "./HomePage.css"

export function HomePage({inDisplay, setInDisplay}) {
  
  return(
    <>
    <div className="app-light-mode-container">
      <NavigationSet
        inDisplay={inDisplay}
        setInDisplay={setInDisplay}
      />
      <HomeIntro 
      />
      
    </div>
    </>
  )
}
      