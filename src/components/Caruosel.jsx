import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImage1 from '../assets/images/slide1.jpg';
import bgImage2 from '../assets/images/slide2.jpg';
import bgImage3 from '../assets/images/slide3.jpg';


const Caruosel = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Navigation]}
                loop="true"
                className="mySwiper">
                <SwiperSlide><Slide image={bgImage1} text={'Premier Hair Salon'} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage2} text={`Woman  Man  Kids`} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage3} text={"Latest Styles Available"} /></SwiperSlide>


            </Swiper>
        </>
    );
};

export default Caruosel;