'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LayoutDashboard } from 'lucide-react';

export default function AdminDashboardPage() {
  const router = useRouter()

  // This page is protected by the layout.tsx, so we don't need to re-check auth here.
  // We can add dashboard specific logic or data fetching here.

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <LayoutDashboard className="text-primary-dark dark:text-accent-green" size={36} />
        <h1 className="text-4xl font-serif font-bold text-primary-dark dark:text-gray-200">Admin Dashboard</h1>
      </div>
      <div className="bg-background-light dark:bg-slate-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold text-primary-dark dark:text-gray-200 mb-4">Welcome to the Admin Panel!</h2>
        <p className="text-text-muted dark:text-gray-400">
          This is your central hub for managing CNJ Safaris content.
          Use the sidebar to navigate through different sections like Itineraries, Careers, and Marketplace.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder for dashboard widgets */}
          <div className="bg-background-alt-light dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-primary-dark dark:text-gray-200 mb-2">Total Itineraries</h3>
            <p className="text-3xl font-bold text-accent-green dark:text-accent-green">120</p>
          </div>
          <div className="bg-background-alt-light dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-primary-dark dark:text-gray-200 mb-2">New Bookings (Last 7 Days)</h3>
            <p className="text-3xl font-bold text-accent-green dark:text-accent-green">15</p>
          </div>
          <div className="bg-background-alt-light dark:bg-slate-800 p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-primary-dark dark:text-gray-200 mb-2">Pending Inquiries</h3>
            <p className="text-3xl font-bold text-accent-green dark:text-accent-green">5</p>
          </div>
        </div>
      </div>
    </div>
  )
}