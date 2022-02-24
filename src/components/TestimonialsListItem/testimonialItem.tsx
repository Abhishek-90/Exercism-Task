import React from "react";
import { ChevronRightIcon } from '@heroicons/react/outline'

const TestimonialItem = () => {
  return (
    <div className="flex flex-row h-16 space-x-6 w-auto">
      <div className="track-icon ml-4 w-15 h-full grid content-center">
        <img
          className="w-10 h-10"
          src="https://dg8krxphbh767.cloudfront.net/tracks/python.svg"
          alt="Python Track"
        />
      </div>
      <div className="avatar w-15 h-full grid content-center">
        <img
          className="w-12 h-12"
          src="https://dg8krxphbh767.cloudfront.net/exercises/hamming.svg"
          alt="avatar"
        />
      </div>
      <div className="reviewer w-96 h-full flex flex-col grid content-center">
        <p className="font-semibold font-sans">James South</p>
        <p className="font-normal font-sans">
          on Resistor Color Duo in Haskell
        </p>
      </div>
      <div className="content w-1/2 h-full grid content-center">
        <p className="font-normal font-sans antialiased">
          Very Kind mentor who has patience to explain everything I am not s...
        </p>
      </div>
      <div className="creation-date h-full w-40 grid content-center">
        <p className="font-normal font-semibold font-sans">A year ago</p>
      </div>
      <div className="next-button h-full w-8">
        <button className="h-full w-full">
		  <ChevronRightIcon
		  	className="text-gray-500"
		  />
        </button>
      </div>
    </div>
  );
};

export { TestimonialItem };
