'use client';


import Image from "next/image"
import { Github, Instagram, Linkedin  } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';;
import { Reorder } from "framer-motion"
import { EffectCards } from 'swiper/modules';

import { useTheme } from "next-themes";

export function Hero(){
    const [items, setItems] = useState([
        {
            id: 0,
            url:'https://skillicons.dev/icons?i=react'
        },
        {
            id: 1,
            url:'https://skillicons.dev/icons?i=next'
        },
        {
            id: 2,
            url:'https://skillicons.dev/icons?i=nodejs'
        },
        {
            id: 3,
            url:'https://skillicons.dev/icons?i=html'
        },
        {
            id: 4,
            url:'https://skillicons.dev/icons?i=css'
        }, {
            id: 5,
            url:'https://skillicons.dev/icons?i=js'
        }
    ]);
    const { setTheme, theme } = useTheme();
    



    return(
        <div className="h-screen flex flex-col md:w-3/4 mx-auto justify-center items-start">
            <div className="flex flex-col md:flex-row items-center p-4 w-full justify-between ">
                <div className="max-w-50 flex-1 ">
                    <h1 className="font-semibold text-5xl text-[#2D2E32] dark:text-[#efefef]">Samet Cimen</h1>
                    <p className="text-muted-foreground mt-2">Hi, I ‘m Samet. A next.js and React developer based in New Jersey. 📍</p>
                    <div className="mt-3 flex gap-4">
                        <Github size = {32} color={theme === 'dark' ? "#efefef" : "#2D2E32"} className="" strokeWidth="2"/>
                        <Instagram size = {32} color={theme === 'dark' ? "#efefef" : "#2D2E32"} strokeWidth="2"/>
                        <Linkedin size = {32} color={theme === 'dark' ? "#efefef" : "#2D2E32"} strokeWidth="2"/>
                    </div>
                    <div className="w-full  mt-10 flex items-center">
                        <p className="font-medium text-lg">My Tech Stack </p>
                        <div className="flex display-inline ml-10">
                            <Reorder.Group axis="x" values={items} onReorder={setItems} className="flex p-2 gap-2">
                                {items.map((item) => (
                                    <Reorder.Item key={item.id} value={item.id} style={{'backgroundImage': `url(${item.url})`}} 
                                    className='w-[50px] h-[50px] bg-cover'>
                                    </Reorder.Item>
                                ))}
                            </Reorder.Group>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image className="h-full w-full object-cover " src = "/hero.png" alt="dsadsads" width={200} height={200}/>
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