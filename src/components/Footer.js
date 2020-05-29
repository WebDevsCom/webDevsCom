import React from 'react';
import {
  Heart,
  Facebook,
  Instagram,
  GitHub,
  Twitter,
  Linkedin,
} from 'react-feather';
import ReactTooltip from 'react-tooltip';

const Footer = () => {
  return (
    <footer className='footer'>
      <ReactTooltip type='light' />
      <p className='has-text-centered is-size-4 has-text-grey-light'>• • •</p>
      <div className='column'>
        <div className='buttons is-centered'>
          <a
            href='https://www.facebook.com/binu.kumar.90857'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Facebook 🦸‍♂'
          >
            <Facebook color='blue' className='icon' />
          </a>
          <a
            href='https://www.instagram.com/binu__42/'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Instagram 🎉'
          >
            <Instagram color='#C74B91' className='icon' />
          </a>
          <a
            href='https://github.com/Binu42'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Github ❤️'
          >
            <GitHub className='icon' />
          </a>
          <a
            href='https://twitter.com/BinuKum59882786'
            target='_blank'
            rel='noopener noreferrer'
            className='button button-special is-rounded box-shadow-lift'
            data-tip='connect on Twitter 🤷‍♂️'
          >
            <Twitter color='#1DA1F2' className='icon' />
          </a>
          <a
            href='https://www.linkedin.com/in/binu-kumar-5a7038146/'
            target='_blank'
            rel='noopener noreferrer'
            className='is-hidden-touch button button-special is-rounded box-shadow-lift'
            data-tip='connect on Linkedin 👨‍⚖️'
          >
            <Linkedin color='#0077B5' className='icon' />
          </a>
        </div>
      </div>
      <div className='column has-text-centered'>
        <p className='subtitle is-7 is-capitalized has-text-danger'>
          This Project is just for Learning and teaching purposes.
        </p>
      </div>
      <div className='column has-text-centered'>
        <p className='menu-label'>
          Made with <Heart color='red' fill='red' size='15px' />{' '}
          <a
            href='https://binu42.netlify.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            By WEBDEVSCOM
          </a>{' '}
          <br />
          &copy;2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
