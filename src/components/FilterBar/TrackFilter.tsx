import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { tracks, testimonials } from "../../constants/ApiEndpoint";
import { changeTrack } from "../../Store/ApiUrl";

interface ITrackProps {
  title: string;
  icon_url: string;
  // count: number;
  slug: string;
  // setState: Function;
}

const fetchTracks = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const TrackFilterItem = ({
  title,
  slug,
  icon_url,
}: // count,
// setState,
ITrackProps) => {
  return (
    <div className="flex flex-row h-[58px] text-[16px] cursor-pointer hover:bg-[#F0F3F9]">
      <div className="img-name flex flex-row w-80 items-center">
      <input className="h-[21px] w-[21px] mr-[26px]" type="radio" name="track" id={title} value={slug} />
      <img src={icon_url} className="h-[42px] mr-[19px]" alt="alt" />
      <label htmlFor={title} className="cursor-pointer">
        {title}
      </label>
      </div>
      <span className="py-1 px-2 h-8 w-10 ml-3 flex justify-center text-sm border border-solid border-2 rounded-l-2xl rounded-r-2xl border-gray-300 mt-1">
        47
      </span>
    </div>
  );
};

const TrackFilter = () => {
  const dispatch = useDispatch();
  const [trackImage, setTrackImage] = useState<string>(
    "https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/logo-42e9b829cf6816496069a62608cb51e7c13624bd.svg"
  );
  const [trackList, setTrackList] = useState<[]>([]);
  const [isTrackListVisible, setIsTrackListVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchTracksCaller = async () => {
      const tracksList = (await fetchTracks(tracks)).tracks;
      const testimonialsCountList = (await fetchTracks(testimonials))
        .testimonials.track_counts;
      const finalTrackList = tracksList.filter(
        (item: any) => testimonialsCountList[item.slug] > 0
      );
      setTrackList(finalTrackList);
    };

    fetchTracksCaller();
  }, []);

  return (
    <>
      {!isTrackListVisible ? (
        <div
          className="track-filter h-12 ml-4 mr-2 w-20 px-2 mt-[16px] bg-downArrow-2 bg-no-repeat bg-right cursor-pointer rounded-lg"
          onClick={() => setIsTrackListVisible(!isTrackListVisible)}
        >
          <svg
            width="38"
            height="42"
            viewBox="0 0 38 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute mt-0.5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M34.8334 10.0198L20.5619 1.78017C19.5828 1.21489 18.3765 1.21489 17.3974 1.78017L3.12595 10.0198C2.14686 10.5851 1.54371 11.6298 1.54371 12.7603V29.2396C1.54371 30.3702 2.14686 31.4149 3.12595 31.9802L17.3974 40.2198C18.3765 40.7851 19.5828 40.7851 20.5619 40.2198L34.8334 31.9802C35.8125 31.4149 36.4157 30.3702 36.4157 29.2397V12.7603C36.4157 11.6298 35.8125 10.5851 34.8334 10.0198ZM21.24 0.605659C19.8413 -0.201886 18.1181 -0.201887 16.7193 0.605659L2.44785 8.84531C1.04914 9.65285 0.1875 11.1453 0.1875 12.7603V29.2396C0.1875 30.8547 1.04914 32.3471 2.44785 33.1547L16.7193 41.3943C18.118 42.2019 19.8413 42.2019 21.24 41.3943L35.5115 33.1547C36.9102 32.3471 37.7719 30.8547 37.7719 29.2397V12.7603C37.7719 11.1453 36.9102 9.65285 35.5115 8.84531L21.24 0.605659Z"
              fill="black"
            />
          </svg>
          <img
            className="h-5 w-[37.56px] mt-[13px]"
            src={trackImage}
            alt="trackImage"
          />
        </div>
      ) : (
        <div
          className="track-filter h-12 ml-4 mr-2 w-20 px-2 mt-[16px] bg-downArrow-2 bg-no-repeat bg-right cursor-pointer rounded-lg outline outline-2 outline-[#2E57E8]"
          onClick={() => setIsTrackListVisible(!isTrackListVisible)}
        >
          <img
            className="h-full w-[37.56px] "
            src={trackImage}
            alt="trackImage"
          />
        </div>
      )}
      {
        <div className="trackList absolute mt-20 ml-3 w-[376px] px-[8px] min-h-fit max-h-[364px] overflow-y-scroll bg-[#FFFFFF] rounded-lg outline-[#2E57E8]">
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
          <TrackFilterItem
            title="Javascript"
            slug="Javascript"
            icon_url="https://dg8krxphbh767.cloudfront.net/tracks/javascript.svg"
          />
        </div>
      }
    </>
  );
};

export { TrackFilter };
