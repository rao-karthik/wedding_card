import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className='header_container'>
      <nav className='nav_container'>
        <div className='menu_container' onClick={handleShowOptions}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='menu'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      </nav>
      <div
        className={`header_options ${
          showOptions ? 'show_options' : 'hide_options'
        }`}>
        <Link to='/' onClick={handleShowOptions}>
          Home
        </Link>
        <Link to='/lagan' onClick={handleShowOptions}>
          Lagan <span>(01-12-2022)</span>
        </Link>
        <Link to='/sangeet' onClick={handleShowOptions}>
          Sangeet <span>(02-12-2022)</span>
        </Link>
        <Link to='/baraat' onClick={handleShowOptions}>
          Baraat <span>(03-12-2022)</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
