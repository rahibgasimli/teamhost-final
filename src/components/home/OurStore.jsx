import React from 'react'
import StoreCard from './StoreCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

const OurStore = () => {
    return (
        <div className="our-store">
            <h1>Our Store</h1>
            <div className="our-store-slide">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        320 : {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 50,
                        },
                      }}
                    modules={[Autoplay]}
                    className="mySwiper"
      >
        <SwiperSlide><StoreCard cardinIcerisindekiSekil='https://www.pro-theme.com/html/teamhost/assets/img/game-1.jpg' cardName='Struggule of Rivalry' content='Shooter / Platformer' score='4.8' price='4.99' /></SwiperSlide>
        <SwiperSlide><StoreCard cardinIcerisindekiSekil='https://www.pro-theme.com/html/teamhost/assets/img/game-2.jpg' cardName='Hunt of Duplicity' content='Action / Adventure' score='4.6' price='9.99' /></SwiperSlide>
        <SwiperSlide><StoreCard cardinIcerisindekiSekil='https://www.pro-theme.com/html/teamhost/assets/img/game-3.jpg' cardName='Journey and Dimension' content='Survival / Strategy' score='4.7' price='13.99' /></SwiperSlide>
        <SwiperSlide><StoreCard cardinIcerisindekiSekil='https://www.pro-theme.com/html/teamhost/assets/img/game-4.jpg' cardName='Reckoning and Freedom' content='Strategy' score='4.1' price='49.99' /></SwiperSlide>
        <SwiperSlide><StoreCard cardinIcerisindekiSekil='https://www.pro-theme.com/html/teamhost/assets/img/game-5.jpg' cardName='Pillage of Redemption' content='Survival / Strategy' score='4.7' price='13.99' /></SwiperSlide>
      </Swiper>
            </div>
            


        </div>
    )
}

export default OurStore