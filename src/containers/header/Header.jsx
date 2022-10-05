import React from 'react'
import "./header.css"
import Port from "../../assets/Port.JPG"

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>If it's tattoos you want! Have i got a deal for you!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi placeat eos saepe aperiam dolores est quo iure id eum quos esse incidunt temporibus consequuntur, possimus repellat debitis aliquid sapiente quidem nulla perspiciatis, provident atque molestias.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <p>Reserve your time now! Email me!</p>
      </div>
    </div> 
  <div className='gpt3__header-image'>
    <img src={Port} alt="Port"/>
    </div>
</div>
  )
}

export default Header