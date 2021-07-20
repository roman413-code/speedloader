import React from "react";
import { MockBullets } from "./MockBullets";
import { useParams } from "react-router";
import { Slider, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
      height: 300,
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'wheat',
      color: 'black',
      padding: 100,
      
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
        
    }
  }));

export default function BulletDetail(){
    const classes = useStyles();
    let { id } = useParams()
    const marks = [
        {
            value: 0,
            label: '0',
          },
          {
            value: 1,
            label: '1',
          },
          {
            value: 2,
            label: '2',
          },
          {
            value: 3,
            label: '3',
          },
          {
            value: 4,
            label: '4',
          },
          {
            value: 5,
            label: '5',
          },
          {
            value: 6,
            label: '6',
          },
          {
            value: 7,
            label: '7',
          },
          {
            value: 8,
            label: '8',
          },
          {
            value: 9,
            label: '9',
          },
          {
            value: 10,
            label: '10',
          },
    ]
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
      </div>
    </React.Fragment>
        
        </div>
    )
}