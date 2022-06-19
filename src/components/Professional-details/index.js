import React from 'react';
import { Icon } from '@iconify/react';

function Details() {
  return (
    <div>
      <div className='what-i-do'> What I Do</div>
      <div className='what-i-do-box'>
        <div className='skill-box'>
          <div className='skill-title-box'>
            <Icon className='icon-resume' icon='fluent:javascript-16-regular' color='#fa9f42' />
            <h1 className='skill-title'>Frontend</h1>
          </div>
          <div className='skill-description-box'>
            <p className='skill-description'>
              {' '}
              I maintain profieciency in Javascript, React, HTML, and CSS. I have also built applications using Jquery,
              and templating languages such as Handlebars.js
            </p>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title-box'>
            <Icon className='icon-resume' icon='bxs:coin-stack' color='#fa9f42' />
            <h1 className='skill-title'>Backend</h1>
          </div>
          <div className='skill-description-box'>
            <p>
              {' '}
              I have produced applications using several different backend technologies, including: Node.js, SQL,
              Sequelize, Mongoose, MongoDB, Express.js, GraphQl, Socket.io
            </p>
          </div>
        </div>
        <div className='skill-box'>
          <div className='skill-title-box'>
            <Icon className='icon-resume' icon='fa:css3' color='#fa9f42' />
            <h1 className='skill-title'>Web Design</h1>
          </div>
          <div className='skill-description-box'>
            <p>
              Beyond custom CSS. I have also worked with several design frameworks, including: Tailwind, Bootstrap, and
              Materialize. Additionally delving into Tailwind's component libraries
            </p>
          </div>
        </div>
        <div className='skill-box bottom-row'>
          <div className='skill-title-box'>
            <Icon className='icon-resume' icon='emojione-monotone:thought-balloon' color='#fa9f42' />
            <h1 className='skill-title'>Problem Solving</h1>
          </div>
          <div className='skill-description-box'>
            <p>
              {' '}
              Through experience debugging and refactoring code, I have become extremely comfortable with defining
              problems, generating ideas, evaluating solutions, and implementing and re-evaluating those solutions in my
              code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
