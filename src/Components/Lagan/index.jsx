import React from 'react';

import { map_location } from '../constants';

import map from '../../Images/map.png';

const Lagan = () => {
  const goToLoc = () => {
    window.open(map_location.lagan, '_self');
  };

  return (
    <>
      <div className='main_container main_other '>
        <div className='title'>Lagan</div>
        <div className='other_details'>
          <p>(01-12-2022)</p>
          <p>at</p>
        </div>
        <div className='address'>
          Parth Palace, <br /> Opposite Union Bank of India, Near new Anaj
          Mandi, Haily Mandi, Distt. Gurugram, Haryana <br />
          at 4PM
        </div>
        <div className='map'>
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

export default Lagan;
