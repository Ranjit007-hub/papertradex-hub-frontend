import React from 'react';
import { Link } from 'react-router-dom';
import SimpleButton from './SimpleButton';
import './header.css';
export default function Header() {
  return (
    <header className='pt-header'>
      <div className='pt-brand'>PaperTradex-Hub</div>
      <nav className='pt-nav'>
        <Link to='/' className='pt-link'>Home</Link>
        <Link to='/trade' className='pt-link'>Trade</Link>
        <Link to='/portfolio' className='pt-link'>Portfolio</Link>
        <div style={{ marginLeft: 12 }}>
          <SimpleButton>Login</SimpleButton>
        </div>
      </nav>
    </header>
  );
}
