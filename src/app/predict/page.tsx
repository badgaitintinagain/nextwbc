"use client";

import Footer from "../syncs/footer";
import Header from "../syncs/header";

export default function PredictPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950">
      {/* Grid Layout - Responsive with different layouts for mobile/desktop */}
      <div className="grid grid-cols-1 grid-rows-[auto_auto_auto_auto_auto] gap-4 md:gap-5 min-h-screen p-3 md:p-5">
        {/* Header Component */}
        <div className="col-span-full">
          <Header />
        </div>
        
        {/* Vertical Section 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow col-span-full">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Section One</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is the first vertical section of the page. It contains introductory content
            and spans the full width of the container.
          </p>
        </div>
        
        {/* Vertical Section 2 - Contains horizontal splits */}
        <div className="col-span-full">
          {/* Top row with three horizontal sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Horizontal Section 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Horizontal 1</h3>
              <p className="text-gray-700 dark:text-gray-300">
                This is the first horizontal section in the middle vertical area.
              </p>
            </div>
            
            {/* Horizontal Section 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Horizontal 2</h3>
              <p className="text-gray-700 dark:text-gray-300">
                This is the second horizontal section in the middle vertical area.
              </p>
            </div>
            
            {/* Horizontal Section 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Horizontal 3</h3>
              <p className="text-gray-700 dark:text-gray-300">
                This is the third horizontal section in the middle vertical area.
              </p>
            </div>
          </div>
          
          {/* Bottom row with one horizontal section */}
          <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">Horizontal 4</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This is the bottom horizontal section that spans the full width of the middle vertical area.
            </p>
          </div>
        </div>
        
        {/* Vertical Section 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-md shadow-lg p-5 md:p-6 hover:shadow-xl transition-shadow col-span-full">
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">Section Three</h2>
          <p className="text-gray-700 dark:text-gray-300">
            This is the third and final vertical section of the page. It contains concluding content
            and spans the full width of the container.
          </p>
        </div>
        
        {/* Footer Component */}
        <div className="col-span-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}