import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Filters } from "./components/FilterBar/Filters";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Pagination } from "./components/Pagination/Pagination";
import { StaticContent } from "./components/StaticComponent/StaticContent";
import { TestimonialsList } from "./components/TestimonialsList/TestimonialsList";

function App() {
  const { isLoading } = useSelector((state: any) => state.testimonial)

  return (
    <>
      <NavigationBar />
      <StaticContent />
      <div className="flex flex-col justify-center px-4">
        <div className="testimonials-list rounded-lg shadow-3xl mt-8 mb-16">
          <Filters />
          {isLoading ? <TestimonialsList />:<TestimonialsList />}
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default App;
