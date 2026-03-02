import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';

const Banner = () => {
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <img src="/JORDAN-Coolfrze.png" alt="" className='w-full h-150 object-cover'/> </SwiperSlide>
      <SwiperSlide> <img src="/JORDAN-Coolfrze.png" alt="" className='w-full h-150 object-cover'/></SwiperSlide>
      <SwiperSlide> <img src="/JORDAN-Coolfrze.png" alt="" className='w-full h-150 object-cover'/></SwiperSlide>
      <SwiperSlide> <img src="/JORDAN-Coolfrze.png" alt="" className='w-full h-150 object-cover'/></SwiperSlide>

    </Swiper>
  );
};

export default Banner