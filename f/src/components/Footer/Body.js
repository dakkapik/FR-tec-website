import React from 'react'
import { Button } from '../Button/Body'
import './style.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                    Contact Me
                </p>
                <div className='input-areas'>
                    <form className='input-form'>
                        <div>
                            <input type="email" name="email" placeholder='email' className='footer-input'/>
                            <input type="name" name="name" placeholder='name' className='footer-input'/>
                            <Button buttonStyle='button--outline'>Send</Button>
                        </div>
                        <div>
                            <textarea type="text" name="message" placeholder='message' className='footer-message-input' rows="4"/>
                        </div>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                    </div>
                </div> */}
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                        <Link>How it works</Link>
                    </div>
                </div> */}
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Work References</h2>
                        <a href="https://github.com/dakkapik">GitHub</a>
                        {/* <a href="">LinkedIn</a> */}
                        <Link>Resume</Link>
                        {/* <Link>How it works</Link> */}
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/pikbakkapik/">Instagram</a>
                        <a href="https://www.youtube.com/channel/UCTpcsieSE4GAhBu4HeqaRrA">YouTube</a>
                        <a href="https://www.twitch.tv/bloodsportpik">Twitch</a>
                        <a href="https://discord.gg/zMDHXGk">Discord</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
