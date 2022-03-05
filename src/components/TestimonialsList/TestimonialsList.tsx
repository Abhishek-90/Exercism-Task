import React, { useEffect } from "react";
// import { testimonials } from "../../constants/StaticTestimonials";
import { Filters } from "../FilterBar/Filters";
import { Pagination } from "../Pagination/Pagination";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";
import { ITestimonials } from "../../interfaces/testimonials";
import { getTestimonials } from "./GetTestimonials";
// import axios from "axios";
// import { testimonialsEndpoint } from "../../constants/ApiEndpoint";

const TestimonialsList = () => {
  const testimonials:ITestimonials[] = []

  useEffect(() => {
    console.log(getTestimonials())
  })

  return (
    <div className="testimonials-list rounded-lg my-4 w-11/12 border-b-2 border-solid border-slate-200 shadow-3xl">
      <Filters/>
      {testimonials.map((item) => {
        return (
          <TestimonialItem
            key={item.id}
            track_icon_url={item.track.icon_url}
            avatar_icon_url={item.mentor.avatar_url}
            content={item.content}
            reviewer_name={item.mentor.handle}
            track_name={item.track.title}
            date_created={item.created_at}
            exercise_title={item.exercise.title}
          />
        );
      })}
      <Pagination/>
    </div>
  );
};

export { TestimonialsList };
