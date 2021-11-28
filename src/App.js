import React, { useState } from "react";

import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import Projects from "./components/Projects";
import "./App.css";
import Particles from "react-tsparticles";

function App() {
  return (
    <>
      <CssBaseline />
      <div>
        <Navbar />
        <Particles
          height={"100vh"}
          options={{
            autoPlay: true,
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            fpsLimit: 60,
            particles: {
              links: {
                color: "#ffffff",
                distance: 175,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                value: 50,
              },
              opacity:{
                value:{
                  min: 0.2,
                  max: 0.6
                }
              }
            },
          }}
        />
        <Header />
        <Projects />
      </div>
    </>
  );
}

export default App;
