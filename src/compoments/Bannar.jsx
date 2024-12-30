import React, { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Bannar = () => {
  const [countScroll, setCountScroll] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="container">
        <div className="flex py-24">
          <div className=" my-16">
            <ScrollTrigger
              onEnter={() => setCountScroll(true)}
              onExit={() => setCountScroll(false)}
            >
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
            </ScrollTrigger>
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
