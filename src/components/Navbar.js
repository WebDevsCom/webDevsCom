import React from 'react';
import { Terminal } from 'react-feather';

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
        <a className='navbar-item has-text-primary' href='/'>
          <Terminal color='blue' />
          &emsp; WEBDEVSCOM
        </a>

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
          <a className='navbar-item' href='/'>
            Home
          </a>

          <div className='navbar-item has-dropdown is-hoverable'>
            <a className='navbar-link' href='#!'>
              Category
            </a>
            <div className='navbar-dropdown'>
              <a className='navbar-item'>WEB</a>
              <a className='navbar-item'>ANDROID</a>
              <a className='navbar-item'>AI/ML</a>
              <a className='navbar-item' href='#!'>
                Comp. Coder
              </a>
              <hr className='navbar-divider' />
              <a className='navbar-item'>ADD Category</a>
            </div>
          </div>

          <a className='navbar-item' href='/docs'>
            Contributors
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
