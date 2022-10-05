import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css"
import logo from "../../assets/logo.svg"
import ADLogo2 from "../../assets/ADLogo2.png"

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About</a></p>
  <p><a href="#work">My work</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
        <img src={ADLogo2} alt="ADLogo"/>
        </div>
      </div>
      <div className="gpt3__navbar-links_container">
      <Menu />
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links'>

            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar