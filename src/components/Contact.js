import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function Contact() {

  return (
    <Box component="div">
      <Grid container justifyContent="center">
      <Paper>
        <Box component="form">
          
          <Typography variant="h5">Contact Me!</Typography>
          <Typography variant="h6">
            To actually get in touch with me:
          </Typography>
          <Typography >
            email: s.garrison@gmail.com
          </Typography>
          <Typography >
            tel: 713-898-3482
          </Typography>
        </Box>
        </Paper>
      </Grid>
    </Box>
  );
}

export default Contact;
