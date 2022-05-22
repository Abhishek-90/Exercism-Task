import { Filters } from "./components/FilterBar/Filters";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Pagination } from "./components/Pagination/Pagination";
import { StaticContent } from "./components/StaticComponent/StaticContent";
import { TestimonialsList } from "./components/TestimonialsList/TestimonialsList";

function App() {

  return (
    <div className="w-full">
      <div className="flex justify-center w-full">
      <NavigationBar />
      </div>
      <StaticContent />
      <div className="flex justify-center px-6 ">
        <div className="flex flex-col testimonials-list rounded-lg shadow-l mt-8 mb-16 w-full max-w-container-max">
          <Filters />
          <TestimonialsList />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
