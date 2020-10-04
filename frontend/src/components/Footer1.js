import React from "react"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"
import { ListItemIcon } from '@material-ui/core';
import FlightIcon from '@material-ui/icons/Flight';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import PhoneIcon from '@material-ui/icons/Phone';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const useStyles = makeStyles(theme => ({
    linkHead: {
        fontWeight: "bold",
        color: "#070504",
        fontSize: "1.2rem"
    },
    GridItem: {
        margin: "3em"
    },
    Icon: {
        fontSize:"3em",
        color: "#070504"
    },
    link: {
        color: "rgb(119, 119, 119)"
    }
    
}))

const Footer1 = () => {
    const classes = useStyles();
    return (
      <Grid container justify="center">
          <Grid item className={classes.GridItem}>
              <Grid container justify="center">
                 <Grid item>
                     <ListItemIcon><FlightIcon className={classes.Icon}/></ListItemIcon>
                 </Grid>
                 <Grid item>
                     <Grid container direction="column">
                         <Grid item className={classes.linkHead}>Free Shipping</Grid>
                         <Grid item className={classes.link}>order $200 or more</Grid>
                     </Grid>
                 </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.GridItem}>
              <Grid container justify="center">
                 <Grid>
                     <ListItemIcon><RotateRightIcon className={classes.Icon} /></ListItemIcon>
                 </Grid>
                 <Grid item>
                     <Grid container direction="column">
                         <Grid item className={classes.linkHead}>Free Returns</Grid>
                         <Grid item className={classes.link}>Within 30 days</Grid>
                     </Grid>
                 </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.GridItem}>
              <Grid container justify="center">
                 <Grid item>
                     <ListItemIcon><ErrorOutlineIcon className={classes.Icon}/></ListItemIcon>
                 </Grid>
                 <Grid item>
                     <Grid container direction="column">
                         <Grid item className={classes.linkHead}>Get 20% off 1 item</Grid>
                         <Grid item className={classes.link}>when you Sign up</Grid>
                     </Grid>
                 </Grid>
              </Grid>
          </Grid>
          <Grid item className={classes.GridItem}>
              <Grid container justify="center">
                 <Grid item>
                     <ListItemIcon><PhoneIcon className={classes.Icon} /></ListItemIcon>
                 </Grid>
                 <Grid item>
                     <Grid container direction="column">
                         <Grid item className={classes.linkHead}>We support</Grid>
                         <Grid item className={classes.link}>24/7 amazing Services</Grid>
                     </Grid>
                 </Grid>
              </Grid>
          </Grid>
      </Grid>
    )
}

export default Footer1;