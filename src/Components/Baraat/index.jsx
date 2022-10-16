import React from 'react';

import { map_location } from '../constants';

import locGif from '../../Images/loc_gif.gif';
import map from '../../Images/map.png';

const Baraat = () => {
  const goToLoc = () => {
    window.open(map_location.baraat, '_self');
  };

  const goToHome = () => {
    window.open(map_location.home, '_self');
  };
  return (
    <>
      {' '}
      <div className='main_container'>
        <div className='title'>Wedding</div>
        <div className='other_details'>
          <p>(03-12-2022)</p>
          <p>at</p>
        </div>

        <div className='address'>
          Ward 12, Naharpur Ki Dhani, FarrukhNagar, Distt. Gurugram, Haryana <br />
          at 8PM
        </div>
      </div>
      <div className='map' onClick={goToHome}>
        <img src={locGif} className='location' alt='' />
        <div>
          <img src={map} className='map_img' alt='' />
        </div>
        <p>Home</p>
      </div>
    </>
  );
};

export default Baraat;
