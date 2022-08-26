import React from 'react';
import { Icon } from '@iconify/react';
import Carousel from 'better-react-carousel';
import hikeBuddy from '../../assets/images/hikeBuddy.png';
import techBlog from '../../assets/images/techblog.png';
import parkscape from '../../assets/images/parkscape.png';
import weather from '../../assets/images/weather.png';
import officeroster from '../../assets/images/officeroster.png';
import passwordgenerator from '../../assets/images/passwordgenerator.png';
import everywhere from '../../assets/images/everywhere.png';

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
          <a target='_blank' rel='noreferrer' href='https://github.com/emilypape/hike-buddy' className='icon-position'>
            <Icon className='icon-styles icon-prof-style' icon='akar-icons:github-fill' />
          </a>
        </a>
      </Carousel.Item>
      <Carousel.Item className='hb-carousel'>
        <a target='_blank' rel='noreferrer' href='https://stark-harbor-20365.herokuapp.com/'>
          <img className='hike-buddy-img' width='100%' src={everywhere} alt='everywhere' />
          <p className='hike-buddy-description'>
            <span className='hb-span-text'> Everywhere</span> is a travel site for avid adventurers and travel
            enthusiasts! Users can personalize their searches through a form that encompasses all of their travel needs!
            Want to book a stay? <span className='hb-span-text'>Everywhere</span> uses stripe to take your payment and
            get you on your vacation!
            <span className='hb-span-text'> Everywhere</span> is built using backend technologies such as{' '}
            <span className='hb-span-text'>MongoDB</span>, <span className='hb-span-text'>Mongoose</span>,{' '}
            <span className='hb-span-text'>Express</span>, and <span className='hb-span-text'>GraphQL</span>. With{' '}
            <span className='hb-span-text'>Javascript</span>,<span className='hb-span-text'>HTML</span>,{' '}
            <span className='hb-span-text'>Custom CSS</span>, <span className='hb-span-text'>Tailwind</span>, and{' '}
            <span className='hb-span-text'>React</span> supporting the frontend.{' '}
          </p>
          <a target='_blank' rel='noreferrer' href='https://github.com/emilypape/everywhere' className='icon-position'>
            <Icon className='icon-styles icon-prof-style' icon='akar-icons:github-fill' />
          </a>
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
        <a target='_blank' rel='noreferrer' href='https://github.com/emilypape/git-blogging' className='icon-position'>
          <Icon className='icon-styles icon-prof-style' icon='akar-icons:github-fill' />
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
        <a target='_blank' rel='noreferrer' href='https://github.com/emilypape/parkscape' className='icon-position'>
          <Icon className='icon-styles icon-prof-style' icon='akar-icons:github-fill' />
        </a>
      </Carousel.Item>
    </Carousel>
  );
}

export default Portfolio;
