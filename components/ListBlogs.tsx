import Image from "next/image"
import Link from "next/link"

const ListBlogs = ({blog}: {blog:{id:number, title:string, description:string, image:string}}) => {
  return (
    <Link className=' m-2  lg:w-5/12 border p-5 mt-5 rounded-lg cursor-pointer' href = {`/blog/${blog.id}`}>
        <Image
            src = {blog.image}
            width={1024}
            height={1024}
            alt = "cover image of the blog"
            className=""
        />
        <h2 className="text-2xl font-semibold mt-2">{blog.title}</h2>
        <p className='text-muted-foreground mt-2'>{blog.description}</p>
    </Link>
  )
}

export default ListBlogs