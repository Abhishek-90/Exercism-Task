import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { getDate } from "./CalculateDate";
interface ITestimonials {
  track_icon_url: string;
  avatar_icon_url: string;
  content: string;
  reviewer_name: string;
  track_name: string;
  exercise_title: string;
  date_created: string;
}

const TestimonialItem = ({
  track_icon_url,
  avatar_icon_url,
  content,
  reviewer_name,
  track_name,
  date_created,
  exercise_title,
}: ITestimonials) => {
  return (
    <div className="flex flex-row h-16  hover:bg-hover border-b-2 border-solid border-slate-100">
      <div className="track-icon ml-4 mr-6 w-15 h-full grid content-center">
        <img className="w-8 h-8" src={track_icon_url} alt="Track_icon" />
      </div>
      <div className="avatar w-15 mr-6 h-full grid content-center">
        <img
          className="rounded-full w-12 h-12"
          src={avatar_icon_url}
          alt="avatar"
        />
      </div>
      <div className="reviewer w-4/12 h-full flex flex-col grid content-center">
        <p className="font-semibold font-Poppins text-reviewer-name-color">
          {reviewer_name}
        </p>
        <p className="font-normal text-sm font-Poppins text-track-color">
          on {exercise_title} in {track_name}
        </p>
      </div>
      <div className="content w-5/12 h-full grid content-center">
        <p
          style={{
            width: "50ch",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="font-normal font-Poppins text-content-color"
        >
          {content}
        </p>
      </div>
      <div className="creation-date h-full w-36 grid content-center text-right">
        <p className="text-sm text-date-created-color font-Poppins font-semibold mr-6">
          {getDate(date_created)} ago
        </p>
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
