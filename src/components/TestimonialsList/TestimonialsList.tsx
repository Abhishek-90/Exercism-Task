import React from "react";
import { testimonials } from "../../constants/StaticTestimonials";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";

const TestimonialsList = () => {
  return (
    <div className="testimonials-list rounded-lg my-16 w-11/12 shadow-2xl">
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
            mentor_name={item.mentor.handle}
          />
        );
      })}
    </div>
  );
};

export { TestimonialsList };
