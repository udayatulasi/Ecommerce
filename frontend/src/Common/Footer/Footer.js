import React from 'react'   
import { Link } from "react-router-dom"
import Grid  from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import PhoneIcon from '@material-ui/icons/Phone';
import { ListItemIcon } from '@material-ui/core';

import Image from "../../assessts/logo.png"


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "rgb(255, 255, 255)"
    },
    link: {
        color: "rgb(119, 119, 119)",
        fontFamily: "Arial",
        fontSize: "1rem",
        fontWeight: "300",
        textDecoration: "none"
    },
    linkHead: {
        fontWeight: "bold",
        color: "#070504",
        fontSize: "1.2rem",
        textDecoration: "none"
    },
    gridItem: {
        margin: "4em"
    },
    grid: {
      fontsize: "1.3rem",
      border: "0.1rem solid #e1e1e1",
      borderRadius: "0.3rem",
      
    },
    Icon: {
        fontSize:"2em",
        color: "#070504"
    },
    gridin: {
        padding: "0.5rem 0.5rem 0.5rem 0.5rem"
    },
    phone: {
        color: "#3399FF",
        fontSize: "20px"
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className = {classes.footer}>
          <Grid container justify="center">
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                            <img src={Image} />
                        </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                    Something about Molla
                    </Grid>
                    <Grid item className={classes.grid}>
                <Grid container justify="center" className={classes.gridin}> 
                    <Grid item>
                        <ListItemIcon><PhoneIcon className={classes.Icon}/></ListItemIcon>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>Got Question? call us 24/7</Grid>
                            <Grid item component={Link} to="/path" className={classes.phone}>+0123 456 789</Grid>
                        </Grid>
                    </Grid>
                </Grid>
          </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/path" className={classes.linkHead}>
                        Useful Links
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        About Molla
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        FAQ
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                       contact us
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/path" className={classes.linkHead}>
                        Customer Service
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Payment Methods
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Money Back Guarantee
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Returns
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Shipping
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Terms and conditions
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item component={Link} to="/path" className={classes.linkHead}>
                        My account
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Sign In
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                         View Cart
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        My WishList
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Track My order
                    </Grid>
                    <Grid item component={Link} to="/path" className={classes.link}>
                        Help
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
        </footer>
    )
}


export default Footer;
