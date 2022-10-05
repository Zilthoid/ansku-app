import React from 'react'
import "./footer.css"
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { AiOutlineInstagram  } from "react-icons/ai"


const Footer = () => {
  return (
    <div className='social_container'>
      <div className='social_buttons'>
        <a href='https://www.facebook.com' type='button' ><FiFacebook/></a>
        <a href='https://www.instagram.com'><AiOutlineInstagram/></a>
        <a href="https://www.youtube.com"><FiYoutube/></a>
      </div>
    </div>
  )
}

export default Footer