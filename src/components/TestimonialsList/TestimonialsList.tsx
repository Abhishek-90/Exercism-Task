import React, { useEffect, useState } from "react";
import { Filters } from "../FilterBar/Filters";
import { Pagination } from "../Pagination/Pagination";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";
import { ITestimonials } from "../../interfaces/testimonials";
import { getTestimonials } from "./GetTestimonials";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPage } from '../../Store/ApiUrl'

const TestimonialsList = () => {

  const [testimonials, setTestimonials] = useState<ITestimonials[]>([])
  const { page, order, track } = useSelector((state: any) => state.testimonial)
  const dispatch = useDispatch()

  useEffect(() => {
    const getTestimonialsCaller = async () => {
      const res = await getTestimonials(page,order,track)
      dispatch(getTotalPage(res.testimonials.pagination.total_pages))
      setTestimonials(res.testimonials.results)
    }

    getTestimonialsCaller()
  },[page, order, track])

  return (
    <div className="testimonials-list rounded-lg my-4 w-screen border-b-2 border-solid border-slate-200 shadow-3xl">
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
