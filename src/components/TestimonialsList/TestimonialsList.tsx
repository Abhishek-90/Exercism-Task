import React, { useEffect, useState } from "react";
import { Filters } from "../FilterBar/Filters";
import { Pagination } from "../Pagination/Pagination";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";
import { ITestimonials } from "../../interfaces/testimonials";
import { getTestimonials } from "./GetTestimonials";
import { useSelector } from "react-redux";

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([])
  const { page, order } = useSelector((state: any) => state.testimonial)
  
  useEffect(() => {
    const getTestimonialsCaller = async () => {
      const res = await getTestimonials(page,order)
      setTestimonials(res.testimonials.results)
    }

    getTestimonialsCaller()
  },[page, order])

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
