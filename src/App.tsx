import React from "react";
import "./App.css";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import { StaticContent } from "./components/StaticComponent/StaticContent";
import { TestimonialsList } from "./components/TestimonialsList/TestimonialsList";

function App() {
  return (
    <>
      <NavigationBar />
      <StaticContent/>
      <div className="flex justify-center">
        <TestimonialsList />
      </div>
    </>
  );
}

export default App;
