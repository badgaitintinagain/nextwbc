"use client";

import Footer from "./syncs/footer";
import Header from "./syncs/header";
import InfoCard from "./syncs/infocard";

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
          {/* Centered Welcome Header */}
          <div className="text-center mb-8">
            <h1>
              Welcome
            </h1>
          </div>

          {/* Three Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <InfoCard 
              title="Feature One" 
              description="Discover our first amazing feature that will revolutionize how you work. Simple yet powerful tools at your fingertips."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
            />
            <InfoCard 
              title="Feature Two" 
              description="Our second feature sets us apart from the competition with its innovative approach to solving common problems."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
            />
            <InfoCard 
              title="Feature Three" 
              description="The third feature completes our suite of tools, ensuring you have everything you need to succeed in your projects."
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>
          Sign In Here!
        </div>
        {/* Footer Component */}
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}