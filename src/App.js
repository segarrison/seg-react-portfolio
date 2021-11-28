import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
// import Header from "./components/Header";
import Projects from "./components/Projects";
import "./App.css";
// import Particles from "react-tsparticles";

function App() {
  return (
    <Router>
    <>
    
      <Navbar />
      <Routes>
         <Route  path="/" exact element ={<Home />} />
         <Route path="/portfolio" element={<Projects />} />
     

      </Routes>
    
    </>
    </Router>
  );
}

export default App;
