import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageByOne } from "../../Store/ApiUrl";
import PaginationNumber from "./PaginationNumberButton";

const DOTS: string = '...'

const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const getPaginationNumber = (
  totalPage:number,
  siblingCount:number = 1,
  page:number
) => {

    if(totalPage <= 7) {
      return range(1,totalPage)
    }

    if(page <= 3 || page >= totalPage-2) {
      return [...range(1,3), DOTS, ...range(totalPage-2, totalPage)]
    }

    return [1,DOTS,...range(page-1,page+3),DOTS,totalPage]

};

const Pagination = () => {
  const { page, totalPage } = useSelector((state: any) => state.testimonial);
  const dispatch = useDispatch();
  const [pageNumbers, setPageNumbers]= useState<(number|string)[]>(getPaginationNumber(totalPage,1,page));

  useEffect(()=> {
    if(!pageNumbers.includes(page)) {
      setPageNumbers(getPaginationNumber(totalPage,1,page))
    }
  }, [page])

  useEffect(() => {
    setPageNumbers(getPaginationNumber(totalPage,1,page))
  }, [totalPage])

  return (
    <div className="h-20 flex flex-row border-t border-solid border-t-2">
      <div className="previous-btn h-full w-1/6 grid items-center flex justify-center">
        <button
          className="previous h-1/2 w-32 flex flex-row rounded-md shadow shadow-buttonRB disabled:bg-button-disabled disabled:cursor-not-allowed disabled:shadow-none"
          onClick={() => dispatch(changePageByOne(-1))}
          disabled={page === 1 || totalPage === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-2 ml-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <p className="font-Poppins text-sm font-semibold w-20 my-2">
            Previous
          </p>
        </button>
      </div>

      <div className="page-number w-4/6 grid items-center flex justify-center">
        <div className="inner-page-number flex flex-row space-x-4">
          {pageNumbers.map((item, index) => {
            return <PaginationNumber keyValue={index} pageNumber={item} />;
          })}
        </div>
      </div>

      <div className="previous-btn h-full w-1/6 grid items-center flex justify-center">
        <button
          className="previous h-2/4 w-24 flex flex-row rounded-md shadow shadow-buttonRB disabled:bg-button-disabled disabled:cursor-not-allowed disabled:shadow-none"
          onClick={() => dispatch(changePageByOne(1))}
          disabled={totalPage === page || totalPage === 0}
        >
          <p className="font-Poppins text-sm font-semibold w-14 my-2 ml-2">
            Next
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-2 mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Pagination };
