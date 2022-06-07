import React from 'react';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-box'>
        <Icon icon='akar-icons:github-fill' />
        &nbsp;&nbsp;&nbsp;
        <Icon icon='logos:linkedin-icon' />
        &nbsp;&nbsp;&nbsp;
        <Icon icon='logos:google-gmail' />
      </div>
    </footer>
  );
}

export default Footer;
