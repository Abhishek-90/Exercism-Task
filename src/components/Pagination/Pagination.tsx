import { useDispatch, useSelector } from "react-redux";
import { changePageByOne } from "../../Store/ApiUrl";
import PaginationNumber from "./PaginationNumberButton";

const range = (start:number, end:number) => {
  let length = end - start + 1;
  
  return Array.from({ length }, (_, idx) => idx + start);
};

const getPageNumbers = (
  totalPage: number,
  siblings: number,
  page: number
): number[] => {
  const res: number[] = [];

  const totalPageNumbers = siblings + 5;

  if (totalPageNumbers >= totalPage) {
    for (let i = 1; i <= totalPage; i++) {
      res.push(i);
    }
    return res;
  }

  /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
  const leftSiblingIndex = Math.max(page - siblings, 1);
  const rightSiblingIndex = Math.min(page + siblings, totalPage);

  /*
        We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
      */
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPage - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPage;

  /*
        Case 2: No left dots to show, but rights dots to be shown
      */
  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftItemCount = 3 + 2 * siblings;
    let leftRange = range(1, leftItemCount);

    return [...leftRange, 0, totalPage];
  }

  /*
        Case 3: No right dots to show, but left dots to be shown
      */
  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightItemCount = 3 + 2 * siblings;
    let rightRange = range(totalPage - rightItemCount + 1, totalPage);
    return [firstPageIndex, 0, ...rightRange];
  }

  /*
        Case 4: Both left and right dots to be shown
      */
  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, 0, ...middleRange, 0, lastPageIndex];
  }

  return res;
};

const Pagination = () => {
  const { page, totalPage } = useSelector((state: any) => state.testimonial);
  const dispatch = useDispatch();
  const pageNumbers: any[] = getPageNumbers(totalPage, 1, page);

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
          {pageNumbers.map((item) => {
            return <PaginationNumber key={item} pageNumber={parseInt(item)} />;
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
