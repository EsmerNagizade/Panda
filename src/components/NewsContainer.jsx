import React from 'react'
import { BsArrowRightSquare } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import { BsArrowLeftSquare } from "react-icons/bs";
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import SectionHeader from './SectionHeader'

const NewsContainer = () => {
  return (
    <div>
        <SectionHeader/>
        <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                keyboard={{ enabled: true }}
                grabCursor={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                effect='fade'
                navigation={{
                    nextEl:".slider_prev_btn",
                    prevEl:".slider_next_btn"
                }}
                pagination={{ type: 'bullets', clickable: true }}
                modules={[Keyboard,  Navigation, EffectFade]}
                className="mySwiper header_slider_cards_container"
            >
                <SwiperSlide 
                    style={{
                        backgroundImage: `url()`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                    className='new_card'
                >
                   
                        <div className="new_container">
                            <img src="" alt="" />
                            <h3>Abituriyentlər Üçün Psixoloji Seminar</h3>
                           <div className='new_card'>
                           <h3>Abituriyentlər Üçün Psixoloji Seminar</h3>
                           <p>2 dekabr tarixində "Uğurun əldə edilməsi və Motivasiya " adlı seminarımız baş tutmuşdur.</p>
                            </div>
                           <div >
                         
                           </div>
                        </div>
                 
                </SwiperSlide>
                <SwiperSlide 
                    style={{
                        backgroundImage: `url()`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                    className='header_slider_card'
                >
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container  ">
                            <div className='header_middle_container_content'>
                                <h1 className='header_one'>Balacani getirin.Dahini aparin</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide 
                    style={{
                        backgroundImage: `url()`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                    className='header_slider_card'
                >
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container ">
                            <div className='header_middle_container_content'>
                            <h1 className='header_one'>Balacani getirin.Dahini aparin</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="swiper_btns">
                <div className="slider_prev_btn"><BsArrowLeftSquare /></div>
                <div className="slider_next_btn"><BsArrowRightSquare /></div>
            </div>
    </div>
  )
}

export default NewsContainer
