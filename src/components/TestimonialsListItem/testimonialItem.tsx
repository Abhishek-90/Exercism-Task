import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { getDate } from './CalculateDate'
interface ITestimonials {
  track_icon_url: string;
  avatar_icon_url: string;
  content: string;
  reviewer_name: string;
  track_name: string;
  mentor_name: string;
  date_created: string;
}

const TestimonialItem = ({
  track_icon_url,
  avatar_icon_url,
  content,
  reviewer_name,
  track_name,
  date_created,
  mentor_name
}: ITestimonials) => {
  return (
    <div className="flex flex-row h-16 space-x-6 hover:bg-hover border-b-2 border-solid border-slate-100">
      <div className="track-icon ml-4 w-15 h-full grid content-center">
        <img className="w-8 h-8" src={track_icon_url} alt="Track_icon" />
      </div>
      <div className="avatar w-15 h-full grid content-center">
        <img className="rounded-full w-12 h-12" src={avatar_icon_url} alt="avatar" />
      </div>
      <div className="reviewer w-72 h-full flex flex-col grid content-center">
        <p className="font-semibold font-sans text-reviewer-name-color">{reviewer_name}</p>
        <p className="font-normal text-sm font-sans text-track-color">on {mentor_name} in {track_name}</p>
      </div>
      <div className="content w-5/12 h-full grid content-center">
        <p style={{width: '60ch', whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}} className="font-normal font-sans text-content-color">{content}</p>
      </div>
      <div className="creation-date h-full w-48 grid content-center text-right">
        <p className="font-medium text-date-created-color text-sm tracking-wide font-sans">{getDate(date_created)} ago</p>
      </div>
      <div className="next-button h-full w-8">
        <button className="h-full w-full ">
          <ChevronRightIcon className="text-arrow-color" />
        </button>
      </div>
    </div>
  );
};

export { TestimonialItem };
