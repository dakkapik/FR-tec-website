import React from 'react'
import './Profile.css'
import ProfileSectionPic from '../../secondary/ProfileSectionPic/ProfileSectionPic'
import ProfileSectionVid from '../../secondary/ProfileSectionVid/ProfileSectionVid'

function Profile() {
    return (
        <div className="profile-container">
            <ProfileSectionPic 
            title="Software Engineer" 
            pic="images/prof-4.png"
            alt="profile 4"
            sectionType={0}
            text="Proven experience in API development/implementation \n debugging and testing suites using best clean code practices\nthrough documentation."
            />
            <ProfileSectionVid
            vid="/videos/defiance-mobile2.mp4"
            sectionType={1}
            title="Mobile Developer"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
            <ProfileSectionPic 
            title="Entrepreneurship"
            pic="images/prof-4.jpg"
            alt="profile 4"
            sectionType={0}
            text="After working for code ninjas, Felipe went on to open his own small business that teaches kids and teenagers about all types of engineering concepts, such as: programming, Robotics, 3D design and much more."
            />
        </div>
    )
}

export default Profile
