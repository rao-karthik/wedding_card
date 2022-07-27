import React from 'react';

import { map_location } from '../constants';

import locGif from '../../Images/loc_gif.gif';
import map from '../../Images/map.png';

const Sangeet = () => {
  const goToLoc = () => {
    window.open(map_location.sangeet, '_self');
  };

  return (
    <>
      <div className='main_container'>
        <div className='title'>Sangeet</div>
        <div className='other_details'>
          <p>(02-12-2022)</p>
          <p>at</p>
        </div>
        <div className='address'>
          Agarwal Dhramshala, Ward 10, Near Santoshi Mata Temple, Pataudi,
          Distt. Gurugram, Haryana
        </div>
      </div>
      <div className='map' onClick={goToLoc}>
        <img src={locGif} className='location' alt='' />
        <div>
          <img src={map} className='map_img' alt='' />
        </div>
        <p>Venue</p>
      </div>
    </>
  );
};

export default Sangeet;
