import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Sidebar.css';
import background from '../images/gradienta-LeG68PrXA6Y-unsplash.jpg';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src={background} alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Ashish Dongol</h2>
        <h4>Ashish911/github.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2000</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>1000</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
