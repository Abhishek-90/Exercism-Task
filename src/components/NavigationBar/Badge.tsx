import React from 'react'

interface IBadge { 
  leftMargin:string,
  padding: string,
  radius: string,
}

const Badge = (props:IBadge) => {
  return (
    <div className={`absolute p-${props.padding} ml-${props.leftMargin} bg-white rounded-full mb-4`}>
      <div className={`rounded-full bg-dot h-${props.radius} w-${props.radius}`}></div>
    </div>
  )
}

export { Badge }