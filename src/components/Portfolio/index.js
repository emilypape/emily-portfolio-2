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
    <Carousel gap={20} loop>
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
      <Carousel.Item className='gb-carousel'>
        <a target='_blank' rel='noreferrer' href='https://git-blogging.herokuapp.com/'>
          <img className='blog-img' width='100%' src={techBlog} alt='tech blog' />
          <p className='git-blogging-description'>
            <span className='gb-span-text'>Git Blogging</span> is an online blog where users can share thoughts on all
            things techy! Users can make, update, and delete posts as well as comment on other user's posts.
            <span className='gb-span-text'> Git Blogging</span> is built using backend technologies such as{' '}
            <span className='gb-span-text'>SQL</span>, <span className='gb-span-text'>Sequelize</span>, and{' '}
            <span className='gb-span-text'>Express</span>. With <span className='gb-span-text'>Javascript</span>,{' '}
            <span className='gb-span-text'>HTML</span>, <span className='gb-span-text'>Custom CSS</span>, and{' '}
            <span className='gb-span-text'>Handlebars.js</span> supporting the frontend.
          </p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/parkscape/'>
          <img className='parkscape-img' width='100%' src={parkscape} alt='ParkScape' />
          <p className='parkscape-description'>
            <span className='ps-span-text'>Parkscape</span> was built to help plan last minute trips to America's
            National Parks! It utilizes the <span className='ps-span-text'>NPS API</span>, and the{' '}
            <span className='ps-span-text'>OpenWeatherMap API</span> to give users in depth information on a particular
            park and the travel conditions. Users can also compile a bucketlist of attractions to the parks, and update
            and delete from the list as they please. <span className='ps-span-text'>Parkscape</span> is built with{' '}
            <span className='ps-span-text'>Javascript</span>, <span className='ps-span-text'>JQuery</span>,{' '}
            <span className='ps-span-text'>HTML</span>, <span className='ps-span-text'>Custom CSS</span>, and{' '}
            <span className='ps-span-text'>Materialize</span>.{' '}
          </p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/weather-dashboard/'>
          <img className='weather-dash-img' width='100%' src={weather} alt='Weather Dashboard' />
          <p className='weather-dash-description'>
            {' '}
            <span className='wd-span-text'>Weather Dashboard</span> utilizes the{' '}
            <span className='wd-span-text'>OpenWeatherMap API</span> to provide users with a 5-day forecast for a city
            of their choosing. The user's searches are saved, and can be re-selected to view a previous city's forecast.
            In addition to providing the current day's weather, it also displays the 5-day forecast for the area.{' '}
            <span className='wd-span-text'>Weather Dashboard</span> is built using{' '}
            <span className='wd-span-text'>Javascript</span>, <span className='wd-span-text'>HTML</span>, and{' '}
            <span className='wd-span-text'>Custom CSS</span>
          </p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://github.com/emilypape/office-roster'>
          <img className='roster-img' width='100%' src={officeroster} alt='Office Roster' />
          <p className='roster-description'>
            <span className='or-span-text'>Office Roster</span> is a command line app that builds your work team based
            off of user input. <span className='or-span-text'>Office Roster</span> is a
            <span className='or-span-text'>Node.js</span> app that uses the{' '}
            <span className='or-span-text'>inquirer package</span> to collect information. The application prompts for a
            manager, engineer, and intern position and generates the HTML page with the user's input.{' '}
            <span className='or-span-text'>Office Roster</span> uses <span className='or-span-text'>Node.js</span>,
            <span className='or-span-text'>FS package</span>, <span className='or-span-text'>Inquierer package</span>,{' '}
            <span className='or-span-text'>Javascript</span>, <span className='or-span-text'>HTML</span>, and{' '}
            <span className='or-span-text'>Custom CSS</span>{' '}
          </p>
        </a>
      </Carousel.Item>
      <Carousel.Item>
        <a target='_blank' rel='noreferrer' href='https://emilypape.github.io/password-parakeet/'>
          <img className='password-gen-img' width='100%' src={passwordgenerator} alt='Password Generator' />
          <p className='password-description'>
            <span className='pg-span-text'>Password Generator</span> is a{' '}
            <span className='pg-span-text'>Javascript</span> application that prompts the user for specific qualities
            they would like in a password, and then generates a password to meet those paramaters. It is built using{' '}
            <span className='pg-span-text'>Javascript</span>, <span className='pg-span-text'>HTML</span>, and{' '}
            <span className='pg-span-text'>CSS</span>
          </p>
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
