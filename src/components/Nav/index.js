import React from 'react';

function Nav() {
  return (
    <nav className='nav-bar'>
      <a className='initial-box'>
        <div className='initials'>EP</div>
      </a>
      <div className='nav-elements-box'>
        <div className='about-me'>About Me &nbsp;</div>
        <div className='work'>Work &nbsp;</div>
        <div className='contact-me'>Contact Me &nbsp;</div>
        <div className='resume'>Resume</div>
      </div>
    </nav>
  );
}

export default Nav;
