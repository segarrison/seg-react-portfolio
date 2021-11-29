import React, { useState } from "react";
// import { Route } from "react-router-dom";
// import Navbar from "./Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";

// import Projects from "./Projects";
// import "../"; (css?)
import Particles from "react-tsparticles";

function Home() {
  return (
    <>
      <CssBaseline />
      <div>
       
        <Particles
          height={"80vh"}
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
        
      </div>
    </>
  );
}

export default Home;