import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AttractiveSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="image1.jpg" alt="slide1" />
      </div>
      <div>
        <img src="image2.jpg" alt="slide2" />
      </div>
      <div>
        <img src="image3.jpg" alt="slide3" />
      </div>
      <div>
        <img src="image4.jpg" alt="slide4" />
      </div>
      <div>
        <img src="image5.jpg" alt="slide5" />
      </div>
    </Slider>
  );
};

export default AttractiveSlider;
