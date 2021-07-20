import React from "react";
import { MockBullets } from "./constants/Constants";
import { useParams } from "react-router";
import { Slider, Typography, makeStyles, TextField, Button } from "@material-ui/core";
import { marks } from "./constants/Constants";
const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      backgroundColor: 'wheat',
      color: 'black',
      padding: 100,
      marginBottom: 2,
      
    },
    margin: {
      height: 300,
    },
    box:{
        backgroundColor: 'wheat',
        color: 'black',
        display: 'flex',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 25,
        borderBottom: 25,
        marginBottom: 2,
        
    },
    break: {
        flexBasis: 800
    }
  }));

export default function BulletDetail(){
    const classes = useStyles();
    let { id } = useParams()
    
    const selectedBullet = MockBullets.filter(element => element.id == id )
    console.log(selectedBullet[0].note)
    return(
        <div>
        <h3>Please Rate </h3>
        <div className={classes.box}>
            {selectedBullet[0].note}
        </div>
        <React.Fragment>
        <div className={classes.root}>
        <div>
            <h5>Ratings</h5>
        </div>
      <Typography id="vertical-slider" gutterBottom>
        Action
      </Typography>
      
        <Slider
          orientation="vertical"
          marks={marks}
          defaultValue={5}
          aria-labelledby="vertical-slider"
          step={null}
          max={10}
        />
        <Typography gutterBottom>
            Impact
        </Typography>
        <Slider
          marks={marks}
          orientation="vertical"
          step={null}
          defaultValue={5}
          max={10}
          aria-labelledby="vertical-slider"
        />
        <Typography gutterBottom>
            Result
        </Typography>
        <Slider
          orientation="vertical"
          defaultValue={5}
          aria-labelledby="vertical-slider"
          step={null}
          marks={marks}
          max={10}
        /> 
      <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={4}
          variant="outlined"
        />
        <div className={classes.break}></div>
        <Button
        variant='contained'>
            Submit
        </Button>
      </div>
      
    </React.Fragment>
        
        </div>
    )
}