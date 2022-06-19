import React from 'react';
import { Icon } from '@iconify/react';

function Contact({ toggleModal, isModalOpen }) {
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-background')) {
      toggleModal();
    }
  };
  if (isModalOpen) {
    return (
      <div className='modal-background' onClick={handleClick}>
        <div className='contact-modal'>
          <div>
            <h1 className='modal-contact-header'>Contact Me</h1>
            <span></span>
            <div className='contact-icon-box'>
              <a target='_blank' rel='noreferrer' href='https://github.com/emilypape' className='contact-icon'>
                <Icon className='icon-styles' icon='akar-icons:github-fill' />
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/feed/' className='contact-icon'>
                <Icon className='icon-styles' icon='logos:linkedin-icon' />
              </a>
              <a href='mailto:eap6787@gmail.com' className='contact-icon'>
                <Icon className='icon-styles' icon='logos:google-gmail' />
              </a>
            </div>
            <div className='fashion-line-2'>.</div>
            <h1 className='contact-message'>
              Thank you for your interest, I can't wait to hear from you! Feel free to use the above links to get in
              touch.
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
