import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import TvIcon from "@material-ui/icons/Tv";
import PersonIcon from "@material-ui/icons/Person";
import BookIcon from "@material-ui/icons/Book";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    margin: "3em",
    [theme.breakpoints.down("md")]: {
      margin: "1.7em",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1.7em",
    },
  },
}));

export default function SideDrawer() {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        //  onOpen={() => setDrawerOpen(true)}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          <ListItem
            onClick={() => setDrawerOpen(false)}
            divider
            button
            component={Link}
            to="/"
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setDrawerOpen(false)}
            divider
            button
            component={Link}
            to="/products">
            <ListItemIcon>
            <TvIcon />
            </ListItemIcon>
            <ListItemText>Products</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setDrawerOpen(false)}
            divider
            button
            component={Link}
            to="/aboutus"
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText>About us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setDrawerOpen(false)}
            divider
            button
            component={Link}
            to="/blog"
          >
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>

            <ListItemText>Blog</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => setDrawerOpen(false)}
            divider
            button
            component={Link}
            to="/contactus"
          >
            <ListItemIcon>
              <ContactPhoneIcon />
            </ListItemIcon>

            <ListItemText>Contact us</ListItemText>
          </ListItem>
        </List>
      </Drawer>

      <IconButton onClick={() => setDrawerOpen(!drawerOpen)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
}
