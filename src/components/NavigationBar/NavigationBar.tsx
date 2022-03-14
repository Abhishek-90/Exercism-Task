import React from "react";
import { CustomIconsLinks } from "./CustomIconLinks";

const NavigationBar = () => {
  return (
    <div className="navigation w-full h-16 flex flex-row border-b-2 border-solid border-navigation-border ">
      <div className="right-size links flex flex-row space-x-6">
        <div className="exercism-logo ml-8 grid items-center">
          <a href="/">
            <img
              className="h-1/2 w-36"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"
              alt="exercism-logo"
            />
          </a>
        </div>
        <div className="dashboard-link grid items-center ml-2">
          <a className="flex flex-row space-x-2 ml-4" href="/">
            <img
              className="h-8 w-8"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/dashboard-d6d946e5b42a4aef577066eca7b695641e21130a.svg"
              alt="mentor Logo"
            />
            <p className="font-Poppins font-semibold mt-1">Dashboard</p>
          </a>
        </div>
        <div className="dashboard-link grid items-center ">
          <CustomIconsLinks
            src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/tracks-2e780b460e113a9b07ce4446c988a31c40547b00.svg"
            text="Tracks"
            alt="tracks-logo"
          />
        </div>
        <div className="dashboard-link grid items-center">
          <CustomIconsLinks
            src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/mentoring-4d1e266458e8e3293b94679b92ccea4aa2cdb58b.svg"
            text="Mentoring"
            alt="mentor-logo"
          />
        </div>
        <div className="dashboard-link grid items-center">
          <CustomIconsLinks
            src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/contribute-269d926a07a0b503203914911e0a5704469ae8c4.svg"
            text="Contribute"
            alt="contribute-logo"
          />
        </div>
      </div>

      {/* {----------------------------------------------------------------------------------------------------------------------------} */}

      <div className="right-size buttons flex flex-row space-x-12">
        <div className="random-picture  grid items-center ml-48 cursor-pointer">
          <img
            className="h-8 w-10 rounded-full"
            src={require("../../constants/NavbarMessage.jpg")}
            alt="random"
          />
        </div>
        <div className="random-picture  grid items-center cursor-pointer">
          <img
            className="h-8 w-10 rounded-full"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDQuNzMyYTIgMiAwIDAgMSAyIDBMMjAuMzkyIDlhMiAyIDAgMCAxIDEgMS43MzJ2OC41MzZhMiAyIDAgMCAxLTEgMS43MzJMMTMgMjUuMjY4YTIgMiAwIDAgMS0yIDBMMy42MDggMjFhMiAyIDAgMCAxLTEtMS43MzJ2LTguNTM2YTIgMiAwIDAgMSAxLTEuNzMyTDExIDQuNzMyWiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjciIHI9IjUuNSIgZmlsbD0iI0VCNTc1NyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMiIgeTE9IjMiIHgyPSIxMiIgeTI9IjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzIwRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlFMDBGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
            alt="random"
          />
        </div>
        <div className="notification-picture h-8 w-8 my-4  shadow drop-shadow-2xl grid items-center cursor-pointer">
          <img
            className="h-6 w-8"
            src="https://d24y9kuxp2d7l2.cloudfront.net/icons/notifications-2e6c2d672e24a543905250aefc304f77e88718ff.svg"
            alt="Notification"
          />
        </div>
        <div className="reputation-picture w-24 flex flex-row content-center my-4 rounded-r-full rounded-l-full ring-8 ring-violet-700 bg-black cursor-pointer">
          <img
            className="h-6 w-6 ml-3 mt-1 filter invert"
            src="https://d24y9kuxp2d7l2.cloudfront.net/icons/reputation-5b5938e36519908ac61075db3b9826307a0f907a.svg"
            alt="reputation"
          />
          <p className="font-Poppins ml-1 mt-1 text-white">300K</p>
        </div>
        <div className="profile-picture  grid items-center cursor-pointer">
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
  );
};

export { NavigationBar };
