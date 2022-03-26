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
    <div className="flex flex-row justify-around h-16  hover:bg-hover border-b-2 border-solid w-full">
      <div className="track-icon ml-4 w-[2rem] h-full grid content-center ">
        <img className="w-8 h-8" src={track_icon_url} alt="Track_icon" />
      </div>
      <div className="avatar w-[3.2rem] h-full grid content-center">
        <img
          className="rounded-full w-full h-12"
          src={avatar_icon_url}
          alt="avatar"
        />
      </div>
      <div className="reviewer w-3/12 h-full flex flex-col grid content-center">
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
      <div className="creation-date h-full w-[10rem] grid content-center text-right">
        <p className="text-sm text-date-created-color font-Poppins font-semibold mr-[1.2rem]">
          {getDate(date_created)} ago
        </p>
      </div>
      <div className="next-button h-full w-[2rem] grid items-center flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[1.8rem] w-[1.8rem] text-arrow-color"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export { TestimonialItem };
