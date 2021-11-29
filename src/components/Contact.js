import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const TextBoxStyles = styled(TextField)({
  "& label.Mui-focused": {
    color: "purple",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "purple",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "dark blue",
      //   backgroundColor: "white"
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "purple",
    },
  },
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    //submit the form
  };
  return (
    <Box component="div">
      <Grid container justifyContent="center">
      <Paper>
        <Box component="form">
          
          <Typography variant="h5">Contact Me!</Typography>
          {/* <TextBoxStyles
              fullWidth={true}
              label="Name"
              variant="outlined"
              /> */}
          <form noValidate autoComplete="off">
            <div>
              <TextField
                label="Full Name"
                margin="normal"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              <TextField
                label="Email Address"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </div>
            <br />
            <TextField
              multiline
              rows="4"
              label="Message"
              margin="normal"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              fullWidth
            />
            <br />
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
          <Typography variant="h5">
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
