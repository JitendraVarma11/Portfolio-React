import "./App.css";
import { Navbar } from "./Components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Banner } from "./Components/Banner.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Project } from "./Components/Project.jsx";
import { Contact } from "./Components/Contact.jsx";
import { Footer } from "./Components/Footer.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
