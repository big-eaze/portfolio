import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./homepage/HomePage";
import { AboutPage } from "./AboutPage/AboutPage";
import { ExperiencePage } from "./Expertise/Experience";
import "./App.css"
import { ProjectPage } from "./Projects/ProjectPage";
import { ContactMe } from "./Contact/ContactMe";

function App() {

  return (
    <Routes>
      <Route path="/" element={
      <Hero  
      } />
      <Route path="about" element={
        <AboutPage />
      } />
      <Route path="experience" element={
        <ExperiencePage />
      } />
      <Route path="projects" element={
        <ProjectPage />
      } />
      <Route path="contact" element={
        <ContactMe />
      } />
    </Routes>
  )
}

export default App
