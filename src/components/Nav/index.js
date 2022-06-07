import React from 'react';

function Nav() {
  return (
    <nav className='nav-bar'>
      <a className='initial-box'>
        <div className='initials'>EP</div>
      </a>
      <div className='nav-elements-box'>
        <div className='about-me hover-nav'>About Me &nbsp;</div>
        <div className='work hover-nav'>Work &nbsp;</div>
        <div className='contact-me hover-nav'>Contact Me &nbsp;</div>
        <div className='resume hover-nav'>Resume</div>
      </div>
    </nav>
  );
}

export default Nav;
