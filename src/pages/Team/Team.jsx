import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Slide from './TeamName';
import bgImage1 from '../../assets/images/jake-nackos-.jpg';
import bgImage2 from '../../assets/images/fleur-kaan.jpg';
import bgImage3 from '../../assets/images/matheus-ferrero.jpg';
import bgImage4 from '../../assets/images/behrouz-sasani-khMxnuosSV4-unsplash.jpg';
import bgImage5 from '../../assets/images/tamara-bellis.jpg';
import bgImage6 from '../../assets/images/aleksandr-minakov.jpg';


const Team = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Navigation]}
                loop="true"
                className="mySwiper">
                <SwiperSlide><Slide image={bgImage1} text={'Jack Nicos'} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage2} text={`Fleur Kaan`} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage3} text={"Mathews Ferraro"} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage4} text={"Behrouz-Sasani"} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage5} text={"Tamara Bellis"} /></SwiperSlide>
                <SwiperSlide><Slide image={bgImage6} text={"Aleksandr Minakov"} /></SwiperSlide>



            </Swiper>
        </>
    );
};

export default Team;