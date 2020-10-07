import { makeStyles } from '@material-ui/core'
import Grid from "@material-ui/core/Grid"
import React from 'react'
import Image from "../../assessts/img1.jpg"

const useStyles = makeStyles(theme => ({
    latestD: {
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat, repeat",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height : "35vh",
    },
    Header: {
        fontSize: "2em",
        color: "white",
        fontWeight: "bold"
    },
    para: {
        color: "white"
    },
    email: {
      height: "30px",
      fontSize: "1rem",
      lineHeight: "1.5",
      fontWeight: "300",
      borderTopLeftRadius: "30px",
      borderBottomLeftRadius: "30px",
      border: "0px",
      padding: "8px"
      
    },
    text: {
        height: "46px",
      fontSize: "1rem",
      lineHeight: "1.5",
      fontWeight: "300",
      borderTopRightRadius: "30px",
      borderBottomRightRadius: "30px",
      border: "0px",
      padding: "8px",
      backgroundColor: "#37A6F9" 

    },
    subscribe: {
        paddingTop: "1.15rem",
        paddingBottom: "1.15rem",
        backgroundColor: "rgb(119, 119, 119,)"
    }
}))

const Footer2 = () =>  {
    const classes = useStyles();
    return (
        <Grid container alignItems="center" justify="center" direction="column" className={classes.latestD}>
            <Grid item className={classes.Header}>
                Get the Latest Deals
            </Grid>
            <Grid item className={classes.para}>
                and receive $20 coupon for first shopping   
            </Grid>
            <Grid item className={classes.subscribe}>
                <input type="email" size="35" placeholder="Enter your Email" className={classes.email}></input>
                <button type="submit" size="20" className={classes.text}><span>Subscribe</span></button>
            </Grid>
        </Grid>
    )
};

export default Footer2;