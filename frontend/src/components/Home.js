import React from 'react';
import Body from '../components/Body';
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
import Headers from './Header'
import Footer from './Footer'
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Scroll from "./scroll"
// Importing all files
import TopCarousel from './landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div>
          <TopCarousel />
          <Body />
          <Footer />
        <Scroll />
        <Headers />
        <Footer1 />         
        <Footer2 />
        <Footer />

        </div>
    )
}


