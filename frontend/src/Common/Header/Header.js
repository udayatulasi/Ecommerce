import React, { useState } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LogoImage from "../../assessts/images/logo.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import { Link } from 'react-router-dom';
// for search bar
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

// For login and cart
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

// for categories
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

// For tabs
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// For menu on products tab
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

// drawer
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  appbar: {
    position: "relative",
    background: "#FDFEFE",
    zIndex: theme.zIndex.modal + 1,
  },
  appbarContent: {
    marginTop: "2em",
  },

  logoImage: {
    marginLeft: "2em",
  },

  logoImage2: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  logoCenter: {
    display: "block",
    marginleft: "auto",
    marginright: "auto",
  },
  search: {
    position: "relative",
    // align: "center",
    width: "80%",
    height: "3em",
    // marginLeft: "3em",
    border: " 2px solid #DCDCDC",
    borderRadius: "25px",
  },
  searchicon: {
    color: "#020A0F",
    position: "absolute",
    paddingLeft: "1em",
    marginTop: "0.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    marginTop: "0.5em",
    color: "#020A0F",
    width: "100%",
  },

  inputInput: {
    paddingLeft: "4em",
  },

  formControl: {
    minWidth: "300px",
    marginTop: "1em",
    marginLeft: "2em",
  },

  tabsContainer: {
    marginLeft: "6em",
  },

  tabs: {
    minWidth: 10,

    marginLeft: "25px",
    textTransform: "none",
    textDecoration: "none",
    fontWeight: 450,
    fontSize: "1rem",
    
  },

  menus : {
    marginTop:'5em'
  },

  sale: {
    color: "#020A0F",
  },
}));

 function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.only("sm"));

  // states
  const [ value, setValue] = useState(0);
  // For menu on products tab
  const [ anchorEl, setAnchorEl ] = useState(null);
  const [ open, setOpen]  = useState(false);


  const  handleValueChange = ( e, value) => {
    setValue(value)
  }

  // For menu on products tab
  const handleProductsClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null)
    setOpen(false)
  }
  
 
  const tabs = (
    <React.Fragment>
      <Hidden smDown>
        <Grid item xs={9}>
          <Tabs value={value} 
          className={classes.tabsContainer} 
          onChange={ handleValueChange}
          indicatorColor = "secondary"
          >
            <Tab
              disableRipple
              className={classes.tabs}
              label="Home"
              component = {Link}
              to="/"
              style={{ color: "black", marginLeft: "0em" }}
              
            />

            <Tab
              aria-owns={ anchorEl ? "products-menu" : undefined}
              aria-haspopup={ anchorEl ? "true" : undefined}
              onMouseOver={ (event) => handleProductsClick(event)}
              disableRipple
              className={classes.tabs}
              label="Products"
              component = {Link}
              to="/products"
              style={{ color: "black" }}
            />
            <Tab
              disableRipple
              className={classes.tabs}
              label="About us"
              component = {Link}
              to="/aboutus"
              style={{ color: "black" }}
            />
            <Tab
              disableRipple
              className={classes.tabs}
              label="Blog"
              component = {Link}
              to="/blog"
              style={{ color: "black" }}
            />
            <Tab
              disableRipple
              className={classes.tabs}
              label="Contact us"
              component = {Link}
              to="/contactus"
              style={{ color: "black" }}
            />

            <Tab
              disableRipple
              className={classes.tabs}
              label="Login/Signup"
              component = {Link}
              to="/contactus"
              style={{ color: "black" }}
            />
          </Tabs>

          
          
          <Menu
          id="products-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose}}
          className = { classes.menus}
          >

<Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
  <MenuItem onClick={handleClose}>Profileeeeeeeeeeeeee</MenuItem>
  

  </Grid>
  <Grid  container  item xs={12} spacing={3}>
  <MenuItem onClick={handleClose}>Profileeeeeeeeeeeeee</MenuItem>
  
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <MenuItem onClick={handleClose}>Profileeeeeeeeeeeeee</MenuItem>
  
  </Grid>
  
</Grid>
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
             {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
            {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}

          </Menu>
        </Grid>
      </Hidden> 
    </React.Fragment>
  );

  return (
    <Appbar position="static" className={classes.appbar}>
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          className={classes.appbarContent}
        >
          {/* Icon button */}
          
          <Grid item xs={1}>
            {/* Tabs */}
            {matchesSM ? <SideDrawer /> : null }
          </Grid>

          <Grid item sm>
            <Button>
              <img
                src={LogoImage}
                alt="logo image"
                className={classes.logoImage2}
                // marginLeft={matchesSM ? "7em" : null}
              />
            </Button>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={7}>
              <div className={classes.search}>
                <div>
                  <SearchIcon className={classes.searchicon} />
                </div>
                <InputBase
                  placeholder="Search Product...."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                ></InputBase>
              </div>
            </Grid>
          </Hidden>

          {/* login & cart */}
          <Hidden xsDown>
            <Grid item sm>
              <Grid container direction="row" justify="space-between" alignItems="center">
                
                <IconButton>
                  <AddShoppingCartIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item xs={3}>
              <FormControl variant="filled" className={classes.formControl}>
                <InputLabel>Browse Categories</InputLabel>
                <Select></Select>
              </FormControl>
            </Grid>
          </Hidden>

          {/* Tabs */}
          {matchesSM ? null : tabs}
        </Grid>
      </Toolbar>
    </Appbar>
  );
}

export default Header;