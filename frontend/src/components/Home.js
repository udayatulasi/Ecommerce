import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../components/Body';
import ExploreCategories from '../components/ExploreCategories';

// Importing all files
import TopCarousel from './landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div style={{ overflowX : "hidden"}}>
          <TopCarousel />
          <ExploreCategories />
          <Body />
          
        </div>
    )
}
