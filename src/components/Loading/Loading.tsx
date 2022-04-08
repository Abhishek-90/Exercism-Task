import React from 'react'
import loading from './loading.gif'
const Loading = () => {
  console.log("Loaded")
  return (
    <div className="w-full flex justify-center">
      <img className="" src={loading} alt="loading"/>
    </div>
  )
}

export default Loading