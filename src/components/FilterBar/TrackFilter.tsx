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

    fetchTracks().then((response) => {
      response.forEach((item:any)=> {
        const temp = {
          value: item.title,
          label: <div><img className="h-12 p-0" src={item.icon_url} alt={item.title}/></div>
        }
        options.push(temp)
      })
    })
  },)

  return (
    <div className="track-filter h-12 ml-4">
      <Select 
        isMulti={false}
        isSearchable={false}
        options={options}
        className="my-4"
        components={{
          IndicatorSeparator: ()=>null
        }}
        styles={{
          control: base => ({
            ...base,
            border: 0,
            outline: 0
          })
        }}
        onChange= {(value)=> console.log(value)}
      />
    </div>
  );
};

export { TrackFilter };
