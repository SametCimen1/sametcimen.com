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
import Image from 'next/image'

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

  console.log(`current ${current}`)
  const urls = [
    'https://sametcimen.com/rutgers.jpg',
    'https://sametcimen.com/programming.jpg',
    'https://sametcimen.com/coding.jpg'
  ]

//   <CarouselContent>
//   {Array.from({ length: 3 }).map((_, index) => (
//     <CarouselItem key={index}>
//       <div className="mt-2">
//         <Card>
//           <CardContent className="flex aspect-square items-center justify-center p-0 rounded-md">
//              {urls.map((url) => (
//                 <Image key = {url} src = {url} alt = "Rutgers university" width={1280} height={720}className="w-full h-full object-cover rounded-md"/>
//              ))}
//           </CardContent>
//         </Card>
//       </div>
//     </CarouselItem>
//   ))}
// </CarouselContent>


  return (
    <div className='w-full  bg-zinc-100 dark:bg-black py-5 overflow-hidden mx-auto flex flex-col' id = "about">
      <div className=' mx-auto w-3/4 max-w-[1300px]'>
        <h2 className='font-semibold text-3xl text-[#2D2E32] md:mx-5'>About me</h2>
      </div>
      <div className="flex flex-col lg:flex-row w-3/4 mx-auto justify-between max-w-[1300px] ">
        <div className="relative">
          <Carousel className="w-[30rem]" setApi={setApi}>
          <CarouselContent>
               {urls.map((url, index) => {
                    return(
                      <CarouselItem key={index}>
                       <div className="mt-2">
                         <Card>
                           <CardContent className="flex aspect-square items-center justify-center p-0 rounded-md">
                              <Image key = {url} src = {url} alt = "Rutgers university" width={1280} height={720}className="w-full h-full object-cover rounded-md"/>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="mx-auto lg:ml-20 flex flex-col">
          <h2 className="font-medium text-2xl text-[#2D2E32] duration-400 ">
              {current === 1 && "I attend Rutgers University"}
              {current === 2 && "I have been making websites and coding since I was 15 and in love with it"}
              {current === 3 && "I like front-end development most with Next.js"}
          </h2>
          <p className="mt-4">
              {current === 1 && "I attend Rutgers University"}
              {current === 2 && "I have been making websites and coding since I was 15 and in love with it"}
              {current === 3 && "I have been awarded the Principle's award for Computer Science"}
          </p>
        </div>
      </div>
    </div>
  )
}