import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { projects } from '@/data'


export function Projects(){
    return(
        <div className="md:mx-auto  md:w-3/4  my-10 max-w-[1300px] w-11/12  mx-auto  overflow-hidden">
            <h2 className=" font-semibold text-3xl text-[#2D2E32] dark:text-[#d1d1d1] md:mx-5 mx-auto w-3/4 md:w-full text-center md:text-left">My projects</h2>
            <div className="grid xl:grid-cols-2  grid-cols-1 gap-4 w-full ">
                    {projects.map((project,index) => (
                        <a href={project.link} target="_blank" key={index}>
                            <CardContainer className="inter-varflex col-span-2  w-full  md:min-w-[25rem]  mx-4 md:ml-3 md:mr-0">
                                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]ursor-pointer w-auto w-full h-auto rounded-xl p-6 border cursor-pointer">
                                        <CardItem
                                            translateZ="20"
                                            className="text-xl font-bold text-neutral-600 dark:text-white"
                                        >
                                        {project.header}
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="5"
                                            className="text-neutral-500 text-sm max-w-full mt-2 dark:text-neutral-300"
                                        >
                                        {project.description}
                                        </CardItem>
                                        <CardItem
                                            translateZ="0"
                                            className="w-full mt-4"
                                        >
                                        <Image
                                            src={project.imgSource}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-md group-hover/card:shadow-xl"
                                            alt="thumbnail"
                                        />
                                        </CardItem>
                                        <div className="flex justify-between items-center mt-20">
                                            <CardItem
                                                translateZ={5}
                                                translateX={-5}
                                                as="button"
                                                className="px-4 py-2 text-xs font-normal dark:text-white flex gap-1"
                                            >
                                                {/*https://skillicons.dev/icons?i=js*/}
                                                {project.stacksUsed.map((item, index) => (
                                                    <div key={index} style={{'backgroundImage': `url(https://skillicons.dev/icons?i=${item})`}} className='w-[32px] h-[32px] bg-cover  rounded-xl'></div>
                                                ))}

                                            </CardItem>
                                        </div>
                                </CardBody>
                            </CardContainer>
                        </a>
                    ))}
            </div>
            <div className="md:mx-5 w-3/4 mx-auto mt-3">
                <a href = "https://github.com/sametcimen1" className="text-blue-700 hover:text-blue-500 underline ">Check out my github</a>
            </div>
        </div>
    )
}