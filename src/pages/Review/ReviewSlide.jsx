// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import Slide from './ReviewText'

export default function ReviewSlide() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination]}
                className='mySwiper rounded-xl'
            >
                <SwiperSlide>
                    <Slide
                        image={'https://i.ibb.co/LpyzbWh/aleksandr-minakov.jpg'}
                        name='Jack Nicos'
                        designation='CEO at JMG Airelines'
                        description=" Radiant Reverie Parlour garners praise for its attentive staff and personalized service. Clients appreciate the high-quality products and trendy treatments, alongside the inviting atmosphere that fosters relaxation. ItIs a go-to destination for quality beauty services and a refreshing experience."

                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={'https://i.ibb.co/NVzBBdK/behrouz-sasani-kh-Mxnuos-SV4-unsplash.jpg'}
                        name='Nicolas Nyle'
                        designation='Brand Ambassador Fly Air'
                        description=" Radiant Reverie Parlour garners praise for its attentive staff and personalized service. Clients appreciate the high-quality products and trendy treatments, alongside the inviting atmosphere that fosters relaxation. ItIs a go-to destination for quality beauty services and a refreshing experience."

                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={'https://i.ibb.co/kQMMKjY/behrouz-sasani.jpg'}
                        name='Sarah Ali'
                        description=" Radiant Reverie Parlour garners praise for its attentive staff and personalized service. Clients appreciate the high-quality products and trendy treatments, alongside the inviting atmosphere that fosters relaxation. ItIs a go-to destination for quality beauty services and a refreshing experience."
                        designation='Marketing CEO, Toyota'

                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}