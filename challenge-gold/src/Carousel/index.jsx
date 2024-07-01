import "./styles.css";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="frame-testi flex-per-frame">
          <div>
            <img src="/landing-page/img_photo.png" alt="img_1" />
          </div>
          <div className="col-sm-9">
            <div>
              <img src="/landing-page/Rate.png" alt="rate" />
            </div>
            <div>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </div>
            <div>John Dee 32, Bromo</div>
          </div>
        </div>
        <div className="frame-testi flex-per-frame">
          <div>
            <img src="/landing-page/img_photo (1).png" alt="img_2" />
          </div>
          <div className="col-sm-9">
            <div>
              <img src="/landing-page/Rate.png" alt="rate" />
            </div>
            <div>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
            </div>
            <div>John Dee 32, Bromo</div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
