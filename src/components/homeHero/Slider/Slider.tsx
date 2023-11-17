import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
// @ts-expect-error TS(6142): Module '../SliderCookItem/SliderCookItem' was reso... Remove this comment to see the full error message
import { SliderCookItem } from '../SliderCookItem/SliderCookItem';
// @ts-expect-error TS(6142): Module '../SliderTopicInfoItem/SliderTopicInfoItem... Remove this comment to see the full error message
import { SliderTopicInfoItem } from '../SliderTopicInfoItem/SliderTopicInfoItem';
// @ts-expect-error TS(6142): Module '../SliderBigTopicItem/SliderBigTopicItem' ... Remove this comment to see the full error message
import { SliderBigTopicItem } from '../SliderBigTopicItem/SliderBigTopicItem';
// @ts-expect-error TS(2307): Cannot find module 'api' or its corresponding type... Remove this comment to see the full error message
import { fetchEvents } from 'api';
// @ts-expect-error TS(2307): Cannot find module './Slider.module.css' or its co... Remove this comment to see the full error message
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

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return (<Swiper slidesPerView={1} spaceBetween={16} pagination={{
        clickable: true,
    }} className={css.slider} modules={[Pagination]}>
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      {events.map((event, index) => (<SwiperSlide className={css.slide}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SliderCookItem cook={(event as any).cook}/>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SliderTopicInfoItem topic={(event as any).topic} imgTopicName={index === 1 ? 'pizza' : null}/>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <SliderBigTopicItem topic={(event as any).topic}/>
        </SwiperSlide>))}
    </Swiper>);
};