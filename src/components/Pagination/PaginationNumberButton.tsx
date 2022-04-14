import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageByPayload } from '../../Store/ApiUrl';

const PaginationNumber = ({ pageNumber, keyValue }:{pageNumber: number|string, keyValue:number}) => {
  const { page } = useSelector((state:any) => state.testimonial)
  const dispatch = useDispatch();

  return ( 
      pageNumber === '...' ? 
      <button
        className="dot border-none px-2"
      >
        {pageNumber}
      </button>
      :
      <button
        className={page !== pageNumber ? 'font-Poppins font-semibold text-sm text-button-text py-2 px-3.5 border border-solid rounded-lg border-page-button border-2':'font-Poppins font-semibold text-sm text-selected-button-text py-2 px-3.5 border-2 border-solid rounded-lg border-page-button-focus border-2 bg-focus-button-bg'}
        onClick={() => dispatch(changePageByPayload(pageNumber))}
      >
        {pageNumber}
      </button>
    
  )
}

export default PaginationNumber