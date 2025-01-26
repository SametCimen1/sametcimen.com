import React from 'react'
import ListBlogs from './ListBlogs'

const LatestBlogs = () => {
  
    const blogs = [
        {
            id:1,
            title:"Creating a Malware",
            description: "How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan ,How to hack a windows laptop using msfvenom and trojan ",
            image:"/freakybob.png"
        },
    

    ]


    return (
        <div className='w-full  mx-auto mt-20'>
            <h1 className='font-bold text-6xl text-center'>Latest Blogs</h1>
            
            <div className='flex  flex-wrap justify-around  mt-10 pb-5 lg:flex-row flex-col  '>
                {blogs.map((blog) => {
                    return(
                        <ListBlogs key = {blog.id} blog = {blog}/>
                    )
                })}
            </div>
        </div>
    )
}

export default LatestBlogs