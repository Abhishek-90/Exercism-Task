import React from "react";

interface ICustomIconLinks {
  src: string;
  text: string;
  alt: string;
  address:string
}

const CustomIconsLinks = ({src,text,alt,address}: ICustomIconLinks) => {
  return (
    <div className="dashboard-link grid items-center ">
      <a className="flex flex-row space-x-4 ml-4" href={address}>
        <img className="h-6 w-6" src={src} alt={alt} />
        <p className="font-Poppins font-semibold text-navbar-text">
          {text}
        </p>
      </a>
    </div>
  );
};

export { CustomIconsLinks };
