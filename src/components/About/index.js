import React from 'react';
import backgroundImage from '../../assets/images/emilyBGPic.jpg';
import headshot from '../../assets/images/headshot.jpeg';

function About() {
  return (
    <div>
      <div>
        <div className='photo-box'>
          <div className='photo-text name-intro'>Hello! I'm</div>
          <div className='photo-text name-style'>Emily Pape</div>
          <img src={backgroundImage} alt='background' style={{ width: '100%' }} />
          <div className='photo-text position-info'>Full-Stack Developer</div>
          <div className='about-box'>
            <img className='headshot' src={headshot} alt='headshot' />
            <p className='bio-text'>
              Emily is an avid outdoor enthusiast, travel junkie, and full-stack developer. She takes pride in being a
              pet mom to two mischevious cats, and a high energy mutt. On the weekends you can find her in the mountains
              with her dog, Atlas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
