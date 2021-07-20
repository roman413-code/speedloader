import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles, Link } from '@material-ui/core';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    //background: 'linear-gradient(to right bottom, #ff6600, #003366)',
    background: 'linear-gradient(to right bottom, #003366, gray)',
  },
  icon: {
    marginRight: '.5em',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    '& nav': {
      display: 'flex',
      flexDirection: 'row',
    },
  },
  headerLogo: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& img': {
      margin: theme.spacing(2),
    },
  },

  headerText: {
    flexGrow: 1,
    textDecoration: 'none',
    fontSize: '1.5em',
    '&:visited': {
      color: 'white',
      font: 'Encode Sans SC, sans-serif',
    },
  },
  linkItem: {
    margin: theme.spacing(0, 2),
    textDecoration: 'none',
    fontSize: '1.5em',
    '&:visited': {
      color: 'white',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const routes = [
    {
      url: '/Raters',
      name: 'Raters',
    },
    {
      url: '/Submissions',
      name: 'Submissions',
    },
  ];
  const location = useLocation();

  const checkActive = (match) => {
    const active = location.pathname.split('/');
    const test = match.split('/');
    if (active[1] === test[1]) {
      return 'activeClass';
    }
  };

  return (
    <AppBar position='relative' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <NavLink
          activeClassName={classes.activeClass}
          to={'/'}
          className={classes.headerText}
          underline='none'
          end
        >
          <div>
            
            <Typography variant='h1' className={classes.headerText}>
              {' '}
              SpeedLoader{' '}
            </Typography>
          </div>
        </NavLink>
        <nav>
          {routes.map((route, i) => {
            return (
              <NavLink
                key={`${route}${i}`}
                to={route.url}
                className={clsx(
                  classes.linkItem,
                  classes[checkActive(routes[i].url)]
                )}
                activeClassName={classes.activeClass}
              >
                <Typography variant='h6'>{route.name}</Typography>
              </NavLink>
            );
          })}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
