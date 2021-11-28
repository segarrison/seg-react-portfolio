import React, { useState } from "react";
// import styled from "@emotion/styled";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ListItemButton from "@mui/material/ListItemButton";
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
    background: "#6A040F",
    height: "100%",
  };

  const styleAvatar = {
    display: "block",
    margin: "0.5rem auto",
    width: "104px",
    height: "104px",
  };

  const navIcons = [
    {
      listIcon: <HomeIcon />,
      listText: "Home",
      listLink: "#home",
    },
    {
      listIcon: <AssignmentIndIcon />,
      listText: "Resume",
      listLink: "#resume",
    },
    {
      listIcon: <AppsIcon />,
      listText: "Portfolio",
      listLink: "#portfolio",
    },
    {
      listIcon: <ContactMailIcon />,
      listText: "Contact",
      listLink: "#contact",
    },
  ];

  const styleNavIcons = {
    color: "#E85D04",
  };
  const [state, setState] = useState({
    right: false,
  });
  const toggleSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };
  const sideNav = (slider) => (
    <Box style={styleBox} component="div" onClick={toggleSlider(slider, false)}>
      <Avatar src={avatar} alt="image of Sarah Garrison" style={styleAvatar} />
      <Divider />
      <List>
        {navIcons.map((listItems) => (
          <ListItemButton component="a" href={listItems.listLink}>
            <ListItemIcon style={styleNavIcons}>
              {listItems.listIcon}
            </ListItemIcon>
            <ListItemText style={styleNavIcons} primary={listItems.listText} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: "#370617", top: 0 }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <MenuIcon style={{ color: "#E85D04" }} />
            </IconButton>
            <Typography variant="h5">Sarah Garrison</Typography>
            <Drawer
              open={state.right}
              anchor="right"
              onClose={toggleSlider("right", false)}
            >
              {sideNav("right")}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Navbar;
