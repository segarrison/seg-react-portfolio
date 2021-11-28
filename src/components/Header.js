import React from 'react';
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import avatar from "../assets/images/avatar.jpeg";
import Typed from "react-typed";

function Header(props) {

  return (
    <Box>
      <Avatar src={avatar} alt="image of Sarah Garrison"/>
      <Typography variant="h4">
        <Typed strings ={["Sarah Garrison"]} typeSpeed = {40} />
      </Typography>
    </Box>
  );
}

export default Header;