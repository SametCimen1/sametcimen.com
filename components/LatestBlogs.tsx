import React from 'react'
import ListBlogs from './ListBlogs'

const LatestBlogs = () => {
  
    const blogs = [
        {
            id:2,
            title:"Creating your own programming language",
            description: "How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan ,How to hack a windows laptop using msfvenom and trojan ",
            image:"https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id:1,
            title:"Trojan hacking",
            description: "How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan, How to hack a windows laptop using msfvenom and trojan ,How to hack a windows laptop using msfvenom and trojan ",
            image:"https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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