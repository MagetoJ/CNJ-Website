'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    text: 'CNJ Safaris made booking our Kenya trip incredibly easy. The quiz gave us exactly what we needed, and the itinerary was perfectly tailored to our budget.',
    rating: 5,
    avatar: 'SJ',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Toronto, Canada',
    text: 'Best safari experience of my life! The guides were knowledgeable, accommodations were pristine, and I saw all the Big Five. Highly recommend!',
    rating: 5,
    avatar: 'MC',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'Sydney, Australia',
    text: 'The gorilla trekking experience in Uganda was magical. CNJ Safaris handled everything professionally from start to finish.',
    rating: 5,
    avatar: 'EW',
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sage-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-leaf-green font-semibold text-sm uppercase tracking-widest">
            What Our Guests Say
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-jungle-dark mt-4 mb-6">
            Hear From Our Travelers
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition border border-gray-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-leaf-green text-leaf-green" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-leaf-green text-white flex items-center justify-center font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-jungle-dark">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-white p-8 rounded-2xl border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-leaf-green">500+</p>
              <p className="text-gray-600 mt-2">Happy Travelers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-leaf-green">4.8/5</p>
              <p className="text-gray-600 mt-2">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-leaf-green">98%</p>
              <p className="text-gray-600 mt-2">Would Recommend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
