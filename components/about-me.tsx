'use client';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import React from "react";
import {useEffect, useState} from 'react';

export function AboutMe(){

  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

  }, [api])


  return (
    <div className='w-full  bg-slate-100 dark:bg-black py-5 overflow-hidden mx-auto flex flex-col' id = "about">
      <div className=' mx-auto w-3/4 max-w-[1300px]'>
        <h2 className='font-semibold text-3xl text-[#2D2E32] md:mx-5'>About me</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-3/4 mx-auto justify-between max-w-[1300px] ">
        <div className="relative">
          <Carousel className="" setApi={setApi}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mx-auto lg:ml-20 flex flex-col">
          <h2 className="font-medium text-2xl text-[#2D2E32] duration-400 ">
              In my free time I like to {current === 1 ? "code" : "draw"}
          </h2>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae illo voluptate velit incidunt esse, iure nisi reprehenderit ex blanditiis fuga. Harum eius provident deserunt in nihil itaque dicta. Maiores?</p>
        </div>
      </div>
    </div>
  )
}