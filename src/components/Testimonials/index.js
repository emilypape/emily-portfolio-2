import React from 'react';
import warren from '../../assets/images/warren.jpg';
import deanna from '../../assets/images/deanna.jpg';

function Testimonials() {
  return (
    <div>
      <h1 className='testimonials-title'>Testimonials</h1>
      <div className='box-of-referals'>
        <div className='reference-box'>
          <a href='https://www.linkedin.com/in/warren-tamagri-5648a71ba/'>
            <img className='reference-img' src={warren} alt='reference ' />
          </a>
          <div className='reference-text-box'>
            <p className='reference-text'>
              {' '}
              <span className='top-quote-w'>"</span>Emily is an extremely motivated individual, and I am consistantly
              impressed by the results she garners when she puts her mind to something.
              <span className='bottom-quote-w'>"</span>
            </p>
            <h2 className='referer-name'>- Warren Tamagri</h2>
            <h3 className='referer-postion'>Full-Stack Engineer</h3>
          </div>
        </div>
        <div className='reference-box'>
          <a href='https://www.linkedin.com/in/warren-tamagri-5648a71ba/'>
            <img className='reference-img-2' src={deanna} alt='reference 2' />
          </a>
          <div className='reference-text-box'>
            <p className='reference-text'>
              {' '}
              <span className='top-quote-d'>"</span>Working with Emily is always enjoyable. She takes the initiative to
              get ahead, and is always there to offer her support if needed. I'd love to work with her again!
              <span className='bottom-quote-d'>"</span>
            </p>
            <h2 className='referer-name'>- Deanna Brown</h2>
            <h3 className='referer-postion'>Former Colleague</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
