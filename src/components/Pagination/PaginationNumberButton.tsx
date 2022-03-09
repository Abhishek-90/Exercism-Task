import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePageByPayload } from '../../Store/ApiUrl';

const PaginationNumber = (props:{pageNumber: number}) => {
  const { page } = useSelector((state:any) => state.testimonial)
  const dispatch = useDispatch();

  return ( 
      props.pageNumber === 0 ? 
      <button
        className="dot border-none px-2"
      >
        ...
      </button>
      :
      <button
        className={page !== props.pageNumber ? 'font-Poppins text-sm py-2 px-4 border border-solid rounded-lg border-page-button border-2':'font-Poppins text-sm py-2 px-4 border border-solid rounded-lg border-page-button-focus border-2 bg-focus-button-bg'}
        onClick={() => dispatch(changePageByPayload(props.pageNumber))}
      >
        {props.pageNumber}
      </button>
    
  )
}

export default PaginationNumber