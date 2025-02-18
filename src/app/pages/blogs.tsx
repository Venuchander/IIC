"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/navbar'
// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Innovation in Technology Education",
    excerpt: "Exploring new methods of teaching technology in the modern era.",
    author: "John Doe",
    date: "February 15, 2024",
    readTime: "5 min read",
    category: "Education",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The Future of Entrepreneurship",
    excerpt: "Key trends shaping the entrepreneurial landscape in 2024 and beyond.",
    author: "Jane Smith",
    date: "February 12, 2024",
    readTime: "7 min read",
    category: "Entrepreneurship",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Building Successful Startups",
    excerpt: "Essential strategies for launching and growing your startup.",
    author: "Mike Johnson",
    date: "February 10, 2024",
    readTime: "6 min read",
    category: "Startup",
    image: "/placeholder.svg"
  }
]

export default function BlogsPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Latest Blog Posts
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Insights, news, and knowledge from the IIE CENTER community
          </p>
        </div>

        {/* Featured Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'Education', 'Entrepreneurship', 'Technology', 'Innovation'].map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium text-blue-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link href={`/blogs/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <span className="text-sm font-medium text-gray-900">{post.author}</span>
                  </div>
                  <time className="text-sm text-gray-500">{post.date}</time>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Load More Posts
          </button>
        </div>
      </div>
    </main>
    </>
  )
}