import React from 'react';
import '../App.css';
// import Cards from '../components/Cards/Body';
import Footer from '../components/primary/Footer/Body';
import HeroSection from '../components/secondary/HeroSection/Body';
import ProjectDisplays from '../components/primary/ProjectDisplay/ProjectsDisplay'
import Profile from '../components/primary/Profile/Profile'


function Home () {
    return (
        <>
         <HeroSection/>
         <Profile/>
         <ProjectDisplays/>
         {/* <Cards/> */}
         <Footer/>
        </>
    )
}

export default Home;