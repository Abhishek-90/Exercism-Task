import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageByPayload } from '../../Store/ApiUrl';

const PaginationNumber = ({ pageNumber}:{pageNumber: number|string}) => {
  const { page } = useSelector((state:any) => state.testimonial)
  const dispatch = useDispatch();

  return ( 
      pageNumber === '...' ? 
      <p
        className="dot border-none px-2 mt-2"
      >
        {pageNumber}
      </p>
      :
      <button
        className={ `font-semibold text-sm py-2 px-3.5 rounded-lg ${page !== pageNumber ? 'border-solid  border text-button-text  border-page-button border-2 hover:bg-focus-button-bg': 'text-selected-button-text border-2 border-page-button-focus border-2 bg-focus-button-bg'}`}
        onClick={() => dispatch(changePageByPayload(pageNumber))}
      >
        {pageNumber}
      </button>
    
  )
}

export default PaginationNumber