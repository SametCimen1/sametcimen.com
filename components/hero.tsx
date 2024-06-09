'use client';


import Image from "next/image"
import { Github, Instagram, Linkedin  } from 'lucide-react';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';;

// import required modules
import { EffectCards } from 'swiper/modules';


export function Hero(){
    return(
        <div className="h-screen  flex justify-center items-center">
            <div className="flex items-center justify-between  w-2/3 p-4">
                <div className="max-w-50">
                    <h1 className="font-medium text-3xl">Samet Cimen</h1>
                    <p >Hi, I ‘m Samet. A next.js and React developer based in New Jersey.</p>
                    <div className="mt-3 flex gap-4">
                        <Github size = {32} color="#2D2E32" strokeWidth="2"/>
                        <Instagram size = {32} color="#2D2E32" strokeWidth="2"/>
                        <Linkedin size = {32} color="#2D2E32" strokeWidth="2"/>
                    </div>
                </div>
                <div>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image className="h-full w-full object-cover" src = "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="dsadsads" width={200} height={200}/>
                        </SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                        <SwiperSlide></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}