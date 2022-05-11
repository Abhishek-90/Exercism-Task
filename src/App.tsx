import React from "react";
import "./App.css";
import { Filters } from "./components/FilterBar/Filters";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Pagination } from "./components/Pagination/Pagination";
import { StaticContent } from "./components/StaticComponent/StaticContent";
import { TestimonialsList } from "./components/TestimonialsList/TestimonialsList";

function App() {

  return (
    <>
      <NavigationBar />
      <StaticContent />
      <div className="flex flex-col justify-center px-6">
        <div className="testimonials-list rounded-lg shadow-l mt-8 mb-16">
          <Filters />
          <TestimonialsList />
          <Pagination />
        </div>
      </div>
    </>
  );
}

export default App;
