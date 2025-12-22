import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";
import { ScrollProvider } from "./ScrollController";
import Philosophy from "./components/Philosophy";




function App() {
  return (
    <ScrollProvider>
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}

export default App;
