import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { tracks } from "../../constants/ApiEndpoint";
import { changeTrack } from "../../Store/ApiUrl";

interface IOption {
  value: string;
  label: JSX.Element;
}

const fetchTracks = async () => {
  try {
    const response = await axios.get(tracks);
    return response.data.tracks;    
  } catch (error) {
    console.error(error)
  }
};

const TrackFilter = () => {
  const [options, setOptions] = useState<IOption[]>([])
  const dispatch = useDispatch()

  useEffect(() => {

    const fetchTracksCaller = async () => {
      const res = await fetchTracks()
      const tempArr:IOption[] = [{
        value: "",
        label: (
          <div 
            className="grid items-center h-12 w-x-0"
          >
            <img
              className="h-12 p-0"
              src={require("../../constants/symbolHexagon.jpg")}
              alt="Symbol"
            />
          </div>
        ),
      }]
      res.forEach((item:any) => {
        const temp:IOption = {
          value: item.slug,
          label: (
            <div>
              <img className="h-12 p-0" src={item.icon_url} alt={item.title} />
            </div>
        )}

        tempArr.push(temp)
      })
      setOptions(tempArr)      
    }

    fetchTracksCaller()
  },[]);

  return (
    <div className="track-filter h-12 ml-4">
      <Select
        isMulti={false}
        isSearchable={false}
        options={options}
        defaultValue={{
          value: "",
          label: (
            <div 
              className="grid items-center h-12 w-x-0"
            >
              <img
                className="h-12 p-0"
                src={require("../../constants/symbolHexagon.jpg")}
                alt="Symbol"
              />
            </div>
          ),
        }}
        className="my-4"
        components={{
          IndicatorSeparator: () => null,
        }}
        styles={{
          control: (base) => ({
            ...base,
            border: 0,
            outline: 0,
          }),
        }}
        onChange={(value) => dispatch(changeTrack(value?.value))}
      />
    </div>
  );
};

export { TrackFilter };
