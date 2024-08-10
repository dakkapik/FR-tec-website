import React from 'react'
import "./ProfileSectionVid.css"

function ProfileSectionPic({title, vid, text, sectionType}) {
    if(sectionType ===0){
        return (
            <div className="profile-section">
                <video src={vid} autoPlay loop muted/>
                <p>{text}</p>
                <h1>{title}</h1>
            </div>
          )
    } else {
        return (
            <div className="profile-section">
                <h1>{title}</h1>
                <p>{text}</p>
                <video src={vid} autoPlay loop muted/>
            </div>
          )
    }
  
}

export default ProfileSectionPic