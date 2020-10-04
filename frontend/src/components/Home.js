import React from 'react';
import Body from '../components/Body';
import Footer from "../components/Footer"
// Importing all files
import TopCarousel from './landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div>
          <TopCarousel />
          <Body />
          <Footer />
        </div>
    )
}
