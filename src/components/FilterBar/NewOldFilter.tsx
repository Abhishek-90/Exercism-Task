import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeOrder } from "../../Store/ApiUrl";

const NewOldFilter = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("Most");
  let [active, setActive] = useState<boolean>(false);

  return (
    <div className="new-old-filter w-80 h-full float-right my-4 mr-6">
      <div
        className={`select-box absolute bg-filters-color cursor-pointer w-80 ${
          active ? "h-fit outline outline-2 outline-[#2E57E8]" : "h-12"
        } py-1 px-4 text-md text-new-old rounded-lg`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <div className="selected bg-downArrow bg-no-repeat bg-right mt-2">
          Sort by {filterValue} Recent
        </div>

        <div
          className={`options-container mt-3  ${
            active ? "h-fit" : "h-0"
          } overflow-hidden rounded-lg`}
        >
          <div className="option p-1 hover:bg-filters-color-hover">
            <input
              onClick={() => {
                setFilterValue("Most");
                setActive(false);
                dispatch(changeOrder("newest_first"));
              }}
              className="appearance-none"
              type="radio"
              name="NewOld"
              id="new"
              value="newest_first"
            />
            <label className="cursor-pointer" htmlFor="new">
              Sort by Most Recent
            </label>
          </div>
          <div className="option p-1 hover:bg-filters-color-hover">
            <input
              onClick={() => {
                setFilterValue("Least");
                setActive(false);
                dispatch(changeOrder("oldest_first"));
              }}
              className="appearance-none"
              type="radio"
              name="NewOld"
              id="old"
              value="oldest_first"
            />
            <label className="cursor-pointer w-full" htmlFor="old">
              Sort by Least Recent
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NewOldFilter };
