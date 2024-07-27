import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ImgSlide from "../images/event6.jpg";
import ImgSlide1 from "../images/3.jpg";

const SliderHeaderContainer = () => {
    return (            
        <div className='header_slider_parent_cards_container'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                keyboard={{ enabled: true }}
                grabCursor={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                effect='fade'
                pagination={{ type: 'bullets', clickable: true }}
                modules={[Keyboard, Pagination, Navigation, EffectFade]}
                className="mySwiper header_slider_cards_container"
            >
                <SwiperSlide 
                    style={{
                        backgroundImage: `url(${ImgSlide})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                    className='header_slider_card'
                >
                    <div className="header_slider_bg_shadow">
                        <div className="header_main_flex_container  ">
                            <div className='header_middle_container_content'>
                            <h1 className='header_one'>Balacani getirin , dahini aparin</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide 
                    style={{
                        backgroundImage: `url(${ImgSlide1})`,
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
                        backgroundImage: `url(${ImgSlide})`,
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
        </div>
    );
}

export default SliderHeaderContainer;



