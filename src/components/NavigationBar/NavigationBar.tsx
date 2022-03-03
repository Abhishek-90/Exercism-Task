import React from 'react'

const NavigationBar = () => {
  return (
    <div className="navigation w-full h-16 flex flex-row border-b-2 border-solid border-navigation-border">
      <div className="exercism-logo ml-8 grid items-center">
      <a href="/"><img src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg" alt="exercism-logo"/></a>
      </div>
    </div>
  )
}

export default NavigationBar