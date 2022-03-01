import axios from "axios";
import React, { useEffect } from "react";
import Select from "react-select";
import { tracksEndpoint } from '../../constants/ApiEndpoint'
interface IOption {
  value: string;
  label: JSX.Element;
}

const fetchTracks = async () => {
  const response = await axios.get(tracksEndpoint)
  return response.data.tracks
}

const TrackFilter = () => {

  const options:IOption[] = [];

  useEffect(() => {
    // Implement hook to fetch tracks from Track-Api on Page load.
    fetchTracks().then((response) => {
      response.forEach((item:any)=> {
        const temp = {
          value: item.title,
          label: <div><img src={item.icon_url} alt={item.title}/></div>
        }
        options.push(temp)
      })

      console.log(options)
    })
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
