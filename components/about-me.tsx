'use client';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
export function AboutMe(){
  return (
    <div className='w-full  bg-slate-100 p-5'>
      <div className='md:w-3/4 mx-auto'>
        <h2 className='font-semibold text-3xl text-[#2D2E32] md:mx-5 mx-auto'>About me section</h2>
      </div>
    </div>
  )
}