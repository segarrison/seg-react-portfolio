import React from 'react';
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import avatar from "../assets/images/avatar.jpeg";
import Typed from "react-typed";

function Header(props) {
  const styleAvatar = {
    width: "120px",
    height: "120px",
    margin: "8px"
  };

  const styleTitle ={
    color: "#9D0208"
  }

 const styleSubtitle = {
  color: "#6A040F",
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
      <Avatar src={avatar} alt="image of Sarah Garrison" style={styleAvatar}/>
      </Grid>
      <Typography variant="h4" style={styleTitle}>
        <Typed strings ={["Sarah Garrison"]} typeSpeed = {40} />
      </Typography>
      <Typography variant="h5" style={styleSubtitle}>
        <Typed strings ={["Web Developer", "Problem Solver", "Programmer", "Nerd"]} typeSpeed = {40} backSpeed={60} loop/>
      </Typography>
    </Box>
  );
}

export default Header;