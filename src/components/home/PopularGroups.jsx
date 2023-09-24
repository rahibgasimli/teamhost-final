import React from 'react'

import GroupsCard from './GroupsCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay} from 'swiper/modules';


const PopularGroups = () => {
  return (
    <div className="popular-groups">
        <h1>Popular Groups</h1>


        <div className="popular-slide">
        <Swiper
        modules={[Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        slidesPerView={2}
        spaceBetween={30}
      >
        <SwiperSlide><GroupsCard groupsName='Season of the Witch' reviews='756'/></SwiperSlide>
        <SwiperSlide><GroupsCard groupsName='Worldwide Cities' reviews='56'/></SwiperSlide>
        <SwiperSlide><GroupsCard groupsName='Tourist Attractions' reviews='34'/></SwiperSlide>
        <SwiperSlide><GroupsCard groupsName='Worldwide Cities' reviews='56'/></SwiperSlide>
        <SwiperSlide><GroupsCard groupsName='Season of the Witch' reviews='56'/></SwiperSlide>

      </Swiper>
      </div>

    </div>
  )
}

export default PopularGroups