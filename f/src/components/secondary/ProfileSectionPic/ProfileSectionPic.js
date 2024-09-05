import React ,{useState} from 'react'
import "./ProfileSectionPic.css"

function ProfileSectionPic({title, pic, alt, text, sectionType}) {


    const [formatedText, setFormatedText] = useState(text.split("\n"))

    console.log(formatedText)

    if(sectionType ===0){
        return (
            <div className="profile-section">
                <img src={pic} alt={alt} />
                <p>{text}</p>
                <h1>{title}</h1>
            </div>
          )
    } else {
        return (
            <div className="profile-section">
                <h1>{title}</h1>
                <p>{text}</p>
                <img src={pic} alt={alt}/>
            </div>
          )
    }
  
}

export default ProfileSectionPic