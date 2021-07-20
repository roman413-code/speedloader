import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: theme.spacing(1)
    },
    
  }));

export default function Home(){
    const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <Button 
      variant="contained"
      component={Link}
      to='/submissions'>Add Bullets
      </Button>
      <br />
      <Button 
      variant="contained"
      component={Link}
      to='/raters'>Rate Bullets
      </Button>
      
     
    </div>
  );
}