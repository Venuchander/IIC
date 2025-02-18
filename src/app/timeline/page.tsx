"use client"
import React from 'react'
import Navbar from '@/components/navbar'
export default function TimelinePage() {
  const events = [
    {
      date: "March 2024",
      title: "Innovation Workshop",
      description: "A hands-on workshop focusing on emerging technologies and their applications.",
      category: "Workshop"
    },
    {
      date: "April 2024",
      title: "Entrepreneurship Summit",
      description: "Annual gathering of entrepreneurs and industry leaders sharing insights and experiences.",
      category: "Conference"
    },
    {
      date: "May 2024",
      title: "Startup Pitch Competition",
      description: "Platform for aspiring entrepreneurs to present their innovative ideas.",
      category: "Competition"
    },
    // Add more events as needed
  ]

  return (
    <>
    <Navbar />
    <main className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Events Timeline
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore our past and upcoming events at IIE CENTER
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className="w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
                      {event.category}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                    <time className="block mb-2 text-sm font-medium text-gray-500">
                      {event.date}
                    </time>
                    <p className="text-gray-600">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5" />
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Add Event Button - Only visible to admins in a real application */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add New Event
          </button>
        </div>
      </div>
    </main>
    </>
  )
}