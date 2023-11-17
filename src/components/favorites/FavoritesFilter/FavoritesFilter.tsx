import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// @ts-expect-error TS(2307): Cannot find module 'redux/selectors' or its corres... Remove this comment to see the full error message
import { selectFavoritesCategories, selectFavoritesCategory } from "redux/selectors";
// @ts-expect-error TS(2307): Cannot find module 'redux/favoritesSlice' or its c... Remove this comment to see the full error message
import { setFavoritesCategory } from "redux/favoritesSlice";
// @ts-expect-error TS(6142): Module '../FilterItem/FilterItem' was resolved to ... Remove this comment to see the full error message
import { FilterItem } from "../FilterItem/FilterItem";
// @ts-expect-error TS(2307): Cannot find module './FavoritesFilter.module.css' ... Remove this comment to see the full error message
import css from './FavoritesFilter.module.css'
export const FavoritesFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectFavoritesCategories)
  const selectedCategory = useSelector(selectFavoritesCategory);

  const onValueChange = (event: any) => {
    
    dispatch(setFavoritesCategory(event.target.value));
  }

 // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 return (<form className={css.form}>
     {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
     <Swiper slidesPerView='auto' spaceBetween={14} breakpoints={{
        768: {
            spaceBetween: 15,
        },
    }} className={css.slider}>
       
       {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       <SwiperSlide className={css.slide} style={{ width: 'fit-content' }}>
         {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
         <FilterItem category={''} nameCategory={'All categories'} selectedCategory={selectedCategory} onValueChange={onValueChange}/>
       </SwiperSlide>
       {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
       {(categories as any).map((category: any) => <SwiperSlide className={css.slide} style={{ width: 'fit-content' }}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <FilterItem category={category} nameCategory={category} selectedCategory={selectedCategory} onValueChange={onValueChange}/> 
       </SwiperSlide>)}
     </Swiper>
     
    
    </form>);
}