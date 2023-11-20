import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SliderCookItem } from '../SliderCookItem/SliderCookItem';
import { SliderTopicInfoItem } from '../SliderTopicInfoItem/SliderTopicInfoItem';
import { SliderBigTopicItem } from '../SliderBigTopicItem/SliderBigTopicItem';
import { fetchEvents } from 'api';
import { IEvent } from 'interface/Event';
import css from './Slider.module.css'

export const Slider = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

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

  return (<Swiper slidesPerView={1} spaceBetween={16} pagination={{
        clickable: true,
    }} className={css.slider} modules={[Pagination]}>
      {events.map((event, index) => (<SwiperSlide className={css.slide}>
          <SliderCookItem cook={(event as IEvent).cook}/>
          <SliderTopicInfoItem topic={(event as IEvent).topic} imgTopicName={index === 1 ? 'pizza' : null}/>
          <SliderBigTopicItem topic={(event as IEvent).topic}/>
        </SwiperSlide>))}
    </Swiper>);
};