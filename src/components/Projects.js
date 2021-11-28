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
import workout from "../assets/images/wt-add.png";
import wishdish from "../assets/images/wishdishnew.png";

function Projects() {
  const styleCardContainer = {
    maxWidth: 345,
    margin: "5rem auto",
  };
  return (
    <Box component="div" id="portfolio">
      <Typography variant="h2" color="white" id="portfolio">
        Portfolio
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card style={styleCardContainer}>
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
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/Nickm615/MtG-Alpha-Collection-Manager" target="blank">
                GitHub Repo
              </Button>
              <Button size="small" color="primary" href="https://mtg-alpha-collection-manager.herokuapp.com/" target="blank">
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Fitness Tracker"
                height="100%"
                image={workout}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Workout Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  An application that allows a user to input resistance or
                  cardio activity for the day, and then displays graphs of the
                  past seven days of workout activity.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href="https://github.com/segarrison/WorkoutTracker" target="blank">
                GitHub Repo
              </Button>
              <Button size="small" color="primary" href="https://stark-badlands-68480.herokuapp.com/" target="blank">
                Live Link
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card style={styleCardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="WishDish"
                height="100%"
                image={wishdish}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Foodie
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Foodie is an interactive one-stop shop where user is provided
                  with many options to help them make deciding what to eat a
                  less ardious taks.
                </Typography>
                <br />
                <Typography variant="body2" color="textSecondary" component="p">
                  Note: part of the functionality of this app requires
                  initializing the demo server. Please click the button below to
                  do so before using the site.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://github.com/nskidmore7/GroupProject1"
                target="blank"
              >
                GitHub Repo
              </Button>
              <Button size="small" color="primary" href="https://nskidmore7.github.io/GroupProject1/" target="blank">
                Live Link
              </Button>
              <Button size="small" color="primary" href="https://cors-anywhere.herokuapp.com/corsdemo" target="blank">
                Demo Server
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Projects;
