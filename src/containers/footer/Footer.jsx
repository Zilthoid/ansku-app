import React from 'react'
import "./footer.css"
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram  } from "react-icons/ai"


const Footer = () => {
  return (
    <div className='social_container'>
      <div className='social_buttons'>
        <a href='https://www.facebook.com' type='button' ><FiFacebook/></a>
        <a href='https://www.instagram.com'><AiOutlineInstagram/></a>
        <a href="https://www.twitter.com"><FiTwitter/></a>
      </div>
    </div>
  )
}

export default Footer