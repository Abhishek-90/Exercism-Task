import React from "react";

export const Filters = () => {
  return (
    <div className="filters-bar h-20 w-full border-b-2 border-solid border-slate-200 flex flex-row">
      <div className="track-type-filter w-1/2 h-full">
        <div className="type-search-filter h-12 w-80 my-4 flex flex-row bg-filters-color ml-4 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" my-3 h-6 w-6 ml-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          <input
            type="text"
            className="search-box bg-filters-color font-Poppins rounded-lg h-full w-full text-title-color font-medium pl-4 outline-none"
            placeholder="Filter by excercise title"
          />
        </div>
      </div>

      <div className="new-old-filter-parent w-1/2 h-12">
        <div className="new-old-filter w-80 h-full float-right my-4 mr-6">
          <select className="bg-filters-color h-full w-full pl-4 font-Poppins text-new-old rounded-lg">
            <option value="newest_first">Sort by Most Recent</option>
            <option value="oldest_first">Sort by Least Recent</option>
          </select>
        </div>
      </div>
    </div>
  );
};
