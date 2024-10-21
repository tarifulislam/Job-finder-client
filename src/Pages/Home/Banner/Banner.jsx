
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import banner1 from '../../../assets/images/carousel1.jpg'
import banner2 from '../../../assets/images/carousel2.jpg'
import banner3 from '../../../assets/images/carousel3.jpg'
const Banner = () => {


    return (
        <div className=' py-9'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.7)), url(${banner1})` }} className='h-[38rem] w-full bg-cover text-center flex flex-col justify-center items-center text-white'>
                        <h2 className=' text-4xl font-bold'>Get Your Graphics Design Projects Done in minutes</h2>
                        <button className=' font-semibold text-md mt-6  bg-slate-500 p-4 rounded-md' >Post Job & Hire Expert</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.7)), url(${banner2})` }} className='h-[38rem] w-full bg-cover text-center flex flex-col justify-center items-center text-white'>
                        <h2 className=' text-4xl font-bold'>Get Your Graphics Design Projects Done in minutes</h2>
                        <button className=' font-semibold text-md mt-6  bg-slate-500 p-4 rounded-md' >Post Job & Hire Expert</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.2), rgba(5, 5, 5, 0.7)), url(${banner3})` }} className='h-[38rem] w-full bg-cover text-center flex flex-col justify-center items-center text-white'>
                        <h2 className=' text-4xl font-bold'>Get Your Graphics Design Projects Done in minutes</h2>
                        <button className=' font-semibold text-md mt-6  bg-slate-500 p-4 rounded-md' >Post Job & Hire Expert</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;