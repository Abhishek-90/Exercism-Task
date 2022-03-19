import React from 'react'

interface IBadge { 
  leftMargin:number,
  padding: number,
  radius: number,
  content?:string,
  bottomMargin?:number
}

const Badge = (props:IBadge) => {
  return (
    <div className={`absolute p-${props.padding} ml-${props.leftMargin} bg-white rounded-full mb-${props.bottomMargin}`}>
      <div className={`rounded-full bg-dot h-${props.radius} w-${props.radius}`}><p className="text-xs text-white ml-1 font-Poppins">{props.content}</p></div>
    </div>
  )
}

export { Badge }