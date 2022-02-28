import React from "react";

const NewOldFilter = () => {
  return (
    <div className="new-old-filter w-80 h-full float-right my-4 mr-6">
      <select className="bg-filters-color h-full w-full pl-4 font-Poppins text-new-old rounded-lg">
        <option value="newest_first">Sort by Most Recent</option>
        <option value="oldest_first">Sort by Least Recent</option>
      </select>
    </div>
  );
};

export { NewOldFilter };
