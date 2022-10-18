import React from 'react';

import { map_location } from '../constants';

import map from '../../Images/loc.png';

const Sangeet = () => {
  const goToLoc = () => {
    window.open(map_location.home, '_self');
  };

  return (
    <>
      <div className='main_container main_other '>
        <div className='title'>Sangeet</div>
        <div className='other_details'>
          <p>(02-12-2022)</p>
          <p>at</p>
        </div>
        <div className='address'>
          At our residence <br />
          at 2PM
        </div>
        <div className='title' style={{ marginTop: '40px' }}>
          Chak Bhat
        </div>
        <div className='other_details'>
          <p>(02-12-2022)</p>
          <p>at</p>
        </div>
        <div className='address'>at 4PM</div>

        <div className='map'>
          <div onClick={goToLoc}>
            <div>
              <img src={map} className='map_img' alt='' />
            </div>
            <p>Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sangeet;
