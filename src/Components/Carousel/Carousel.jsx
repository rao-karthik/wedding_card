import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import './Carousel.scss';

import Home from '../Home';
import Lagan from '../Lagan';
import Sangeet from '../Sangeet';
import Baraat from '../Baraat';

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on('created', () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on('detailsChanged', rotate);
};

const animation = { duration: 90000, easing: (t) => t };

const Carousel = (props) => {
  const { children } = props;

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: '.carousel__cell',
      renderMode: 'custom',
      mode: 'free-snap',
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    },
    [carousel]
  );

  return (
    <div className='wrapper'>
      <div className='scene' style={{ height: window.innerHeight }}>
        <div className='carousel' ref={sliderRef}>
          {children}
          <div className='carousel__cell'>
            <div className='background_image'></div>
            <Home />
          </div>
          <div className='carousel__cell' style={{ color: '#fff' }}>
            <div className='background_image frame_background'></div>
            <Lagan />
          </div>
          <div className='carousel__cell' style={{ color: '#fff' }}>
            <div className='background_image frame_background'></div>
            <Sangeet />
          </div>
          <div className='carousel__cell' style={{ color: '#fff' }}>
            <div className='background_image frame_background'></div>
            <Baraat />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
