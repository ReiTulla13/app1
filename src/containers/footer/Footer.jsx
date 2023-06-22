import React from 'react'
import logo from'../../assets/logo1.png'
import './footer.css' 
const Footer = () => {
  return (
    <div className='decor_footer section_padding'>
      <div className='decor_footer-heading'>
        <h1 className='gradient-text'>What are you waiting for</h1>
      </div>
      <div className='decor_footer-btn'>
        <p>Get Premium Membership</p>
      </div>
      <div className='decor_footer-links'>
        <div className='decor_footer-links_logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='decor_footer-links_div'>
          <h4>Links</h4>
          <p>Link 1</p>
          <p>Link 2</p>
          <p>Link 3</p>
          <p>Link 4</p>
        </div>
        <div className='decor_footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy </p>
          <p>Contact</p>
        </div>
      </div>
      <div className='decor_footer-copyright'>
        <p>2023 Decor Your Way - All Rights Reserved</p>
        <p>Haha Right!</p>
      </div>
    </div>
  )
}

export default Footer