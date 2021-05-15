import React from 'react';
import '../css/Header.css';

const Header = () => {
  return (
    <div>
      <div className='header__left'>
        <img src='' alt='' />
        <div className='header__search'>
          <input type='text' />
        </div>
      </div>
      <div className='header__right'></div>
    </div>
  );
};

export default Header;
