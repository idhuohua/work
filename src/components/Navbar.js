import React from 'react';
// import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import link1 from '../assests/link1.png'
import link2 from '../assests/link2.png'
import link3 from '../assests/link3.png'
// import logo from '../assests/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">

        <ul>
          <li>
          <a href="/main">
            <img src={link1} className ='img' alt="page1" />
          </a>
          </li>
          <li>
          <a href="/Page2">
            <img src={link2} className ='img' alt="page1" />
          </a>
          </li>
          <li>
          <a href="/Page3">
            <img src={link3} className ='img' alt="page1" />
          </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
