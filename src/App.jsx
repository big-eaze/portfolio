import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";
import { ScrollProvider } from "./ScrollController";




function App() {
  return (
    <ScrollProvider>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}

export default App;
