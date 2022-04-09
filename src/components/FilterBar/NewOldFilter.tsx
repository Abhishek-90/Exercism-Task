import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeOrder } from "../../Store/ApiUrl";
import styles from "./NewOldFilter.module.css";

const NewOldFilter = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("Most")
  return (
    <div className="new-old-filter w-80 h-full float-right my-4 mr-6">
      <div className="select-box font-Poppins text-lg text-new-old">
        <div className="selected">
          Sort by {filterValue} Recent
        </div>

        <div className="option-box mt-2">
          <div className="option">
            <input onChange={() => {setFilterValue("Most");dispatch(changeOrder("newest_first"))}} className="appearance-none" type="radio" name="NewOld" id="new" value="newest_first" />
            <label className="cursor-pointer" htmlFor="new">Sort by Most Recent</label>
          </div>
          <div className="option">
            <input onChange={() => {setFilterValue("Least");dispatch(changeOrder("oldest_first"))}} className="appearance-none" type="radio" name="NewOld" id="old" value="oldest_first" />
            <label className="cursor-pointer" htmlFor="old">Sort by Least Recent</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewOldFilter };
