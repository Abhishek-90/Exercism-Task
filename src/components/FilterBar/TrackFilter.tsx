import React, { useEffect } from "react";
import Select from "react-select";

interface IOption {
  value: string;
  label: string;
}

const TrackFilter = () => {

  const options:IOption[] = [];

  useEffect(() => {
    // Implement hook to fetch tracks from Track-Api on Page load.
  },[])
  return (
    <div className="track-filter">
      <Select 
        className="bg-filters-color h-full w-full pl-4 font-Poppins text-new-old rounded-lg" 
        options={options}
      />
    </div>
  );
};

export { TrackFilter };
