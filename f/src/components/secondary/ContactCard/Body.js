import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { Button } from '../../util/Button/Body'

function ContactCard() {
    return (
        <div className="contact-card-container">
            <img className='contact-display-background' alt='miami background' src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className='text-box'>
                <h1>Felipe Rodas</h1>
                <h2>Miami, Florida, USA</h2>
                <h2>ae86rodas@outlook.com</h2>
                <h2>(786) 329-2625</h2>
                <Button 
                onClick={goToResume}
                buttonSize={'btn-large'}
                buttonStyle={'btn--outline'}
                >
                    Resume
                </Button>
            </div>
        </div>
    )
}

function goToResume() {
    window.location.replace("/doc/resume-pdf")
}

export default ContactCard
