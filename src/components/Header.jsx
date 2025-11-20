import React from 'react';
import SimpleButton from './SimpleButton';
import './header.css';
export default function Header() {
  return (
    <header className='pt-header'>
      <div className='pt-brand'>PaperTradex-Hub</div>
      <nav className='pt-nav'>
        <a href='/' className='pt-link'>Home</a>
        <a href='/trade' className='pt-link'>Trade</a>
        <a href='/portfolio' className='pt-link'>Portfolio</a>
        <div style={{ marginLeft: 12 }}>
          <SimpleButton>Login</SimpleButton>
        </div>
      </nav>
    </header>
  );
}
