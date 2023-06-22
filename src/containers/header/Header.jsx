import React from 'react'
import './header.css'
import logo from '../../assets/logo1.png'
const Header = () => {
  return (
    <div className='decor_header section_padding' id="home">
      <div className='decor_header-content'>
        <h1 className='gradient_text'>Express Yourself with Decor Your Way</h1>
        <p>Turn the Interior-Design of your home into a creative and fun experience where your input is the top priority </p>
        <div className='decor_header-content_input'>
          
          
          <input type="email" placeholder='Your Email Address'  />
          <button type='button'>Start Now</button>
        </div>
      </div>
    <div className='decor_header-content_img'>
      <img src={logo} alt="decor" />
    </div>
    </div>
  )
}

export default Header