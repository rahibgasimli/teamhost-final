import React from 'react'
import Managecard from './Managecard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, } from 'swiper/modules';
import 'swiper/css';    


import Gameplay from '../../assets/images/managecard/gameplay1.jpg'
import gr2 from '../../assets/images/managecard/gr2.jpg'
import gr4 from '../../assets/images/managecard/gr4.jpg'
import gr5 from '../../assets/images/managecard/gr5.jpg'
import gr8 from '../../assets/images/managecard/gr8.jpg'


const Communities = () => {
  return (
    
    <div className="communities">
    
        <h4>Our Communities</h4>

        <Swiper
        className="manage-card-slide"
        slidesPerView={2}
        spaceBetween={30}
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
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}          
        modules={[Autoplay]}
        
      >
        <SwiperSlide><Managecard cardinIcerisindekiSekil={Gameplay}/></SwiperSlide>
        <SwiperSlide><Managecard cardinIcerisindekiSekil={gr2}/></SwiperSlide>
        <SwiperSlide><Managecard cardinIcerisindekiSekil={gr4}/></SwiperSlide>
        <SwiperSlide><Managecard cardinIcerisindekiSekil={gr5}/></SwiperSlide>
        <SwiperSlide><Managecard cardinIcerisindekiSekil={gr8}/></SwiperSlide>
      </Swiper>
    
    
    </div>


  )
}

export default Communities