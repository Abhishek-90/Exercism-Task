import React from "react";

const NavigationBar = () => {
  return (
    <div className="navigation w-full h-16 flex flex-row border-b-2 border-solid border-navigation-border space-x-6">
      <div className="right-size links flex flex-row">
        <div className="exercism-logo ml-8 grid items-center">
          <a href="/">
            <img
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"
              alt="exercism-logo"
            />
          </a>
        </div>
        <div className="dashboard-link grid items-center ml-2">
          <a className="flex flex-row space-x-2 ml-4" href="/">
            <img
              className="h-6 w-6"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/dashboard-d6d946e5b42a4aef577066eca7b695641e21130a.svg"
              alt="mentor Logo"
            />
            <p className="font-Poppins font-semibold">Dashboard</p>
          </a>
        </div>
        <div className="dashboard-link grid items-center">
          <a className="flex flex-row space-x-2 ml-4" href="/">
            <img
              className="h-6 w-6"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/tracks-2e780b460e113a9b07ce4446c988a31c40547b00.svg"
              alt="mentor Logo"
            />
            <p className="font-Poppins font-semibold text-navbar-text">Tracks</p>
          </a>
        </div>
        <div className="dashboard-link grid items-center">
          <a className="flex flex-row space-x-2 ml-4" href="/">
            <img
              className="h-6 w-6"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/mentoring-4d1e266458e8e3293b94679b92ccea4aa2cdb58b.svg"
              alt="mentor Logo"
            />
            <p className="font-Poppins font-semibold text-navbar-text">Mentoring</p>
          </a>
        </div>
        <div className="dashboard-link grid items-center">
          <a className="flex flex-row space-x-4 ml-4" href="/">
            <img
              className="h-6 w-6 fill-text-navbar-text"
              src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/contribute-269d926a07a0b503203914911e0a5704469ae8c4.svg"
              alt="contribute-logo"
            />
            <p className="font-Poppins font-semibold text-navbar-text">Contribute</p>
          </a>
        </div>
      </div>
      <div className="right-size buttons flex flex-row space-x-8">
        <div className="random-picture  grid items-center">
          <img
            className="h-6 w-8 rounded-full"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExIDQuNzMyYTIgMiAwIDAgMSAyIDBMMjAuMzkyIDlhMiAyIDAgMCAxIDEgMS43MzJ2OC41MzZhMiAyIDAgMCAxLTEgMS43MzJMMTMgMjUuMjY4YTIgMiAwIDAgMS0yIDBMMy42MDggMjFhMiAyIDAgMCAxLTEtMS43MzJ2LTguNTM2YTIgMiAwIDAgMSAxLTEuNzMyTDExIDQuNzMyWiIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSJ1cmwoI2EpIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjciIHI9IjUuNSIgZmlsbD0iI0VCNTc1NyIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjMiLz48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImEiIHgxPSIxMiIgeTE9IjMiIHgyPSIxMiIgeTI9IjI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iIzIwRiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzlFMDBGRiIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=="
            alt="random"
          />
        </div>
        <div className="notification-picture h-8 w-8 my-4  shadow drop-shadow-2xl grid items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>
        <div className="notification-picture">
          <img
            className="h-6 w-8 fill-amber-600"
            src="https://d24y9kuxp2d7l2.cloudfront.net/icons/reputation-5b5938e36519908ac61075db3b9826307a0f907a.svg"
            alt="Notification"
          />
        </div>
        <div className="profile-picture  grid items-center">
          <img
            className="h-12 w-12 rounded-full"
            src="https://avatars.githubusercontent.com/u/43419831?v=4"
            alt="profile"
          />
        </div>
        <div className="menu-button grid items-center">
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
