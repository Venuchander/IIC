"use client"
import React from 'react'
import Navbar from '@/components/navbar'
export default function AboutPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            About IIE CENTER
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Learn about our mission, vision, and the team behind IIE CENTER.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower and inspire through innovation, education, and entrepreneurship.
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Creating a future where innovation drives positive change in society.
              </p>
            </div>

            {/* Values Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
              <p className="text-gray-600">
                Excellence, Innovation, Collaboration, and Impact.
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="mt-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600">
              IIE CENTER is dedicated to fostering innovation and entrepreneurship through education
              and practical experience. We provide a platform for students, professionals, and
              enthusiasts to learn, collaborate, and grow together.
            </p>
            
            <p className="text-gray-600 mt-4">
              Our center offers various programs, workshops, and events designed to develop skills,
              promote creativity, and encourage entrepreneurial thinking. We believe in the power of
              community and collective learning to drive meaningful innovation.
            </p>

            <p className="text-gray-600 mt-4">
              Through our initiatives, we aim to bridge the gap between academic knowledge and
              practical application, preparing individuals for the challenges and opportunities of
              tomorrow&apos;s world.
            </p>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}