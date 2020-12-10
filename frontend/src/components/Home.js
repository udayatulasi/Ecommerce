import React from 'react';
import { Link } from 'react-router-dom'
import Headers from './Header'
import Footer from './Footer'
import Footer1 from "./Footer1"
import Footer2 from "./Footer2"
import Scroll from "./scroll"
// Importing all files


export default function Home() {
    return (
        <div>
        <Scroll />
        <Headers />
           <h6>Home component</h6>
        <Footer1 />         
        <Footer2 />
        <Footer />

        </div>
    )
}


