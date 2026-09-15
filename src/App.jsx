import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Awards } from "./components/Awards";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./App.css";
import { ScrollProvider } from "./ScrollController";

function App() {
  return (
    <ScrollProvider>
      <Hero />
      <Experience />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Awards />
      <Contact />
      <Footer />
    </ScrollProvider>
  );
}

export default App;