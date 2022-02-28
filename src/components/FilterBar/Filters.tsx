import React from "react";
import { NewOldFilter } from "./NewOldFilter";
import { TitleFilter } from "./TitleFilter";
import { TrackFilter } from "./TrackFilter";

export const Filters = () => {
  return (
    <div className="filters-bar h-20 w-full border-b-2 border-solid border-slate-200 flex flex-row">
      <div className="track-type-filter w-1/2 h-full flex flex-row">
        <TrackFilter/>
        <TitleFilter/>
      </div>
      <div className="new-old-filter-parent w-1/2 h-12">
        <NewOldFilter />
      </div>
    </div>
  );
};
