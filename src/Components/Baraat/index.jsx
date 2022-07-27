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
        <div className='title'>Baraat</div>
        <div className='other_details'>
          <p>(03-12-2022)</p>
          <p>Depart From</p>
        </div>
        <div className='address'>
          H.No.136, Ward No.10, Near Santoshi Mata Temple, Pataudi, Distt.
          Gurugram, Haryana
        </div>

        <div className='other_details'>
          <p>to</p>
        </div>

        <div className='address'>
          Ward 12, Naharpur Ki Dhani, FarrukhNagar, Distt. Gurugram, Haryana
        </div>
      </div>
      <div className='map' onClick={goToLoc}>
        <img src={locGif} className='location' alt='' />
        <div>
          <img src={map} className='map_img' alt='' />
        </div>
        <p>Venue</p>
      </div>
      <div className='home_loc' onClick={goToHome}>
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
