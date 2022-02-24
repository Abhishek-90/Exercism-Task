import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";

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
    <div className="flex flex-row h-16 space-x-6">
      <div className="track-icon ml-4 w-15 h-full grid content-center">
        <img className="w-10 h-10" src={track_icon_url} alt="Python Track" />
      </div>
      <div className="avatar w-15 h-full grid content-center">
        <img className="rounded-full w-12 h-12" src={avatar_icon_url} alt="avatar" />
      </div>
      <div className="reviewer w-80 h-full flex flex-col grid content-center">
        <p className="font-semibold font-sans">{reviewer_name}</p>
        <p className="font-normal font-sans">on {reviewer_name} in {track_name}</p>
      </div>
      <div className="content w-1/2 h-full grid content-center">
        <p className="font-normal font-sans antialiased">{content}</p>
      </div>
      <div className="creation-date h-full w-40 grid content-center">
        <p className="font-normal font-semibold font-sans">{date_created}</p>
      </div>
      <div className="next-button h-full w-8">
        <button className="h-full w-full">
          <ChevronRightIcon className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export { TestimonialItem };
