import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact';

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className='nav-bar'>
      <Contact toggleModal={toggleModal} isModalOpen={isModalOpen} />
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
        <div className='contact-me hover-nav' onClick={() => toggleModal()}>
          Contact Me &nbsp; &nbsp;
        </div>
        <Link to='/Resume' className='resume hover-nav'>
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
