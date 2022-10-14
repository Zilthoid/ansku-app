import React from 'react'
import "./footer.css"
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { AiOutlineInstagram  } from "react-icons/ai"


const Footer = () => {
  return (
    <div className='social_container'>
      <div className='social_buttons'>
        <a href='https://www.facebook.com/DesignAnzelika' type='button' ><FiFacebook/></a>
        <a href='https://www.instagram.com/designanzelika/'><AiOutlineInstagram/></a>
        <a href="https://www.youtube.com/watch?v=dVxKBp6pEVw"><FiYoutube/></a>
      </div>
    </div>
  )
}

export default Footer