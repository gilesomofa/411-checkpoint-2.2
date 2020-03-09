import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  Navbar: {
    flexGrow: 1,
    background: "green"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const classes = useStyles();
  let loggedIn = document.cookie;
  return (
    <div>
      <AppBar className={classes.Navbar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ATX Small Business
          </Typography>
          {/* <Button onClick={()=> props.onLoginChange()}color="inherit">{ props.onLoginButtonText ? 'Logout' : 'Login' }</Button> */}
          <ul id="navItemsContainer">
            {loggedIn == "loggedIn=true" && (
              <li className="navItems">
                <Link to="/AddListing">Add Listing</Link>
              </li>
            )}
            <li className="navItems">
              <Link to="/">Listings</Link>
            </li>

            <li className="navItems">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;

/*<Button onClick={()=> props.Listings()}color="inherit">{ props.ListingsText 'Listings' }</Button> */
