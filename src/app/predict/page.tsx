"use client";

import { useEffect, useRef, useState } from "react";
import Footer from "../syncs/footer";
import Header from "../syncs/header";

export default function PredictPage() {
  // State for dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
            <h1 className="text-xl mt-6">
              Select Detection Type
            </h1>
            
            <div className="relative">
              <button 
                ref={buttonRef}
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown search 
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>

              {/* Dropdown menu */}
              <div 
                ref={dropdownRef}
                className={`absolute z-10 ${dropdownOpen ? 'block' : 'hidden'} bg-white rounded-lg shadow-sm w-60 dark:bg-gray-700`}
                style={{top: "100%", marginTop: "0.5rem"}}
              >
                <div className="p-3">
                  <label htmlFor="input-group-search" className="sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      id="input-group-search" 
                      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Search user"
                    />
                  </div>
                </div>
                <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="checkbox-item-11" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-11" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Bonnie Green</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input defaultChecked id="checkbox-item-12" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-12" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Jese Leos</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="checkbox-item-13" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-13" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Michael Gough</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="checkbox-item-14" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-14" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Robert Wall</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="checkbox-item-15" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-15" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Joseph Mcfall</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="checkbox-item-16" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-16" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Leslie Livingston</label>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center ps-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                      <input id="checkbox-item-17" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                      <label htmlFor="checkbox-item-17" className="w-full py-2 ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300">Roberta Casas</label>
                    </div>
                  </li>
                </ul>
                <a href="#" className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2Z"/>
                  </svg>
                  Delete user
                </a>
              </div>
            </div>
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