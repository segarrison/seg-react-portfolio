import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import avatar from "../assets/images/avatar.jpeg";
import FadeIn from 'react-fade-in';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Josefin Sans"',
      'sans-serif'
    ].join(','),
  }
})


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
      <ThemeProvider theme={theme}>
      <FadeIn delay={800} transitionDuration={600}>
      
      <Typography variant="h4" style={styleTitle}>
        Sarah Garrison
        
      </Typography>
      <Typography variant="h5" style={styleSubtitle}>
        I'm a passionate coding professional who is excited to work with you on your next project.
        </Typography>
        <Typography variant="h5" style={styleSubtitle}>
        Or talk to you about your latest DnD game!
      </Typography>
      <Button variant="contained" href="https://drive.google.com/file/d/1QxVGugjySa_SX3qWemSSFNiQGmIVsPH5/view?usp=sharing" target = "blank">My Resume</Button>
      
      </FadeIn>
      </ThemeProvider>
    </Box>
  );
}

export default About;
