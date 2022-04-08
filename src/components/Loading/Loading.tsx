import React from 'react'
import loading from './loading.gif'
const Loading = () => {
  console.log("Loaded")
  return (
    <>
      <img src={loading} alt="loading"/>
    </>
  )
}

export default Loading