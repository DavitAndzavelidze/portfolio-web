import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./views/About.jsx";
import Contact from "./views/Contact.jsx";
import Projects from "./views/Projects.jsx";
import Footer from "./views/Footer.jsx";
import "./app.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
