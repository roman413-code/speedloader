import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { InputLabel } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'wheat',
      },
      text: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
        width: '25ch',
      },
  }));

export default function Submissions(){
    const classes = useStyles();
  return (
    <div>
      <h3>Submit your bullet! </h3>
      <form className= {classes.root}>
      <div>
      <InputLabel id="demo-simple-select-label">Rank</InputLabel>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          className={classes.text}
          >
          <MenuItem value={'SrA'}>SrA</MenuItem>
          <MenuItem value={'SSgt'}>SSgt</MenuItem>
          <MenuItem value={'TSgt'}>TSgt</MenuItem>
          <MenuItem value={'MSgt'}>MSgt</MenuItem>
          <MenuItem value={'SMSgt'}>SMSgt</MenuItem>
          <MenuItem value={'CMSgt'}>CMSgt</MenuItem>
          <MenuItem value={'2LT'}>2LT</MenuItem>
          <MenuItem value={'1LT'}>1LT</MenuItem>
          <MenuItem value={'Capt'}>Capt</MenuItem>
          <MenuItem value={'Maj'}>Maj</MenuItem>
          <MenuItem value={'LtCol'}>LtCol</MenuItem>
          <MenuItem value={'Col'}>Col</MenuItem>
          
        </Select>
      <TextField
          id="outlined-multiline-static"
          label="First Name"
          size="large"
          variant="filled"
          align="center"
          className={classes.text}
          />
        <TextField
          id="outlined-multiline-static"
          label="Last Name"
          size="large"
          variant="filled"
          align="center"
          className={classes.text}
          />
        
        <TextField
          id="outlined-multiline-static"
          label="Bullet"
          size="large"
          variant="filled"
          align="center"
          fullwidth
          className={classes.text}
          
          />
        </div>
        <div>
        <Button
            variant="contained"
            className={classes.text}>
            Submit
        </Button>
        </div>
      </form>

    
        
     
    </div>
  );
}