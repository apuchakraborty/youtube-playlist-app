import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    color: '#fff',
    textDecoration: 'none'
  }
}));

export default function Header() {
  const classes = useStyles();

 
  return (
    <div className={classes.root}>
<AppBar position="static">
  <Toolbar variant="dense">
    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton> */}
    <Link to="/" className={classes.logo}>
    <Typography variant="h6" color="inherit">
      Youtube Playlists App
    </Typography>
    </Link>
  </Toolbar>
</AppBar>
    </div>
  );
}