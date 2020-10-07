import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/styles"
import Laptop from '../assessts/images/cats/1.png';
import Camera from '../assessts/images/cats/2.png';
import Mobile from '../assessts/images/cats/3.png';
import TV     from '../assessts/images/cats/4.png';
import Speaker from '../assessts/images/cats/5.png';
import Watch   from '../assessts/images/cats/6.png';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    categories :{
       margin : '3em 3em'
    },
    heading :  {
        marginBottom : '1.5em'
    },
    categoryImage : {
        '&:hover' : {
                cursor:'pointer',
                transform: 'translateY(-14px)',
                
        }
    }
    
}))


export default function ExploreCategories() {
    const classes = useStyles();
    const categories = [
        {
            "img" : Laptop,
            "name" : "laptops"
        },
        {
            "img" : Camera,
            "name" : "Camera"
        },
        {
            "img" : Mobile,
            "name" : "Mobile"
        },
        {
            "img" : TV,
            "name" : "TV"
        },
        {
            "img" : Speaker,
            "name" : "Speaker"
        },
        {
            "img" : Watch,
            "name" : "Watch"
        }

    ]
    return (
        <React.Fragment>
            <Grid container direction="column" className={classes.categories}>
            <Grid item className={classes.heading}>
                    <Typography variant="h4" align="center" >Explore popular categories</Typography>
            </Grid>
            <Grid item
            container spacing={2} direction="row" justify="space-evenly" alignItems="center" >
                {
                    categories.map((category, index) => (
                        <Grid item >
                           <img src={category.img} className={classes.categoryImage}/>
                            <Typography align="center" className={classes.categoryName}>{category.name}</Typography> 
                        </Grid>
                    ))
                }
                
                
            </Grid>

            

            </Grid>
            

        </React.Fragment>
    )
}
