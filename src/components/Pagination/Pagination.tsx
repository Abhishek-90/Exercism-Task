import React from "react";

const Pagination = () => {
  return (
    <div className="h-20 flex flex-row ">
      <div className="previous-btn h-full w-1/6 grid items-center flex justify-center">
        <button className="previous h-2/4 w-32 flex flex-row shadow drop-shadow-2xl shadow-button ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-2 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <p className="font-Poppins text-sm font-normal w-20 my-2">Previous</p>
        </button>
      </div>
      <div className="page-number w-4/6 bg-slate-300"></div>
      <div className="previous-btn h-full w-1/6 grid items-center flex justify-center">
        <button className="previous h-2/4 w-24 flex flex-row shadow drop-shadow-2xl shadow-button ">
          <p className="font-Poppins text-sm font-normal w-14 my-2 ml-2">Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-2 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Pagination };
