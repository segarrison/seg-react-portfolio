import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact  from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About"
import "./App.css";


function App() {
  return (
    <>
    <Router>
    
    
      <Navbar />
      <Routes>
         <Route  exact path="/seg-react-portfolio" element ={<Home />} />
         <Route path="/portfolio" element={<Projects />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    
    </Router>
    </>
  );
}

export default App;
