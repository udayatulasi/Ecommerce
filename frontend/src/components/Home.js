import React from 'react';
import Body from '../components/Body';
import { Link } from 'react-router-dom'
import Headers from '../Common/Header/Header'
import Footer from '../Common/Footer/Footer'
import Footer1 from "../Common/Footer/Footer1"
import Footer2 from "../Common/Footer/Footer2"
import ExploreCategories from './ExploreCategories'
import Scroll from "./scroll"
// Importing all files
import TopCarousel from './reusable components/landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div>
        <Headers />
          <TopCarousel />
          <ExploreCategories />
          <Body />
        <Scroll />
        <Footer1 />         
        <Footer2 />
        <Footer />

        </div>
    )
}


