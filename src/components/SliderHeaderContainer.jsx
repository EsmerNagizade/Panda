import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import ImgSlide from "../images/event6.jpg";
import ImgSlide1 from "../images/3.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { getBannerList } from '../action/MainAction';
import { useEffect } from 'react';

const SliderHeaderContainer = () => {
const dispatch=useDispatch()
const {Banner}=useSelector(state=>state.Data)
console.log(Banner);
    useEffect(()=>{
dispatch(getBannerList())
    },[dispatch])
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
                {
                    Banner?.map((data,i)=>{
                        return(
                            <>
                          
{
data?.is_active?

                <SwiperSlide key={i}
                    style={{
                        backgroundImage: `url(${data?.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} 
                    className='header_slider_card'
                >
                    <div className="header_slider_bg_shadow ">
                        <div className="header_main_flex_container container  ">
                            <div className='header_middle_container_content'>
                            <h1 className='header_one'>{data?.title}</h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>:null
}
</> )

                    })
                }
             
            </Swiper>
        </div>
    );
}

export default SliderHeaderContainer;



