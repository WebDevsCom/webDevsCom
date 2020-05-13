import React from 'react';
import { Terminal } from 'react-feather';
import { Link } from 'react-router-dom';

const Navbar = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
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
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item has-text-primary' to='/'>
          <Terminal color='blue' />
          &emsp; WEBDEVSCOM
        </Link>

        <a
          role='button'
          className='navbar-burger burger'
          aria-label='menu'
          aria-expanded='false'
          href='#!'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div id='navbarBasicExample' className='navbar-menu'>
        <div className='navbar-end'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link' href='#!'>
              Category
            </a>
            <div className='navbar-dropdown'>
              <Link className='navbar-item' to='/web'>
                WEB
              </Link>
              <Link className='navbar-item' to='/android'>
                ANDROID
              </Link>
              <Link className='navbar-item' to='/ml'>
                AI/ML
              </Link>
              <Link className='navbar-item' to='/champs'>
                Comp. Coders
              </Link>
              <hr className='navbar-divider' />
              <a
                className='navbar-item'
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/WebDevsCom/webDevsCom.github.io'
              >
                ADD Category
              </a>
            </div>
          </div>

          <a
            className='navbar-item'
            rel='noopener noreferrer'
            target='_blank'
            href='https://github.com/WebDevsCom/webDevsCom.github.io'
          >
            Contributors
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
