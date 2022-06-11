import React from 'react';
import Carousel from 'better-react-carousel';
import hikeBuddy from '../../assets/images/hikeBuddy.png';
import techBlog from '../../assets/images/techblog.png';
import parkscape from '../../assets/images/parkscape.png';
import weather from '../../assets/images/weather.png';
import officeroster from '../../assets/images/officeroster.png';
import passwordgenerator from '../../assets/images/passwordgenerator.png';

function Portfolio() {
  return (
    <Carousel gap={10} loop>
      <Carousel.Item className='hb-carousel'>
        <a target='_blank' rel='noreferrer' href='https://still-shore-87425.herokuapp.com/'>
          <img className='hike-buddy-img' width='100%' src={hikeBuddy} alt='hikeBuddy' />
          <p className='hike-buddy-description'>
            <span className='hb-span-text'> Hike Buddy</span> is a social media site for avid hikers and outdoor
            adventurers! Users can personalize their profile through a survey that encompasses all of their adventuring
            preferences! Want to become <span className='hb-span-text'>Hike Buddies</span>? No problem! Simply send your
            favorite users a personalized message and get the adventures underway!
            <span className='hb-span-text'> Hike Buddy</span> is built using backend technologies such as{' '}
            <span className='hb-span-text'>SQL</span>, <span className='hb-span-text'>Sequelize</span>,{' '}
            <span className='hb-span-text'>Express</span>, and <span className='hb-span-text'>Socket.io</span>. With{' '}
            <span className='hb-span-text'>Javascript</span>,<span className='hb-span-text'>HTML</span>,{' '}
            <span className='hb-span-text'>Custom CSS</span>, <span className='hb-span-text'>Tailwind</span>, and{' '}
            <span className='hb-span-text'>Handlebars.js</span> supporting the frontend.{' '}
          </p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://git-blogging.herokuapp.com/'>
          <img className='blog-img' width='100%' src={techBlog} alt='tech blog' />
          <p> tech blog for techy thoughts</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/parkscape/'>
          <img className='parkscape-img' width='100%' src={parkscape} alt='ParkScape' />
          <p>This is a np app for trip planning</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/weather-dashboard/'>
          <img className='weather-dash-img' width='100%' src={weather} alt='Weather Dashboard' />
          <p>Lets check the weather!</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://github.com/emilypape/office-roster'>
          <img className='roster-img' width='100%' src={officeroster} alt='Office Roster' />
          <p>Command Line app for team building</p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/password-parakeet/'>
          <img className='password-gen-img' width='100%' src={passwordgenerator} alt='Password Generator' />
          <p>Password generator for randomly selected passwords</p>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
