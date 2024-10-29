import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.css";

const Bannar = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-white">
      <div className="container">
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
