import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

    
  return (
    <div>
      <nav className='navbar'>
      <div className='nav-center'>
      <div className='nav-header'>
      <Link to='/'>
        <img src={logo} alt='beach resort' className='logo'/>
      </Link>
      <button onClick={handleToggle} className='nav-btn'>
        <FaAlignRight className='nav-icon'/>
      </button>
      {/* <div>{isOpen ? 'Open' : 'Closed'}</div> */}
      </div>
      <ul className={isOpen?'nav-links show-nav':'nav-links'}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/rooms'>Rooms</NavLink></li>
      </ul>
      </div>
      </nav>
    </div>
  )
}

export default Nav
