import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
// import CssBaseline from "@mui/material/CssBaseline";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact  from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


function App() {
  return (
    <>
    <Router>
    
    
      <Navbar />
      <Routes>
         <Route  exact path="/seg-react-portfolio" element ={<Home />} />
         <Route path="/portfolio" element={<Projects />} />
         <Route path="/resume" element={<Resume />} />
         <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    
    </Router>
    </>
  );
}

export default App;
