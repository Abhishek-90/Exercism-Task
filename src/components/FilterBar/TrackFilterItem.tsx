import { useDispatch, useSelector } from "react-redux";
import { changeTrack } from "../../Store/ApiUrl";
import { AllTrackImage } from "./AllTrackImage";

interface ITrackProps {
  title: string;
  icon_url: string;
  count: number;
  slug: string;
  setImage: Function;
  setTrackVisibility: Function;
}

export const TrackFilterItem = ({
  title,
  slug,
  icon_url,
  count,
  setImage,
  setTrackVisibility,
}: ITrackProps) => {
  const dispatch = useDispatch();
  const { track } = useSelector((state: any) => state.testimonial);

  return (
    <div
      className="flex flex-row h-[58px] text-[16px] cursor-pointer px-[8px] hover:bg-[#F0F3F9]"
      onClick={() => {
        dispatch(changeTrack(slug));
        setImage(icon_url);
        setTrackVisibility(false);
      }}
    >
      <div className="img-name flex flex-row w-80 items-center px-2">
        <input
          className="h-[21px] w-[21px] mr-[26px]"
          type="radio"
          name="track"
          id={title}
          value={slug}
          checked={slug === track}
          onSelect={() => {
            dispatch(changeTrack(slug));
            setImage(icon_url);
            setTrackVisibility(false);
          }}
        />
        <div className="logo flex items-center">
          {slug === "" && <AllTrackImage left={0.5} right={19} />}
          {slug !== "" && (
            <img
              src={
                icon_url ||
                "https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/logo-42e9b829cf6816496069a62608cb51e7c13624bd.svg"
              }
              className="h-[42px] mr-[19px]"
              alt="alt"
            />
          )}
        </div>
        <label htmlFor={title} className="cursor-pointer">
          {title}
        </label>
      </div>
      <span className="py-1 px-2 h-8 w-10 ml-3 mt-3 flex justify-center text-sm border border-solid border-2 rounded-l-2xl rounded-r-2xl border-gray-300">
        {count}
      </span>
    </div>
  );
};
