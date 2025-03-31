import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className="header">
      <ul className="nav-list">
        <Link to='/'><li className='li11'>Home</li></Link>
        <Link to='/about'><li className='li11'>About</li></Link>
        <Link to='/contact'><li className='li11'>Contact</li></Link>
        <Link to='/info'><li className='li11'>Info</li></Link>
      </ul>
      <button className="login-btn">Hi User</button>
    </header>
  );
}

export default Navbar