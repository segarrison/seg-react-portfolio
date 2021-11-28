import React from "react";
import styled from "@emotion/styled";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import avatar from "../assets/images/avatar.jpeg";
import { ListItemIcon } from "@mui/material";

function Navbar() {
  const styleBox = {
    width: "250px",
    background: "green",
    height: "30rem",
  };

  const styleAvatar = {
    display: "block",
    margin: "0.5rem auto",
    width: "104px",
    height: "104px"
  }

  const navIcons ={
    
  }

  return (
    <>
      <Box style={styleBox} component="div">
        <Avatar src={avatar} alt="image of Sarah Garrison" style = {styleAvatar}/>
        <Divider />
        <List>
          <ListItem>
            <ListItemIcon>

            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
      <Box component="nav">
        <AppBar position="static">
          <Toolbar>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">Sarah Garrison</Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
