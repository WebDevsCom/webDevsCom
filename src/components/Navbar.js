import React from 'react';
import { Terminal } from 'react-feather';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const Navbar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );
    const anchors = document.querySelectorAll('.navbar-item');
    anchors.forEach((anchor) => {
      anchor.addEventListener('click', () => {
        document
          .querySelector('#navbarBasicExample')
          .classList.remove('is-active');

        document.querySelector('.navbar-burger').classList.remove('is-active');
      });
    });

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });

  return (
    <nav
      className='navbar is-fixed-top'
      role='navigation'
      id='navbar'
      aria-label='main navigation'
    >
      <ReactTooltip type='light' />
      <div className='navbar-brand'>
        <Link className='navbar-item has-text-primary' to='/'>
          <Terminal color='blue' />
          &emsp; WEBDEVSCOM
        </Link>

        <div
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </div>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/' data-tip='Go to Home page'>
            Home
          </Link>

          <Link
            className='navbar-item'
            to='/resources'
            data-tip='Go to Category Page'
          >
            Resources
          </Link>

          <Link
            className='navbar-item'
            to='/bookmarked'
            data-tip='Go to Category Page'
          >
            BookMarked
          </Link>

          <a
            className='navbar-item'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/WebDevsCom/webDevsCom.github.io/graphs/contributors'
            data-tip='See our Contributors'
          >
            Contributors
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
