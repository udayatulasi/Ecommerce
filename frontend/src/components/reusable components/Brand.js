import React from "react"
import Card from "./Card"
import { Grid } from '@material-ui/core';
// import Carousel from 'react-owl-carousel2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brand =()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 0 },
          items: 5,
          partialVisibilityGutter: 40
        },
        // desktop: {
        //   breakpoint: { max: 3000, min: 1024 },
        //   items: 4,
        //   partialVisibilityGutter: 40
        // },
        // tablet: {
        //   breakpoint: { max: 1024, min: 464 },
        //   items: 3,
        //   partialVisibilityGutter: 40
        // },
        // mobile: {
        //   breakpoint: { max: 464, min: 0 },
        //   items: 1,
        //   partialVisibilityGutter: 40
        // }
      };
    return(
        // <Carousel>
        // <Grid container>
        //     <Grid item xs={3}>
        //         <Card/>
        //     </Grid>
        //     <Grid item xs={3}>
        //         <Card/>
        //     </Grid>
        //     <Grid item xs={3}>
        //         <Card/>
        //     </Grid>
        //     <Grid item xs={3}>
        //         <Card/>
        //     </Grid>
        // </Grid>
        // </Carousel>

        <Carousel responsive={responsive}     
        partialVisible
        autoPlaySpeed={3000}>
        <Grid item xs={2}>
          <Card/>
        </Grid>
        <Grid item xs={2}>
            <Card/>
        </Grid>
        <Grid item xs={2}>
            <Card/>
        </Grid>
        <Grid item xs={2}>
            <Card/>
        </Grid>
        <Grid item xs={2}>
            <Card/>
        </Grid>
        </Carousel>
    )
}

export default Brand