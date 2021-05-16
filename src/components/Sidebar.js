import { Avatar } from '@material-ui/core';
import React from 'react';
import '../css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img src='' alt='' />
        <Avatar className='sidebar__avatar' />
        <h2>Ashish Dongol</h2>
        <h4>Ashish911/github.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>2000</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on post</p>
          <p className='sidebar_statNumber'>1000</p>
        </div>
      </div>

      <div className='sidebar__bottom'>
        <p>Recent</p>
      </div>
    </div>
  );
};

export default Sidebar;
