import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../img/img1.png';
import img2 from '../../../img/img2.jpg';
import img3 from '../../../img/img3.png';
import img4 from '../../../img/img4.png';
export default function Slider() {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-ride='carousel'
    >
      <ol className='carousel-indicators'>
        <li
          data-target='#carouselExampleIndicators'
          data-slide-to={0}
          className='active'
        />
        <li data-target='#carouselExampleIndicators' data-slide-to={1} />
        <li data-target='#carouselExampleIndicators' data-slide-to={2} />
        <li data-target='#carouselExampleIndicators' data-slide-to={3} />
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img className='d-block w-100' src={img1} alt='First slide' />
        </div>
        <div className='carousel-item'>
          <img className='d-block w-100' src={img2} alt='Second slide' />
        </div>
        <div className='carousel-item'>
          <img className='d-block w-100' src={img3} alt='Third slide' />
        </div>
        <div className='carousel-item'>
          <img className='d-block w-100' src={img4} alt='Third slide' />
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#carouselExampleIndicators'
        role='button'
        data-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
}
