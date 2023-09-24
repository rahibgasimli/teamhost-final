import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, } from 'swiper/modules';


const Events = () => {
  return (
    <div className="events">

        <div className="events-left">
            <h1>Recommended Events</h1>
            <Swiper
              pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className='events-left-slide'
      >
        <SwiperSlide><img src="https://www.pro-theme.com/html/teamhost/assets/img/t1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.pro-theme.com/html/teamhost/assets/img/t2.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.pro-theme.com/html/teamhost/assets/img/t1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.pro-theme.com/html/teamhost/assets/img/t2.jpg" alt="" /></SwiperSlide>

      </Swiper>
        </div>


        <div className="events-right">

            <h1>News Archive</h1>

            <Swiper 
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}

            className="news-card-slide">
        <SwiperSlide> 
        <div className="news-card">
          <div className="news-card-left">
            <img src="https://www.pro-theme.com/html/teamhost/assets/img/trending2.jpg" alt="" />
          </div>

          <div className="news-card-right">
            <h3>Cyber Games</h3>
            <p>Warring factions have brought the Origin System to the brink of destruction.</p>
            <a href="">View More</a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="news-card">
          <div className="news-card-left">
            <img src="https://www.pro-theme.com/html/teamhost/assets/img/trending3.jpg" alt="" />
          </div>

          <div className="news-card-right">
            <h3>Game of Thrones</h3>
            <p>Warring factions have brought the Origin System to the brink of destruction.</p>
            <a href="">View More</a>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="news-card">
          <div className="news-card-left">
            <img src="https://www.pro-theme.com/html/teamhost/assets/img/trending.jpg" alt="" />
          </div>

          <div className="news-card-right">
            <h3>Historical Games</h3>
            <p>Warring factions have brought the Origin System to the brink of destruction.</p>
            <a href="">View More</a>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
            
        </div>
    </div>
  )
}

export default Events

{/* <div className="news-card">
<div className="news-card-left">
  <img src="https://www.pro-theme.com/html/teamhost/assets/img/trending2.jpg" alt="" />
</div>

<div className="news-card-right">
    <h3>Cyber Games</h3>
    <p>Warring factions have brought the Origin System to the brink of destruction.</p>
    <a href="">View More</a>
</div>
</div> */}