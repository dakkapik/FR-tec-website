import React from 'react';
import '../App.css';
import Cards from '../components/Cards/Body';
import Footer from '../components/Footer/Body';
import HeroSection from '../components/HeroSection/Body';

function Home () {
    return (
        <>
         <HeroSection/>
         {/* <Cards/> */}
         <Footer/>
        </>
    )
}

export default Home;