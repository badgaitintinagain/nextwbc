"use client";

import Footer from "./syncs/footer";
import Header from "./syncs/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      {/* Grid Layout - Responsive with different layouts for mobile/desktop */}
      <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 md:gap-5 min-h-screen p-3 md:p-5">
        {/* Header Component */}
        <div className="col-span-full">
          <Header />
        </div>
        
        {/* Unified Full-Width Body Content */}
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow col-span-full">
          <h1 className="text-3xl font-semibold text-blue-700 dark:text-blue-300 mb-5">Welcome to Our Website</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This is the main content area of our website. The layout has been updated
            using the new grid system specifications with responsive design.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-5">
            The layout adapts to different screen sizes:
          </p>
          <ul className="list-disc pl-6 mb-5 text-gray-700 dark:text-gray-300 space-y-2">
            <li>On mobile: Header → Content → Footer</li>
            <li>On desktop: Clean full-width layout</li>
          </ul>
          <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:-translate-y-1 hover:shadow-md">
            Learn More
          </button>
        </div>
        
        {/* Footer Component */}
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}