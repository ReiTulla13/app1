import React from 'react'
import { FiAlignJustify , FiX} from 'react-icons/fi'
import './navbar.css'
import logo from '../../assets/logo1.png'
import { useState } from 'react'
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#support">Support</a></p>
    <p><a href="#contact">Contact</a></p>
    <p><a href="#signup">SignUp</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='decor_navbar'>
      <div className='decor_navbar-links'>
        <div className='decor_navbar-links-logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='decor_navbar-links_container'>
         <Menu/>
        </div>

      </div>
      <div className='decor_navbar-links_container-button'>
      <button type='button'>Sign Up</button>
      </div>
      <div className='decor_navbar-menu'>
        {toggleMenu ? <FiX color="#fff" size={25} onClick={() => setToggleMenu(false)} />
          : <FiAlignJustify color="#fff" size={25} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='decor_navbar-menu_container scale-up-center'>
            <div className='decor_navbar-menu_container-links'>
            <Menu/>
            <button type='button'>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar