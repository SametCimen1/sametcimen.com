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
    <div className='w-full  bg-slate-100 dark:bg-black py-5'>
      <div className='md:w-3/4 mx-auto'>
        <h2 className='font-semibold text-3xl text-[#2D2E32] md:mx-5 mx-auto'>About me section</h2>
      </div>
      <div className="flex md:w-3/4 mx-auto w-full  justify-between">
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
        <div className="flex-1 ml-4">
          <h2 className="font-medium text-2xl text-[#2D2E32]"><span className="text-primary">{current === 1 ? "code" : "draw"}</span></h2>
        </div>
      </div>
    </div>
  )
}