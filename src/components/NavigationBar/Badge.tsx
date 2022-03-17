import React from 'react'

interface IBadge { 
  leftMargin:string,
  padding: string,
  radius: string,
  content?:string
}

const Badge = (props:IBadge) => {
  return (
    <div className={`absolute p-${props.padding} ml-${props.leftMargin} bg-white rounded-full mb-4`}>
      <div className={`rounded-full bg-dot h-${props.radius} w-${props.radius}`}><p className="text-xs text-white ml-1 font-Poppins">{props.content}</p></div>
    </div>
  )
}

export { Badge }