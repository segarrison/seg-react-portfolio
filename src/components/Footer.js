import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link"
import Container from "@mui/material/Container";


function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/"
    },
   
  ]
   
  const styleFooter = {
      height: 60,
      backgroundColor: "white",
  }

  return (
    <Box component="footer" style ={styleFooter} className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </Box>
  );
}

export default Footer;
