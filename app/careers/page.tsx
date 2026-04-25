'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import WhatsAppFooter from '@/components/WhatsAppFooter'
import { Briefcase, Map, Heart, Compass } from 'lucide-react'

// Define the Job interface for type safety
interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[]; // Assuming it's parsed into an array
  status: string;
}

export default function CareersPage() {
  const [positions, setPositions] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Sanitize the API URL to remove trailing slashes and default to 127.0.0.1 for stability
  const apiUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:3001').replace(/\/$/, '');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        console.log(`Fetching jobs from: ${apiUrl}/api/jobs`);
        const response = await fetch(`${apiUrl}/api/jobs`, {
          headers: { 'Accept': 'application/json' }
        });

        if (!response.ok) {
          // Try to get JSON error, fallback to text if backend sent plain string
          const contentType = response.headers.get("content-type");
          const errorText = contentType?.includes("application/json") 
            ? (await response.json()).error 
            : await response.text();
          throw new Error(errorText || `Server Error (${response.status})`);
        }
        setPositions(await response.json());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Failed to fetch job positions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [apiUrl]);

  // JSON-LD for JobPosting Schema
  const jobPostingSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage", // Or WebPage if it's a single page
    "name": "Careers at CNJ Safaris",
    "description": "Explore career opportunities in safari guiding, travel design, and wildlife conservation with CNJ Safaris.",
    "url": "https://cnjsafaris.com/careers", // Replace with your actual domain
    "mainEntity": positions.map(job => ({
      "@type": "JobPosting",
      "title": job.title,
      "description": job.description, // Consider adding full description here
      "employmentType": job.type.toUpperCase(),
      "datePosted": new Date().toISOString().split('T')[0], // Dynamically set or fetch from DB
      "validThrough": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0], // Example: valid for 1 year
      "hiringOrganization": {
        "@type": "Organization",
        "name": "CNJ Safaris",
        "sameAs": "https://cnjsafaris.com" // Replace with your actual domain
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": job.location,
          "addressCountry": "KE" // Assuming Kenya for most jobs
        }
      },
      "baseSalary": { // Example, adjust as needed
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 1000,
          "maxValue": 5000,
          "unitText": "MONTH"
        }
      }
    }))
  }), [positions]);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/careers.jpeg"
          alt="Working at CNJ Safaris"
          fill
          priority
          className="object-cover brightness-50"
          sizes="100vw"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Join the Pride</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 font-light">
            Turn your passion for Africa into a world-class career.
          </p>
        </div>
      </section>

      {/* Life at CNJ Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 md:order-1 relative h-125 rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/Why you should visit Kenya — Style for Wanderlust.jpeg" 
              alt="Adventure Careers" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-leaf-green font-semibold uppercase tracking-widest text-sm">Our Culture</span>
            <h2 className="font-serif text-4xl font-bold text-jungle-dark mt-4 mb-6">Work Where Others Vacation</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Since 2019, CNJ Safaris has been built by individuals who don&apos;t just see Africa as a destination, 
              but as a home. We value authenticity, expertise, and a relentless commitment to guest satisfaction.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 bg-sage-light rounded-full text-jungle-dark text-sm font-semibold flex items-center gap-2">
                <Heart size={16} /> Heart of Africa
              </div>
              <div className="px-4 py-2 bg-sage-light rounded-full text-jungle-dark text-sm font-semibold flex items-center gap-2">
                <Map size={16} /> Expert Guided
              </div>
              <div className="px-4 py-2 bg-sage-light rounded-full text-jungle-dark text-sm font-semibold flex items-center gap-2">
                <Compass size={16} /> Purpose Driven
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-jungle-dark">Open Positions</h2>
          <p className="text-gray-600 mt-4">We&apos;re always looking for talented explorers.</p>
        </div>

        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-leaf-green"></div>
          </div>
        )}

        {error && (
          <div className="max-w-3xl mx-auto p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center mb-8">
            <p>Unable to load job positions: {error}</p>
            <p className="text-sm mt-2">Please ensure the backend server is running and API URL is configured.</p>
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-4">
          {!loading && positions.length === 0 && !error && (
            <p className="text-center text-gray-500 py-8">No open positions at the moment. Check back soon!</p>
          )}
          
          {!loading && positions.map((job) => (
            <div key={job.id} className="group p-6 border border-gray-200 rounded-2xl flex items-center justify-between hover:border-leaf-green hover:shadow-md transition cursor-pointer">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-jungle-dark group-hover:text-leaf-green transition">
                  {job.title}
                </h4>
                <p className="text-gray-500 text-sm">{job.location} • {job.type} • {job.department}</p>
              </div>
              <Briefcase className="text-gray-300 group-hover:text-leaf-green" />
            </div>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />
      <WhatsAppFooter />
    </main>
  )
}