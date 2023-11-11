import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { SliderCookItem } from '../SliderCookItem/SliderCookItem';
import { SliderTopicInfoItem } from '../SliderTopicInfoItem/SliderTopicInfoItem';
import { SliderBigTopicItem } from '../SliderBigTopicItem/SliderBigTopicItem';
import { fetchEvents } from 'api';
import css from './Slider.module.css'

export const Slider = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchingEvents() {

      try {
        const fetchedEvents = await fetchEvents();
        setEvents(fetchedEvents);
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchingEvents();
  }, []);

  return (
    <Swiper
      loop={true}
      slidesPerView='auto'
      spaceBetween = {8}
      slidesPerGroup={3}
      breakpoints={{
        768: {
          spaceBetween: 16,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className={css.slider}
      modules={[Pagination]}
  
    >
      {events.map((event, index) =>
        [<SwiperSlide className={css.slide} style={{width: 'fit-content'}}>
          <SliderCookItem cook={event.cook} />
        </SwiperSlide>,
          <SwiperSlide className={css.slide} style={{width: 'fit-content'}}>
            <SliderTopicInfoItem topic={event.topic} imgTopicName={index === 1 ? 'pizza' : null} />
        </SwiperSlide>,
          <SwiperSlide className={css.slide} style={{width: 'fit-content'}}>
            <SliderBigTopicItem topic={event.topic} />
        </SwiperSlide>]
      )}
    </Swiper>
  );
};