import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      '"Josefin Sans"',
      'sans-serif'
    ].join(','),
  }
})

function Contact() {

  return (
    <Box component="div">
      <Grid container justifyContent="center">
      
        <Box component="div">
        <ThemeProvider theme={theme}>
          <Typography variant="h2" align="center" color={"#DC2F02"}><strong><br />Contact Me!</strong></Typography>
          <Typography variant="h4" align="center" color={"#F48C06"}><strong>
            <br />
            I am currently looking for freelance or full time work <br />
            in either a remote setting or in the Houston, TX area.
            <br />
            <br />
            Additionally, if you'd like to collaborate on a project, <br />
            I would also love to hear from you!</strong>
          </Typography>
          <Typography align="center">
            <br />
          <Link variant="h4" href="mailto:s.garrison@gmail.com?subject=Let's Work Together!" color={"#9D0208"}>Let's get started!</Link>
          </Typography>
          </ThemeProvider>
        </Box>
        
      </Grid>
    </Box>
  );
}

export default Contact;
