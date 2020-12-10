import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
export default class NavbarAdmin extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
        <Link className='navbar-brand' to='/dashboard'>
          Admin
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#collapsibleNavbar'
        >
          <span className='navbar-toggler-icon' />
        </button>
      </nav>
    );
  }
}
