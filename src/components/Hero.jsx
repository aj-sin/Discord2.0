import React from "react";
import leftimage from "../assets/leftimage.svg"
import rightimage from "../assets/rightimage.svg"
const Hero = () => {
  return (
    <div className="bg-discord_blue  ">
      <div className="p-7  flex flex-col lg:justify-center lg:items-center overflow-y-hidden">
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-xl lg:items-center ">
          <h1 className="font-extrabold text-white md:max-w-2xl text-2xl sm:text-3xl md:text-5xl  ">
            IMAGINE A PLACE...
          </h1>
          <h2 className="font-light text-lg tracking-wide text-white lg:max-w-3xl ">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h2>
          <div className="flex gap-4 flex-col sm:flex-row md:flex-col lg:flex-row ">
            <button className="py-4 px-4 w-64 font-medium flex flex-row justify-center bg-white rounded-full hover:text-discord_blurple hover:shadow-2xl transition ease-in-out duration-200 z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download for Windows
            </button>
            <button className="py-4 px-4 w-72 font-medium bg-black text-white rounded-full hover:bg-gray-800 hover:shadow-2xl transition ease-in-out duration-200 z-10 ">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex-grow mt-10 flex lg:flex-row ">
            <img src={leftimage} alt="" className="w-120 relative   md:hidden lg:inline lg:transform scale-x-[-1] lg:bottom-[73px] lg:-left-[114px] "/>
            <img src={rightimage} alt="" className="w-150 relative -right-[300px] bottom-[150px] hidden md:inline lg:-right-[0px]  lg:bottom-[100px]  "/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
