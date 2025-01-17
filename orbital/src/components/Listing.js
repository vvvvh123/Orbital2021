import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "75%",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Listing = ({ listing }) => {
  const classes = useStyles();

  return listing !== undefined ? (
    <Grid item xs={12} sm={6}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {listing.module}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {listing.moduleCoordinator}
            </Typography>
            <Typography variant="body2" component="p">
            <br></br>
              Number of Openings: {listing.numberOfOpenings} <br></br>
              Application Deadline: {listing.applicationDeadline} <br></br>
              title: {listing.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" button onClick= {() => {
            window.history.pushState("ListingModuleCodeLandingPage","ListingModuleCodeLandingPage", `/listings/${listing.module}`);
            window.location.reload(false);
          }}>
            View Listing
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ) : null; // Or have some loading screen;
};

export default Listing;