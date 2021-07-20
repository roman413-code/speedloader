import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Home from './Home'
import Raters from './Raters'
import Submissions from './Submissions'
import BulletDetail from './BulletDetail';

const useStyles = makeStyles((theme) => ({
    root: {
      //backgroundColor: theme.palette.background.default,
      //background: 'linear-gradient(to right bottom, #ff6600, #003366)',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
    },
  }));
  
  export default function Main() {
    const classes = useStyles();
  
    return (
      
      <div className={classes.root}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/submissions'>
            <Submissions />
          </Route>
          <Route exact path='/raters'>
            <Raters />
          </Route>
          <Route path="/raters/:id">
            <BulletDetail />
          </Route>
        </Switch>
      </div>
      
    );
  }