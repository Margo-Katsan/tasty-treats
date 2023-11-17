
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWindowSize } from '@uidotdev/usehooks';


import ReactPaginate from 'react-paginate';
import { IconArrow } from '../IconArrow/IconArrow';
import css from "./Pagination.module.css"

export const Pagination = ({ totalRecipes, onPageClick }) => {
  const { wrapper, firstPage, pagination, active, activeLink, page, pageLink, previous, previousLink, next, nextLink, disabled, breakLink, lastPage, numberPage, breakPage, currentPageNotZero } = css;

  const [searchParams] = useSearchParams();
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

 

  const handlePageClick = page => {
    onPageClick(page);
    setCurrentPage(page);
  };


  return (
    <div className={wrapper}>
      <button className={`${firstPage} ${page} ${isFirstPage ? disabled : ''}`} onClick={() => handlePageClick(0)}>
        <IconArrow fill={`${isFirstPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"double-arrow-left"}/>
      </button>
      <ReactPaginate
        previousLabel={<IconArrow fill={`${isFirstPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"arrow-left"}/>}
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
      <button className={`${lastPage} ${page} ${isLastPage ? disabled : ''}`} onClick={() => handlePageClick(totalRecipes - 1)}>
        <IconArrow fill={`${isLastPage ? 'rgba(255, 255, 255, 0.5)' : 'rgba(5, 5, 5, 1)'}`} iconId={"double-arrow-right"} />
      </button>
    </div>
  )
}