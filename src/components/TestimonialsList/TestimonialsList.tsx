import React, { useEffect, useState } from "react";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";
import { ITestimonials } from "../../interfaces/testimonials";
import { getTestimonials } from "./GetTestimonials";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPage, changeLoading } from '../../Store/ApiUrl'
import NoTestimonials from "../StaticComponent/NoTestimonials";

const TestimonialsList = () => {

  const [testimonials, setTestimonials] = useState<ITestimonials[]>([])
  const { page, order, track, exercise } = useSelector((state: any) => state.testimonial)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeLoading(true))
    const getTestimonialsCaller = async () => {
      const res = await getTestimonials(page,order,track, exercise)
      dispatch(getTotalPage(res.testimonials.pagination.total_pages))
      setTestimonials(res.testimonials.results)
    }

    getTestimonialsCaller()
    dispatch(changeLoading(false))
  },[page, order, track, exercise])

  return (
      testimonials.length === 0 ? 
        <NoTestimonials/>
      :
      <>
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
      </>
  );
};

export { TestimonialsList };
