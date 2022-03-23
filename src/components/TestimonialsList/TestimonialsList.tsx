import React, { useEffect, useState } from "react";
import { Filters } from "../FilterBar/Filters";
import { Pagination } from "../Pagination/Pagination";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";
import { ITestimonials } from "../../interfaces/testimonials";
import { getTestimonials } from "./GetTestimonials";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPage } from '../../Store/ApiUrl'
import NoTestimonials from "../StaticComponent/NoTestimonials";

const doublePages = (totalCount: number) : number => {
  return (totalCount/10) + (totalCount%10 === 0 ? 0 : 1)
}

const getTenTestimonials = (testimonials:ITestimonials[], page:number) : ITestimonials[] => {
  if(page%2 === 1) {
    return testimonials.slice(0,Math.min(10,testimonials.length))
  }

  return testimonials.slice(10,Math.min(20,testimonials.length))
}

const TestimonialsList = () => {

  const [testimonials, setTestimonials] = useState<ITestimonials[]>([])
  const { page, order, track, exercise } = useSelector((state: any) => state.testimonial)
  const dispatch = useDispatch()

  useEffect(() => {
    const getTestimonialsCaller = async () => {
      const res = await getTestimonials(page,order,track, exercise)
      const finalTestimonials = getTenTestimonials(res.testimonials.results,page)
      dispatch(getTotalPage(doublePages(res.testimonials.pagination.total_count)))
      setTestimonials(finalTestimonials)
    }

    getTestimonialsCaller()
  },[page, order, track, exercise])

  return (
    <div className="testimonials-list rounded-lg my-4 w-screen shadow-3xl mt-8 mb-16">
      <Filters/>
      {testimonials.length === 0 ? 
        <NoTestimonials/>
      :
      testimonials.map((item) => {
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
