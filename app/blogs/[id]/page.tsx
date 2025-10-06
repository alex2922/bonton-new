import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import blogs from '@/data/blogs'
import Image from 'next/image'

interface BlogDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

const BlogDetailsPage = async ({ params }: BlogDetailsPageProps) => {
  const { id } = await params
  const blogId = parseInt(id)
  const blog = blogs.find(b => b.id === blogId)

  if (!blog) {
    notFound()
  }


  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="parent py-[100px] relative">
      <div className='absolute inset-0 bg-gradient-to-br from-[#121722]  via-emerald-500 to-[var(--accent1)] -z-10 opacity-100'></div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
        

            {/* Category Badge */}
            <div className="mb-6" data-aos="fade-up" data-aos-delay="100">
              <span className="inline-block px-4 py-2 bg-[var(--accent1)] text-white rounded-full text-sm font-medium">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl lg:text-6xl font-[900]  mb-6 text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {blog.title}
            </h1>

            {/* Description */}
            <p 
              className="text-xl text-white mb-8 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {blog.description}
            </p>

            {/* Meta Information */}
            <div 
              className="flex flex-wrap items-center gap-6 text-sm text-white"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span>{formatDate(blog.publishDate)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="parent py-0">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative rounded-2xl overflow-hidden shadow-2xl mt-[-30px]"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Image 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="parent py-[80px]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              data-aos="fade-up"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>
      </div>


 
      <div className="parent py-[60px] bg-gradient-to-br from-[#121722]  via-emerald-500 to-[var(--accent1)] ">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 
              className="text-3xl lg:text-4xl font-[900] text-white mb-6"
              data-aos="fade-up"
            >
             Latest Articles & Updates
            </h2>
            <p 
              className="text-white/90 text-lg mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover more articles about cable technology, sustainability, and industry insights.
            </p>
            <Link 
              href="/blogs"
              className="inline-flex items-center px-8 py-4 bg-white text-[var(--accent1)] font-[600] rounded-full hover:bg-gray-100 transition-colors"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              View All Blogs
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailsPage