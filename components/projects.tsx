import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { projects } from '@/data'


export function Projects(){
    return(
        <div className="mx-auto ">
            <div className="flex flex-wrap items-center justify-center  p-4 gap-x-24 gap-y-8 mt-10">
                    {projects.map((project) => (
                        <CardContainer className="inter-varflex ">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  cursor-pointer w-auto sm:w-[35rem] h-auto rounded-xl p-6 border ">
                                    <CardItem
                                        translateZ="20"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                    {project.header}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="5"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-20">
                                        <CardItem
                                            translateZ={5}
                                            translateX={-5}
                                            as="button"
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            {project.stacksUsed}
                                        </CardItem>
                                        <CardItem
                                            translateZ={5}
                                            translateX={-5}
                                            as="button"
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            {project.link}
                                        </CardItem>
                                    </div>
                            </CardBody>
                        </CardContainer>
                    ))}
            </div>
            <p>Check out my Github if you are interested in seeing more of my projects</p>
        </div>
    )
}