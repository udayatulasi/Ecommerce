import { Grid } from '@material-ui/core';
import React from 'react';
import CardList from './reusable components/CardList';
import Brand from './reusable components/Brand';
import { makeStyles} from '@material-ui/core'

// Importing all files


const useStyles = makeStyles( () =>({

    brand : {
        margin : '5em 0' ,
       
    }

}))


export default function Home() {
    const classes = useStyles();
    const theme = {
        spacing: 8,
      }

    return (
        <>
        <Grid container direction="column">
            <Grid item container>
        <Grid item xs={0} sm={1}/>
            <h1>New Arrivals</h1>
        </Grid>
        <Grid item container>
            <Grid item xs={0} sm={1}/>
            <Grid item xs={12} sm={10}>
            <CardList/>
            </Grid>
        <Grid item xs={0} sm={1}/>
            </Grid>

            <Grid item  container className={ classes.brand}>
            <Grid item xs={0} sm={1}/>
            <Grid item xs={12} sm={10}>
                <Brand />
            </Grid>
            <Grid item xs={0} sm={1}/>
            </Grid>
        </Grid>
        </>
    )
}
