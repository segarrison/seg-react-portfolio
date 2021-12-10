import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import { ListItemIcon } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";

function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      name: "GitHub",
      icon: <GitHubIcon />,
      link: "https://github.com/segarrison",
    },
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      link: "https://linkedin.com/in/sarah-garrison",
    },
  ];

  const styleFooter = {
    height: 60,
    backgroundColor: "rgba(0, 35, 66, 0.6",
    position: "fixed",
    bottom: "0",
    width: "100vw",
  };

  const styleNavIcons = {
    color: "#E85D04",
  };

  return (
    <>
      <Box component="footer" style={styleFooter}>
        <Grid container justifyContent="center" alignItems="center">
          {icons.map((icon) => (
            <IconButton
              style={styleNavIcons}
              component="a"
              href={icon.link}
              key={icon.name}
              alignItems="center"
              target="blank"
            >
              {icon.icon}
            </IconButton>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
// <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
