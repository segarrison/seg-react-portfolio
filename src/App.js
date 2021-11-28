import React, { useState } from "react";

import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import "./App.css";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <Navbar />
        <Header />
        <Particles
          options={{
            autoPlay:true,
            fullScreen: {
              enable: false,
              zIndex: 1
            },
            fpsLimit: 60,
            particles: {
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false
              },
              number: {
                value: 60,
              },
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
