import React from 'react'
import './style.css'

function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-section-1">
                <video src='/videos/defiance-mobile2.mp4' autoPlay loop muted/>
                <div className="profile-text-container">
                    <div>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                    </div>
                    <h1>Backend Developer</h1>
                </div>
            </div>
            <div className="profile-section-2">
                <img src="images/prof-4.jpg" alt="profile 2"/>
                <div className="profile-text-container">
                    <h1>Teacher</h1>
                    <div>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                    </div>
                </div>
            </div>
            <div className="profile-section-1">
                <video src='/videos/defiance-mobile2.mp4' autoPlay loop muted/>
                <div className="profile-text-container">
                    <div>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                        <h2>SOMETHING</h2>
                    </div>
                    <h1>Mobile Developer</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile
