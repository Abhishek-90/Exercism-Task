import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeOrder } from "../../Store/ApiUrl";

const NewOldFilter = () => {
  const dispatch = useDispatch();
  const filterRef:any = useRef(HTMLSelectElement)
  return (
      
      <div className="new-old-filter w-80 h-full float-right my-4 mr-6 flex">
      <svg
        onClick={() => filterRef.current.click}
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9 mt-1.5 absolute ml-[275px] cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
        <select
          ref={filterRef}
          className="bg-filters-color h-full w-full pl-4 font-Poppins text-new-old rounded-lg 
        appearance-none"
          onChange={(e) => {
            dispatch(changeOrder(e.target.value));
          }}
        >
          <option value="newest_first">Sort by Most Recent</option>
          <option value="oldest_first">Sort by Least Recent</option>
        </select>
      </div>
  );
};

export { NewOldFilter };
