import React from "react";
import { CustomIconsLinks } from "./CustomIconLinks";

const NavigationBar = () => {
  return (
    <div className="navigation w-full h-[4rem] flex flex-row border-b-2 border-solid border-navigation-border ">
      <div className="right-size links flex flex-row space-x-2 w-7/12">
        <div className="exercism-logo ml-8 grid items-center">
          <a href="/">
            <img
              className="h-1/2 w-[8rem]"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"
              alt="exercism-logo"
            />
          </a>
        </div>
        <div className="dashboard-link grid items-center ml-2">
          <a className="flex flex-row h-full space-x-2 ml-4" href="/">
            <div className="wholeLogo h-full w-14 flex justify-center grid content-center">
              <div className="absolute mt-9">
                <img
                  src={require("../../constants/polygon.png")}
                  alt="polygon"
                />
              </div>
              <div className="absolute ml-11 mt-3">
                <img
                  src={require("../../constants/polygon.png")}
                  alt="polygon"
                />
              </div>
              <div className="absolute ml-11 mt-12">
                <img
                  src={require("../../constants/ellipse_23.png")}
                  alt="right-bottom"
                />
              </div>
              <div className="absolute ml-3 mt-[51px]">
                <img
                  src={require("../../constants/ellipse_25.png")}
                  alt="left-bottom"
                />
              </div>
              <div className="absolute ml-1 mt-5">
                <img
                  src={require("../../constants/ellipse_25.png")}
                  alt="left"
                />
              </div>
              <div className="absolute ml-5 mt-1.5">
                <img
                  src={require("../../constants/polygon_19.png")}
                  alt="right-bottom"
                />
              </div>

              <div className="dashboard-img grid justify-center flex content-center w-10 h-10 mt-1 bg-gradient-to-b from-gradient-start to-gradient-end rounded-full shadow shadow-dashboard">
                <img
                  className="h-6 w-6 invert"
                  src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/dashboard-d6d946e5b42a4aef577066eca7b695641e21130a.svg"
                  alt="mentor Logo"
                />
              </div>
            </div>
            <p className="font-Poppins font-semibold mt-5">Dashboard</p>
          </a>
        </div>
        <CustomIconsLinks
          src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/tracks-2e780b460e113a9b07ce4446c988a31c40547b00.svg"
          text="Tracks"
          alt="tracks-logo"
        />
        <CustomIconsLinks
          src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/mentoring-4d1e266458e8e3293b94679b92ccea4aa2cdb58b.svg"
          text="Mentoring"
          alt="mentor-logo"
        />
        <CustomIconsLinks
          src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/contribute-269d926a07a0b503203914911e0a5704469ae8c4.svg"
          text="Contribute"
          alt="contribute-logo"
        />
      </div>

      {/* {----------------------------------------------------------------------------------------------------------------------------} */}
      <div className="w-5/12 h-full">

      <div className="float-right h-full justify-between">
        <div className="flex space-x-7 ">
          <div className="random-picture  grid items-center cursor-pointer mt-1">
            <img
              className="h-8 w-10"
              src={require("../../constants/NavbarMessage.jpg")}
              alt="random"
            />
          </div>
          <div className="random-picture  grid items-center cursor-pointer mt-1">
            <img
              className="h-8 w-10 rounded-full"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDQuNzMyYTIgMiAwIDAgMSAyIDBMMjAuMzkyIDlhMiAyIDAgMCAxIDEgMS43MzJ2OC41MzZhMiAyIDAgMCAxLTEgMS43MzJMMTMgMjUuMjY4YTIgMiAwIDAgMS0yIDBMMy42MDggMjFhMiAyIDAgMCAxLTEtMS43MzJ2LTguNTM2YTIgMiAwIDAgMSAxLTEuNzMyTDExIDQuNzMyWiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjciIHI9IjUuNSIgZmlsbD0iI0VCNTc1NyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMiIgeTE9IjMiIHgyPSIxMiIgeTI9IjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzIwRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlFMDBGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
              alt="random"
            />
          </div>
          <div className="notification-picture h-9 w-12 mt-3.5 shadow shadow-notification grid items-center flex justify-center cursor-pointer rounded-md bg-[#FFF4E3]">
            <svg
              width="23"
              height="23"
              viewBox="0 0 19 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75 20.0312C7.97828 20.8089 8.69175 21.343 9.50219 21.343C10.3126 21.343 11.0261 20.8089 11.2544 20.0312"
                stroke="#E48900"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 3.625V1.65625"
                stroke="#E48900"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.5 3.625C13.1244 3.625 16.0625 6.56313 16.0625 10.1875C16.0625 16.3528 17.375 17.4062 17.375 17.4062H1.625C1.625 17.4062 2.9375 15.7298 2.9375 10.1875C2.9375 6.56313 5.87563 3.625 9.5 3.625Z"
                stroke="#E48900"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute ml-8 bg-dot h-6 w-6 rounded-full mb-8 flex justify-center grid items-center">
              <p className="font-Poppins text-white text-sm">2</p>
            </div>
          </div>
          <div className="reputation-picture w-24 flex flex-row content-center my-2 cursor-pointer">
            <img
              className="h-9 w-24 ml-3 mt-2"
              src={require("../../constants/Reputation.jpg")}
              alt="reputation"
            />
            <div className="absolute p-1 ml-[94px] bg-white rounded-full mb-12">
              <div className="rounded-full bg-dot h-3 w-3"></div>
            </div>
          </div>
          <div className="profile-picture grid items-center cursor-pointer">
            <img
              className="h-12 w-12 rounded-full"
              src="https://avatars.githubusercontent.com/u/43419831?v=4"
              alt="profile"
            />
          </div>
          <div className="menu-button grid items-center cursor-pointer">
            <img
              className="h-6 w-4"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/more-vertical-371ef6f2314bb5dbe5d3892a7ee098c6ebc3cf30.svg"
              alt="menu"
            />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export { NavigationBar };
