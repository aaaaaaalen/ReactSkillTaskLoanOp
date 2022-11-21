import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@mui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { blue } from '@mui/material/colors';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        minHeight: '5rem',
    },

}));

const appcolor = blue[300];

const NavSearchBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ background: '#bdbdbd' }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h2" component="div" sx={{ flexGrow: 1, textAlign: "center"}}>
            University List
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavSearchBar;
