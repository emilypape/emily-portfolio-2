import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav-bar'>
      <a className='initial-box'>
        <div className='initials'>EP</div>
      </a>
      <div className='nav-elements-box'>
        <Link to='/' className='about-me hover-nav'>
          About Me &nbsp; &nbsp;
        </Link>
        <Link to='/Portfolio' className='work hover-nav'>
          Portfolio &nbsp; &nbsp;
        </Link>
        <Link to='/Contact' className='contact-me hover-nav'>
          Contact Me &nbsp; &nbsp;
        </Link>
        <Link to='/Resume' className='resume hover-nav'>
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
