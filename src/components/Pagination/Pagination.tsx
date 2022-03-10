import { useDispatch, useSelector } from "react-redux";
import { changePageByOne } from "../../Store/ApiUrl";
import PaginationNumber from "./PaginationNumberButton";

const getPageNumbers = (totalPage:number):number[]=> {
  const res:number[] =[]

  for (let i = 1; i <= Math.min(totalPage,3); i++) {
    res.push(i)
  }

  if(totalPage > 3) {
    res.push(0)
    for (let i = Math.max(totalPage-2,4); i <= totalPage; i++) {
      res.push(i)
    }
  }
  return res
}

const Pagination = () => {
  const { page, totalPage } = useSelector((state: any) => state.testimonial);
  const dispatch = useDispatch();
  const pageNumbers: any[] = getPageNumbers(totalPage);

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
            className="h-5 w-5 my-3 ml-4"
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
          <p className="font-Poppins text-sm font-semibold w-20 my-3">Previous</p>
        </button>
      </div>

      <div className="page-number w-4/6 grid items-center flex justify-center">
        <div className="inner-page-number flex flex-row space-x-4">
        {
          pageNumbers.map((item)=> {
            return (
              <PaginationNumber key={item} pageNumber={parseInt(item)}/>
              )
            })
          }
        </div>
      </div>

      <div className="previous-btn h-full w-1/6 grid items-center flex justify-center">
        <button
          className="previous h-2/4 w-24 flex flex-row rounded-md shadow shadow-buttonRB disabled:bg-button-disabled disabled:cursor-not-allowed disabled:shadow-none"
          onClick={() => dispatch(changePageByOne(1))}
          disabled={totalPage === page || totalPage === 0}
        >
          <p className="font-Poppins text-sm font-semibold w-14 my-3 ml-2">
            Next
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 my-3 mr-4"
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
