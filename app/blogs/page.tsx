import Link from "next/link";
import React from "react";
import blogs from "@/data/blogs";
import Image from "next/image";
import SectionTop from "@/components/SectionTop";

const page = () => {
  const Blogcard = ({ blog }: { blog: (typeof blogs)[0] }) => {
    return (
      <div className="w-[300px] bg-white shadow rounded-2xl p-4 flex flex-col gap-4">
        <div className="h-[200px] bg-blue-500 rounded-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>

        <h3 className="line-clamp-2 font-[600]">{blog.title}</h3>

        <p className="text-sm text-black line-clamp-3">{blog.description}</p>

        <Link className="btn" href={`/blogs/${blog.id}`}>
          Read More
        </Link>
      </div>
    );
  };

  return (
    <>
      <SectionTop
        chip=""
        title="Bonton Blogs"
        description="get the latest insight from the bonton."
        link=""
        btnText=""
        imageUrl="/sectiontop/blog.jpg"
      />
   

      <div className="parent py-[100px] relative bg-gradient-to-b from-white to-[var(--accent1)]/10">
        <div className="container flex items-center justify-center flex-wrap gap-8 px-4 ">
          {blogs.map((blog) => (
            <Blogcard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
