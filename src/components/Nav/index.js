import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact';

function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(window.location.pathname);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const selectedOnClick = (path) => {
    setIsSelected(path);
  };

  return (
    <nav className='nav-bar'>
      <Contact toggleModal={toggleModal} isModalOpen={isModalOpen} />
      <a className='initial-box'></a>
      <div className='nav-elements-box'>
        <Link
          to='/emily-portfolio-2'
          className={`about-me hover-nav ${isSelected === '/' ? 'selected' : ''}`}
          onClick={() => selectedOnClick('/')}>
          About Me &nbsp; &nbsp;
        </Link>
        <Link
          to='/Portfolio'
          className={`work hover-nav ${isSelected === '/Portfolio' ? 'selected' : ''}`}
          onClick={() => selectedOnClick('/Portfolio')}>
          Portfolio &nbsp; &nbsp;
        </Link>
        <div className='contact-me hover-nav' onClick={() => toggleModal()}>
          Contact Me &nbsp; &nbsp;
        </div>
        <Link
          to='/Resume'
          className={`resume hover-nav ${isSelected === '/Resume' ? 'selected' : ''}`}
          onClick={() => selectedOnClick('/Resume')}>
          Resume
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
