import React, { useEffect, useState } from "react";
import { TestimonialItem } from "../TestimonialsListItem/testimonialItem";
import { ITestimonials } from "../../interfaces/testimonials";
import { getTestimonials } from "./GetTestimonials";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPage, setIsLoading } from "../../Store/ApiUrl";
import NoTestimonials from "../StaticComponent/NoTestimonials";
import Loading from "../Loading/Loading";

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState<ITestimonials[]>([]);
  const { page, order, track, exercise, isLoading } = useSelector(
    (state: any) => state.testimonial
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getTestimonialsCaller = async () => {
      dispatch(setIsLoading(true));
      const res = await getTestimonials(page, order, track, exercise);
      dispatch(getTotalPage(res.testimonials.pagination.total_pages));
      setTestimonials(res.testimonials.results);
      dispatch(setIsLoading(false));
    };

    getTestimonialsCaller();
  }, [page, order, track, exercise]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && testimonials.length === 0 && <NoTestimonials />}
      {!isLoading &&
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
    </>
  );
};

export { TestimonialsList };
