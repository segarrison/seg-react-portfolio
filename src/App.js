
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CssBaseline from '@mui/material/CssBaseline';
import Header from "./components/Header"

function App() {
 
  return (
    <>
      <CssBaseline />
    <div>
      <Navbar />
      <Header />
    
    </div>
    </>
  );
}

export default App;
