import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoTix from '../../img/logoTix.png';
export default class NavbarHome extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='/'>
          <img src={logoTix}></img>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='#lichchieu'>
                Lịch chiếu
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#cumrap'>
                Cụm rạp
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#tintuc'>
                Tin tức
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#ungdung'>
                Ứng dụng
              </a>
            </li>
            <li className='nav-item'>
              <Link className=' nav-link navbar-item navlogin d-none' to='/'>
                Đăng Nhập
              </Link>
            </li>
            <li className='nav-item'>
              <Link className=' nav-link navbar-item navsignUp d-none' to='/'>
                Đăng Ký
              </Link>
            </li>
          </ul>
        </div>
        <div className='form-login-sigup'>
          <Link className='navbar-item login' to='/'>
            Đăng Nhập
          </Link>
          <Link className='navbar-item signUp' to='/'>
            Đăng Ký
          </Link>
        </div>
      </nav>
    );
  }
}
