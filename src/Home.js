import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
    root: {
      marginRight: theme.spacing(1)
    },
    box:{
      display: 'flex',
      justifyContent: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    }
    
  }));

export default function Home(){
    const classes = useStyles();
  return (
    <div className={classes.root}>
     
      <img height='500' src='https://cdn.dribbble.com/users/719060/screenshots/2620048/tiger.jpg?compress=1&resize=800x600' /><br />
      <div className={classes.box}>
      <Button 
      variant="contained"
      component={Link}
      to='/submissions'>Add Bullets
      </Button>
      
      <Button 
      variant="contained"
      component={Link}
      to='/raters'>Rate Bullets
      </Button>
      </div>
      
     
    </div>
  );
}