import React from 'react'
import { useSelector } from 'react-redux'

const PaginationNumber = (props:{pageNumber: number}) => {
  const { page } = useSelector((state:any) => state.testimonial)
  return ( 
      props.pageNumber === 0 ? 
      <button
        className="dot border-none"
      >
        ...
      </button>
      :
      <button
        className={page !== props.pageNumber ? 'font-Poppins py-2 px-4 border border-solid rounded-lg border-page-button border-2':'font-Poppins py-2 px-4 border border-solid rounded-lg border-page-button-focus border-2 bg-focus-button-bg'}
      >
        {props.pageNumber}
      </button>
    
  )
}

export default PaginationNumber