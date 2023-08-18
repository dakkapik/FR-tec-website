import React from 'react'
import { Button } from '../Button/Body'
import "./style.css"

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AI16lhbh7wY?autoplay=1&showinfo=0&controls=0&loop=1&mute=1&enablejsapi=0" frameborder="0" allowfullscreen></iframe> */}
            <video className="cover-video" src='/videos/video-2.mp4' autoPlay loop muted/>
            {/* <video className="cover-video" src='/videos/back-to-vraks.mp4' autoPlay loop muted/> */}
            <h1> ADVENTURE AWAITS </h1>
            <p> This site is a work in progress </p>
            <div className="hero-btns">
                <Button 
                className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn-large'
                >
                    WANT TO LEARN MORE?
                </Button>
                <Button 
                className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn-large'
                >
                    Contact me!
                </Button>
            </div>
        </div>
    )
}

export default HeroSection