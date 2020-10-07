import React from 'react';
import Body from '../components/Body';
import { Link } from 'react-router-dom'
import Headers from './Header/Header'
import Footer from './Footer'
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Scroll from "./scroll"
// Importing all files
import TopCarousel from './landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div>
        <Headers />
          <TopCarousel />
          <Body />
        <Scroll />
        <Footer1 />         
        <Footer2 />
        <Footer />

        </div>
    )
}


