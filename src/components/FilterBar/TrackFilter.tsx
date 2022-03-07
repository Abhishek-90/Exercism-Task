import axios from "axios";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { tracksEndpoint } from "../../constants/ApiEndpoint";
interface IOption {
  value: string;
  label: JSX.Element;
}

const fetchTracks = async () => {
  try {
    const response = await axios.get(tracksEndpoint);
    return response.data.tracks;    
  } catch (error) {
    console.error(error)
  }
};

const TrackFilter = () => {
  const [options, setOptions] = useState<IOption[]>([])

  useEffect(() => {

    const fetchTracksCaller = async () => {
      const res = await fetchTracks()
      const tempArr:IOption[] = []
      res.forEach((item:any) => {
        const temp:IOption = {
          value: item.title,
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
                className="h-8 p-0"
                src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/logo-42e9b829cf6816496069a62608cb51e7c13624bd.svg"
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
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};

export { TrackFilter };
