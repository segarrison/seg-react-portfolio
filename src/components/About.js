import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import avatar from "../assets/images/avatar.jpeg";
import Typed from "react-typed";

function About() {
    const styleAvatar = {
        width: "120px",
        height: "120px",
        margin: "8px"
      };
    
      const styleTitle ={
        color: "#9D0208"
      }
    
     const styleSubtitle = {
      color: "white",
      marginBottom: "3rem"
     }
     const styleTypeContainer ={
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: "translate(-50%, -50%",
       width: "100vw",
       textAlign: "center",
       zIndex: 1
    
     }
  return (
    <Box style={styleTypeContainer} id="home">
      <Grid container justifyContent="center">
        <Avatar
          src={avatar}
          alt="image of Sarah Garrison"
          style={styleAvatar}
        />
      </Grid>
      <Typography variant="h4" style={styleTitle}>
        <Typed strings={["Sarah Garrison"]} typeSpeed={40} />
      </Typography>
      <Typography variant="h5" style={styleSubtitle}>
        <Typed
          strings={["I'm a passionate coding professional who is excited to work with you on your next project."]}
          typeSpeed={28}
          
        />
        <br />
        <Typed strings={["Or talk to you about your latest DnD game!"]}
        typeSpeed={50}
        startDelay={4100}
        />
      </Typography>
    </Box>
  );
}

export default About;
