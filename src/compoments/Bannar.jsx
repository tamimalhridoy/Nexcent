import React from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Bannar = () => {
  function SimpleSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
        <div className="flex py-24">
          <div className=" my-16">
            <div data-aos="fade-right">
              <h2 className="font-primary font-semibold text-6xl w-[657px]">
                Lessons and insights from 8 years
              </h2>
              <p className="mt-4 mb-8 font-primary font-normal text-base leading-6">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className="font-medium text-sm font-primary py-3 px-9 bg-brand rounded-lg">
                Register
              </button>
            </div>
          </div>
          <img
            src="/banner-images01.png"
            className="w-full"
            alt="banner-images 01"
          />
        </div>
      </div>
    </section>
  );
};

export default Bannar;
