import React, { useState } from 'react'
import './style.css'

function Footer() {
    const [userName, setUserName] = useState("")

    const handleSubmit = (event) =>  {
        alert("thank you for your message " + userName +", I will reply as soon as possible");
        event.preventDefault();
        const f = new FormData(event.target)
        const data = {
            email: f.get("email"),
            name: f.get("name"),
            message: f.get("message")
        }
        console.log(window.localStorage.hostname)
        postRes("API/message", data)
    }

    function postRes(url, json) {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          },
          body: JSON.stringify(json)
        })
        .then(response => {
          if (response.ok) {
            // Handle success
          } else {
            // Handle error
          }
        })
        .catch(error => {
          // Handle error
        });
      }


    const handleChange = (event) =>{
        setUserName(event.target.value)

    } 

    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className='footer-subscription-heading'>
                    Contact Me
                </p>
                <div className='input-areas'>
                    <form className='input-form' onSubmit={handleSubmit}>
                        <div>
                            <input type="email" name="email" placeholder='email' className='footer-input'/>
                            <input type="name" name="name" placeholder='name' className='footer-input' onChange={handleChange}/>
                            {/* <Button buttonStyle='button--outline'>Send</Button> */}
                            <input type="submit" value="Submit" className='footer-form-button'/>
                        </div>
                        <div>
                            <textarea 
                            type="text" name="message" placeholder='message'
                            className='footer-message-input' rows="4" />
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
                        <a href="https://www.linkedin.com/in/felipe-rodas-613395173">LinkedIn</a>
                        {/* <a></a> SOME WAY TO ADD  HERE */}
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
