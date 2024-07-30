import React, {useState} from 'react'
import './Profile.css'
import ProfileSectionA from '../../secondary/ProfileSectionA/ProfileSectionA'


function Profile() {
    const [text2, setText2] = useState([
        "Proven experience",
        "API development/implementation",
        "debugging and testing suites using best clean code practices",
        "through documentation"
    ])

    return (
        <div className="profile-container">
            <ProfileSectionA/>
            <div className="profile-section-2">
                <img src="images/prof-1.jpg" alt="profile 2"/>
                <div className="profile-text-container">
                    <h1>Full Stack Engineer</h1>
                    <div>
                        <h2>After working for code ninjas, Felipe went on to open</h2>
                        <h2>his own small business that teaches kids and teenagers</h2>
                        <h2>about all types of engineering concepts, such as: programming,</h2>
                        <h2>Robotics, 3D design and much more.</h2>
                    </div>
                </div>
            </div>

            <div className="profile-section-1">
                <video src='/videos/defiance-mobile2.mp4' autoPlay loop muted/>
                <div className="profile-text-container">
                    <div>
                        <ul>
                        {text2.map((text, i)=> <li key={"2-"+i}>{text}</li>) }
                        </ul>
                    </div>
                    <h1>Mobile Developer</h1>
                </div>
            </div>
            <div className="profile-section-2">
                <img src="images/prof-4.jpg" alt="profile 2"/>
                <div className="profile-text-container">
                    <h1>Entrepreneurship</h1>
                    <div>
                        <h2>After working for code ninjas, Felipe went on to open</h2>
                        <h2>his own small business that teaches kids and teenagers</h2>
                        <h2>about all types of engineering concepts, such as: programming,</h2>
                        <h2>Robotics, 3D design and much more.</h2>
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
