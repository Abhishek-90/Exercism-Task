import React from "react";

const TrackFilter = () => {
  return (
    <div className="track-filter">
      <select className="bg-filters-color h-full w-full pl-4 font-Poppins text-new-old rounded-lg">
        <option value="newest_first">
          <span>
            <img
              src="https://dg8krxphbh767.cloudfront.net/tracks/bash.svg"
              alt="name"
            ></img>
          </span>
        </option>
        <option value="oldest_first">Sort by Least Recent</option>
      </select>
    </div>
  );
};

export { TrackFilter };
