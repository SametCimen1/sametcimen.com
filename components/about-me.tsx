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
    <div className=' bg-zinc-100 dark:bg-black py-5 overflow-hidden mx-auto flex flex-col' id = "about">
      <div className=' mx-auto w-3/4 max-w-[1300px]'>
        <h2 className='font-semibold text-3xl text-[#2D2E32] md:mx-5'>About me</h2>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto justify-between max-w-[1300px] w-3/4 ">
        <div className="relative">
          <Carousel className=" md:w-[30rem]" setApi={setApi} opts = {{loop:true}}>
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
        <div className="mx-auto lg:ml-20 mt-4 lg:mt-0 flex flex-col">
          <h2 className="font-medium text-2xl text-[#2D2E32] duration-400 ">
              {current === 1 && "I Study at Rutgers University"}
              {current === 2 && "My Passion for Web Development and Coding"}
              {current === 3 && "I Love Next.js and React"}
          </h2>
          <p className="mt-4 py-2 leading-relaxed">
              {current === 1 && "I'm currently pursuing a Computer Science degree at Rutgers University in New Brunswick, dedicating the majority of my time to advancing my knowledge in the field. Through hands-on projects, challenging coursework, and collaboration with peers, I'm gaining a solid foundation in programming, algorithms, and software development. My expected graduation year is 2027."}
              {current === 2 && "I started my web development journey when I was 15, and I've developed a strong passion for creating user-friendly and visually appealing websites. This early start has allowed me to hone my skills in various programming languages and frameworks. By continuously challenging myself with new projects and keeping up with the latest industry trends, I strive to deliver high-quality work."}
              {current === 3 && " These powerful frameworks have revolutionized the way I build web applications, offering a seamless development experience and exceptional performance. With Next.js, I can easily create server-side rendered applications, while React's component-based architecture allows for efficient and maintainable code. Leveraging these technologies, I've been able to bring my ideas to life with speed and precision, creating dynamic and responsive user interfaces. "}
          </p>
        </div>
      </div>
    </div>
  )
}