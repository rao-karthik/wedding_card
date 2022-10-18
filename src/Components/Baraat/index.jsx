import React from 'react';

import { map_location } from '../constants';

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
      <div className='main_container main_other '>
        <div className='title'>Baraat</div>
        <div className='other_details'>
          <p>(03-12-2022)</p>
          <p>Depart From</p>
        </div>
        <div className='address'>
          Ward No.10, Near Santoshi Mata Temple, Pataudi, Distt. Gurugram,
          Haryana <br />
          at 04:15PM
        </div>

        <div className='other_details'>
          <p>to</p>
        </div>

        <div className='address'>
          Ward 12, Naharpur Ki Dhani, FarrukhNagar, Distt. Gurugram, Haryana
        </div>

        <div className='map' style={{justifyContent: 'space-between'}}>
          <div onClick={goToHome}>
            <div>
              <img src={map} className='map_img' alt='' />
            </div>
            <p>Home</p>
          </div>

          <div onClick={goToLoc}>
            <div>
              <img src={map} className='map_img' alt='' />
            </div>
            <p>Venue</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Baraat;
