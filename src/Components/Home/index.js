import React from 'react';

import { map_location } from '../constants';

import locGif from '../../Images/loc_gif.gif';
import map from '../../Images/map.png';

const index = () => {
  const goToLoc = () => {
    window.open(map_location.home, '_self');
  };

  return (
    <>
      <div className='main_container'>
        <div className='imp_details'>
          <p>Kartik</p>
          <p>weds</p>
          <p>Ruby (Komal)</p>
        </div>
        <div className='other_details'>
          <p>(03-12-2022)</p>
        </div>
      </div>
      <div className='map' onClick={goToLoc}>
        <img src={locGif} className='location' alt='' />
        <div>
          <img src={map} className='map_img' alt='' />
        </div>
        <p>Home</p>
      </div>
    </>
  );
};

export default index;
