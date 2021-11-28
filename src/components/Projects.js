import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import mtg from "../assets/images/mtg-alpha.png";

function Projects() {
  return (
    <Box component="div" id="portfolio">
        <Typography variant="h2" color="white">Portfolio</Typography>
      <Grid container justifyContent="center" alignItems="center">
          
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="MtG Alpha Collector"
                height="100%"
                image={mtg}
                
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  MtG Alpha Collection Manager
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a set collection tracker that presents the user with a
                  gallery of cards from Magic's first set and allows them to add
                  them to a virtual collection.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  GitHub Repo
                </Button>
                <Button size="small" color="primary">
                  Live Link
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
