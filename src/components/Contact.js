import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Animated } from "react-animated-css";


const theme = createTheme({
  typography: {
    fontFamily: ['"Josefin Sans"', "sans-serif"].join(","),
  },
});

function Contact() {
  return (
    <Box component="div" >
      <Grid container justifyContent="center">
        <Box component="div">
          <ThemeProvider theme={theme}>
            <Animated animationIn="bounceInRight" animationInDuration={2000}>
              <Typography variant="h2" align="center" color={"#DC2F02"}>
                <strong>
                  <br />
                  Contact Me!
                </strong>
              </Typography>
            </Animated>
            <Animated
              animationIn="bounceInLeft"
              animationInDuration={3000}
              animationInDelay={800}
            >
              <Typography variant="h4" align="center" color={"#F48C06"}>
                <strong>
                  <br />
                  I am currently looking for freelance or full time work <br />
                  in either a remote setting or in the Houston, TX area.
                  <br />
                  <br />
                  Additionally, if you'd like to collaborate on a project,{" "}
                  <br />I would also love to hear from you!
                </strong>
              </Typography>
            </Animated>
            <Animated
              animationIn="bounceInUp"
              animationInDuration={2000}
              animationInDelay={3000}
            >
              <Typography align="center">
                <br />
                <Link
                  variant="h4"
                  href="mailto:s.garrison@gmail.com?subject=Let's Work Together!"
                  color={"#9D0208"}
                ><strong>
                  Let's get started!</strong>
                </Link>
                <Typography variant="h4" align="center" color={"#FFFFFF"}>
                  Email: s.garrison@gmail.com
                  <br />
                  Phone: 713.898.3482
                  <p></p>
                  <p></p>
                </Typography>
              </Typography>
            </Animated>
          </ThemeProvider>
        </Box>
      </Grid>
    </Box>
  );
}

export default Contact;
