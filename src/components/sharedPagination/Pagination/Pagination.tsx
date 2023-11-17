
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';


import ReactPaginate from 'react-paginate';
// @ts-expect-error TS(6142): Module '../IconArrow/IconArrow' was resolved to 'C... Remove this comment to see the full error message
import { IconArrow } from '../IconArrow/IconArrow';
// @ts-expect-error TS(2307): Cannot find module './Pagination.module.css' or it... Remove this comment to see the full error message
import css from "./Pagination.module.css"

export const Pagination = ({
  totalRecipes,
  onPageClick
}: any) => {
  const { wrapper, firstPage, pagination, active, activeLink, page, pageLink, previous, previousLink, next, nextLink, disabled, breakLink, lastPage, numberPage, breakPage, currentPageNotZero } = css;

  const [searchParams] = useSearchParams();
  // @ts-expect-error TS(2345): Argument of type 'string | null' is not assignable... Remove this comment to see the full error message
  const selectedPage = parseInt(searchParams.get('page'));
  const windowWidth = useWindowSize().width;
  const [currentPage, setCurrentPage] = useState(-1);
  const [shouldApplyExtraStyles, setShouldApplyExtraStyles] = useState(false);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(true);
  const [displayedPages, setDisplayedPages] = useState(1);

  useEffect(() => {
    if (currentPage === 0) {
      setIsFirstPage(true);
      setIsLastPage(false);
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      setDisplayedPages(windowWidth < 768 ? 2 : 3);
      setShouldApplyExtraStyles(false);
    }
    else if (currentPage === totalRecipes - 1) {
      setIsLastPage(true);
      setShouldApplyExtraStyles(false);
    }
    else {
      setIsFirstPage(false);
      setIsLastPage(false);
      setDisplayedPages(2);
      // @ts-expect-error TS(2531): Object is possibly 'null'.
      setShouldApplyExtraStyles(windowWidth < 768);
    }
  }, [currentPage, windowWidth, totalRecipes])


  useEffect(() => {
    if (selectedPage) {
      setCurrentPage(selectedPage - 1); 
    }
    else {
      setCurrentPage(0);
    }
  }, [selectedPage]);

 

  const handlePageClick = (page: any) => {
    onPageClick(page);
    setCurrentPage(page);
  };


  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className={wrapper}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button className={`${firstPage} ${page} ${isFirstPage ? disabled : ''}`} onClick={() => handlePageClick(0)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IconArrow fill={`${isFirstPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"double-arrow-left"}/>
      </button>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <ReactPaginate
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        previousLabel={<IconArrow fill={`${isFirstPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"arrow-left"}/>}
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        nextLabel={<IconArrow fill={`${isLastPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"arrow-right"}/>}
        breakLabel={'...'}
        pageCount={totalRecipes}
        marginPagesDisplayed={0}
        forcePage={currentPage} 
        pageRangeDisplayed={displayedPages}
        onPageChange={e => handlePageClick(e.selected)}

        containerClassName={pagination}
        activeClassName={`${active} ${shouldApplyExtraStyles ? currentPageNotZero : ''}`}
        activeLinkClassName={activeLink}
        pageClassName={`${page} ${numberPage}`}
        pageLinkClassName={pageLink}
        previousClassName={`${previous} ${page}`}
        previousLinkClassName={`${previousLink} ${pageLink}`}
        nextClassName={`${next} ${page}`}
        nextLinkClassName={`${nextLink} ${pageLink}`}
        disabledClassName={disabled}
        breakClassName={`${page} ${breakPage}`}
        breakLinkClassName={`${breakLink} ${pageLink}`}
      />
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <button className={`${lastPage} ${page} ${isLastPage ? disabled : ''}`} onClick={() => handlePageClick(totalRecipes - 1)}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <IconArrow fill={`${isLastPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"double-arrow-right"} />
      </button>
    </div>
  )
}