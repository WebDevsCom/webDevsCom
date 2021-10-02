import React from 'react';
import { Heart, Facebook, Instagram, GitHub, Twitter, Linkedin } from 'react-feather';
import ReactTooltip from 'react-tooltip';

function Footer() {
  return (
    <footer className="footer">
      <ReactTooltip type="light" />

      <p className="has-text-centered is-size-4 has-text-grey-light">• • •</p>

      <div className="column">
        <div className="buttons is-centered">
          <a
            className="button button-special is-rounded box-shadow-lift"
            data-tip="connect on Facebook 🦸‍♂"
            href="https://www.facebook.com/binu.kumar.90857"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Facebook className="icon" color="blue" />
          </a>

          <a
            className="button button-special is-rounded box-shadow-lift"
            data-tip="connect on Instagram 🎉"
            href="https://www.instagram.com/krbinu42/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Instagram className="icon" color="#C74B91" />
          </a>

          <a
            className="button button-special is-rounded box-shadow-lift"
            data-tip="connect on Github ❤️"
            href="https://github.com/Binu42"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHub className="icon" />
          </a>

          <a
            className="button button-special is-rounded box-shadow-lift"
            data-tip="connect on Twitter 🤷‍♂️"
            href="https://twitter.com/kbinu42"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Twitter className="icon" color="#1DA1F2" />
          </a>

          <a
            className="is-hidden-touch button button-special is-rounded box-shadow-lift"
            data-tip="connect on Linkedin 👨‍⚖️"
            href="https://www.linkedin.com/in/binukumar/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Linkedin className="icon" color="#0077B5" />
          </a>
        </div>
      </div>

      {/* <div className='column has-text-centered'>
        <p className='subtitle is-7 is-capitalized has-text-danger'>
          This Project is just for Learning and teaching purposes.
        </p>
      </div> */}

      <div className="column has-text-centered">
        <p className="menu-label">
          Made with <Heart color="red" fill="red" size="15px" />{' '}
          <a href="https://binu42.netlify.com" rel="noopener noreferrer" target="_blank">
            By Binu Kumar
          </a>{' '}
          <br />
          &copy;
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
