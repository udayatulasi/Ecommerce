import React from 'react';
import { Link } from 'react-router-dom';
import Body from '../components/Body';

// Importing all files
import TopCarousel from './landingPageTopCarousel/TopCarousel'

export default function Home() {
    return (
        <div>
          <TopCarousel />
          <Body />
          
        </div>
    )
}
