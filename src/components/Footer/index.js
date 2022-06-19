import React from 'react';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer className='footer-styles'>
      <div className='footer-box'>
        <a target='_blank' rel='noreferrer' href='https://github.com/emilypape'>
          <Icon className='footer-gh footer-icon' icon='akar-icons:github-fill' />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/feed/'>
          <Icon className='footer-icon' icon='logos:linkedin-icon' />
        </a>
        &nbsp;&nbsp;&nbsp;
        <a href='mailto:eap6787@gmail.com'>
          <Icon className='footer-icon' icon='logos:google-gmail' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
