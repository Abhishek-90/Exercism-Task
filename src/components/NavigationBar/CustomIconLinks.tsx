import React from "react";

interface ICustomIconLinks {
  src: string;
  text: string;
  alt: string;
}

const CustomIconsLinks = (props: ICustomIconLinks) => {
  return (
    <div className="dashboard-link grid items-center">
      <a className="flex flex-row space-x-4 ml-4" href="/">
        <img className="h-6 w-6 hue-rotate-180" src={props.src} alt={props.alt} />
        <p className="font-Poppins font-semibold text-navbar-text">
          {props.text}
        </p>
      </a>
    </div>
  );
};

export { CustomIconsLinks };
