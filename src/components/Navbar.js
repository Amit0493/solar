import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* TRVL
            <i class='fab fa-typo3' /> */}
            <div className="logoParentDiv">
              <img style={{ height: "40px", width: "50px" }} src="images/newlogo.jpeg"></img>
              <span>sunpark Solar</span>
            </div>
          </Link>
          <div className="callNowHome">
            <div>
              <img style={{ height: "40px", width: "50px" }} src="images/call.svg"></img>
            </div>
            <div>
              <p>Call our solar specialist</p>
              <p>1300755059 </p>
            </div>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/residential' className='nav-links' onClick={closeMobileMenu}>
                Residential Solar System
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/commercial' className='nav-links' onClick={closeMobileMenu}>
                Commerial Solar System
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Contact</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
