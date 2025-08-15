import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop"; // optional
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <BackToTop />
    </>
    

  );
}

export default App;
