import React from 'react';
import smileHeadshot from '../../assets/images/smileheadshot.JPG';
import Details from '../Professional-details';
import Testimonials from '../Testimonials';

function Resume() {
  return (
    <div className='resume'>
      <div className='profile-box'>
        <div>
          <img className='smile-headshot' src={smileHeadshot} alt='headshot' />
        </div>
        <div className='text-bio-box'>
          <h3 className='bio-position-text'>Full Stack Developer</h3>
          <h1 className='bio-name-text'>Emily Pape</h1>
          <p className='second-bio-text'>
            Exceptionally well rounded, organized and resourceful Professional with one year of developement experience
            and a solid academic background in Literature and foriegn language. Excellent adaptablilty; able to handle
            multiple projects or assignments while producing high quality results in an excelerated, deadline-oriented
            environment.{' '}
          </p>
          <a
            href='https://docs.google.com/document/d/11Qxr9Kp4HDqm8bPyqkSzoaD0Z9jx0iZuqkTX1hYUcL8/edit?usp=sharing'
            target='_blank'>
            <button className='cv-btn'>Download Resume</button>
          </a>
        </div>
      </div>
      <Details />
      <Testimonials />
    </div>
  );
}

export default Resume;
