import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from 'redux'
import { changeExercise } from "../../Store/ApiUrl";

var timerID:ReturnType<typeof setTimeout>

const searchFunction = (keyword:string, dispatch:Dispatch) => {
  clearTimeout(timerID)
  timerID = setTimeout(() => {
    console.log("Called")
    dispatch(changeExercise(keyword))
  },500)
}

const TitleFilter = () => {
  const dispatch = useDispatch()
  return (
    <div className="type-search-filter h-12 w-96 my-4 flex flex-row bg-filters-color ml-4 rounded-lg ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className=" my-3 h-6 w-6 ml-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={()=>{}}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        className="search-box bg-filters-color font-Poppins rounded-lg h-full w-full text-search-text font-medium pl-4 outline-none"
        placeholder="Filter by excercise title"
        onChange={(e)=>searchFunction(e.target.value, dispatch)}
      />
    </div>
  );
};

export { TitleFilter };
