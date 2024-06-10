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
    const [items, setItems] = useState([0,1,2,3,4,5,6]);
    const urls = [
        'https://skillicons.dev/icons?i=react',
        'https://skillicons.dev/icons?i=next',
        'https://skillicons.dev/icons?i=nodejs',
        'https://skillicons.dev/icons?i=html',
        'https://skillicons.dev/icons?i=css',
        'https://skillicons.dev/icons?i=tailwindcss',
        'https://skillicons.dev/icons?i=js'
    ]
    const { setTheme, theme } = useTheme();


    return(
        <div className="h-screen flex flex-col md:w-3/4 mx-auto justify-center items-start overflow-hidden md:overflow-auto">
            <div className="flex lg:flex-row items-center p-4 w-full justify-between flex-col-reverse text-center lg:text-start">
                <div className="max-w-50 flex-1 w-3/4 mx-auto ">
                    <h1 className="font-semibold text-5xl text-[#2D2E32] dark:text-[#efefef] mt-10 lg:mt-0">Samet Cimen</h1>
                    <p className="text-muted-foreground mt-2 mr-2">Hi, I ‘m Samet. A next.js and React developer based in New Jersey. 📍</p>
                    <div className="mt-3 flex gap-4 justify-center lg:justify-start">
                        <Github size = {32} color={theme === 'dark' ? "#efefef" : "#2D2E32"} className="" strokeWidth="2"/>
                        <Instagram size = {32} color={theme === 'dark' ? "#efefef" : "#2D2E32"} strokeWidth="2"/>
                        <Linkedin size = {32} color={theme === 'dark' ? "#efefef" : "#2D2E32"} strokeWidth="2"/>
                    </div>
                    <div className="w-full  mt-10 flex items-center flex-col lg:flex-row ">
                        <div className="flex flex-wrap">
                            <Reorder.Group axis="x" values={items} onReorder={setItems} className="flex p-2 gap-2 group flex-wrap justify-center md:justify-start">
                                {items.map((item, index) => (
                                    <Reorder.Item key={item} value={item} className='w-[50px] h-[50px] bg-cover hover:-translate-y-6 '  style={{'backgroundImage': `url(${urls[index]})`}}>
                                    </Reorder.Item>
                                ))}
                            </Reorder.Group>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper "
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