import React from 'react'

const PaginationNumber = (props:{pageNumber: number}) => {
  return ( 
      props.pageNumber === 0 ? 
      <button
        className="dot border-none"
      >
        ...
      </button>
      :
      <button>
        {props.pageNumber}
      </button>
    
  )
}

export default PaginationNumber