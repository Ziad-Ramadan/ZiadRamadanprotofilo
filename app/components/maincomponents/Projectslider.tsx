"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import M6 from "../Images/788.png";
import Image from 'next/image';
import im1 from "../Images/build.png";
import im3 from "../Images/build.png";

export default function ProjectSlider() {
  return (
    <div className='sm:w-[45%] 2xl:w-[30%] w-[80%] mx-auto mt-20 text-center'>
      <h1 className='font-bold text-2xl mb-8'>My Projects</h1>
      <Swiper 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0, 
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        className='w-[100%] py-[50px]'
      >
        <SwiperSlide>
          <div className='relative'>
            <div className='bg-black/60 absolute w-full h-[20%] bottom-0'/>
            <h1 className='absolute text-white font-bold sm:bottom-10 bottom-2 left-10'>My App</h1>
            <div className='flex justify-center'>
              <Image 
                src={im1} 
                alt="Project Image" 
                width={600} 
                height={250} 
                className='rounded-md'
                style={{ objectFit: 'fill' }}
              />
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='relative'>
            <div className='bg-black/60 absolute w-full h-[50%] bottom-0'/>
            <h1 className='absolute text-white font-bold sm:bottom-2 bottom-2 left-10'>My App</h1>
            <div className='flex justify-center'>
              <Image 
                src={M6} 
                alt="Project Image" 
                width={300} 
                height={250} 
                className='rounded-md'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='relative'>
            <div className='bg-black/60 absolute w-full h-[50%] bottom-0'/>
            <h1 className='absolute text-white font-bold sm:bottom-10 bottom-2 left-10'>My App</h1>
            <div className='flex justify-center'>
              <Image 
                src={im3} 
                alt="Project Image" 
                width={600} 
                height={250} 
                className='rounded-md'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
