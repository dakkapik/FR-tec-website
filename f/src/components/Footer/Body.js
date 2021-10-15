import React from 'react'
import { Button } from '../Button/Body'
import './style.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                    Join my Newsletter with everything about technology!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input type="email" name="email" placeholder="Email" className='footer-input'/>
                        <Button buttonStyle='button--outline'>Subscribe!</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/pikbakkapik/">Instagram</a>
                        <Link>Youtube</Link>
                        <a href="https://www.twitch.tv/bloodsportpik">Twitch</a>
                        <a href="https://discord.gg/zMDHXGk">Discord</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
