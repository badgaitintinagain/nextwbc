"use client";

import Footer from "../syncs/footer";
import Header from "../syncs/header";

export default function PredictPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      {/* Grid Layout - Responsive with different layouts for mobile/desktop */}
      <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-4 md:gap-5 min-h-screen p-3 md:p-5">
        {/* Header Component */}
        <div className="col-span-full">
          <Header />
        </div>
        
        {/* Main Content Area - Horizontal sections on desktop, vertical on mobile */}
        <div className="col-span-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-5">
          {/* Horizontal Section 1 (Left Column) - Narrower */}
          <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow h-full">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Left Section</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is the left column of the page that spans the full height on desktop.
              On mobile devices, this becomes the top section.
            </p>
          </div>
          
          {/* Horizontal Section 2 (Middle Column) - Wider */}
          <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow h-full flex flex-col">
            {/* Top unified section */}
            <div className="mb-4 flex-grow">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Middle Top</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This is the unified top section in the middle column. Previously, this was split into three separate sections.
                Now they have been combined into one larger section.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Feature One</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    First important feature description goes here.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Feature Two</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Second important feature description goes here.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-2">Feature Three</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Third important feature description goes here.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bottom section */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Middle Bottom</h3>
              <p className="text-gray-700 dark:text-gray-300">
                This is the bottom section in the middle column. It spans the full width of the column.
              </p>
            </div>
          </div>
          
          {/* Horizontal Section 3 (Right Column) - Narrower */}
          <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow h-full">
            <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Right Section</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is the right column of the page that spans the full height on desktop.
              On mobile devices, this becomes the bottom section.
            </p>
          </div>
        </div>
        
        {/* Footer Component */}
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}