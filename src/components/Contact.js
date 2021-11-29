import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const TextBoxStyles = styled(TextField)({
    '& label.Mui-focused': {
        color: 'purple',
        
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'purple',
        
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'dark blue',
        //   backgroundColor: "white"
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'purple',
        },
      },  
})

function Contact() {
  return (
  <Box component="div">
      <Grid container justifyContent="center">
          <Box component="form">
              <Typography variant="h5">
                  hire or contact me
              </Typography>
              <TextBoxStyles
              fullWidth={true}
              label="Name"
              variant="outlined"
              />
              
          </Box>
      </Grid>

  </Box>);
}

export default Contact;
