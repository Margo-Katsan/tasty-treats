import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { selectFavoritesCategories, selectFavoritesCategory } from "redux/selectors";
import { setFavoritesCategory } from "redux/favoritesSlice";
import { FilterItem } from "../FilterItem/FilterItem";
import css from './FavoritesFilter.module.css';

export const FavoritesFilter = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectFavoritesCategories)
  const selectedCategory = useSelector(selectFavoritesCategory);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFavoritesCategory(event.target.value));
  }

 return (<form className={css.form}>
     <Swiper slidesPerView='auto' spaceBetween={14} breakpoints={{
        768: {
            spaceBetween: 15,
        },
    }} className={css.slider}>
       
       <SwiperSlide className={css.slide} style={{ width: 'fit-content' }}>
         <FilterItem category={''} nameCategory={'All categories'} selectedCategory={selectedCategory} onValueChange={onValueChange}/>
       </SwiperSlide>
       {(categories).map((category) => <SwiperSlide className={css.slide} style={{ width: 'fit-content' }}>
          <FilterItem category={category} nameCategory={category} selectedCategory={selectedCategory} onValueChange={onValueChange}/> 
       </SwiperSlide>)}
     </Swiper>
     
    
    </form>);
}