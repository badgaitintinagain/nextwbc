"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NightLightSwitch from "./nightlightswitch";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu after navigation
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Header - Full width on all devices */}
      <div className="col-span-1 md:col-span-5 md:col-start-1 md:row-start-1 bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-sm text-blue-800 dark:text-blue-200 rounded-md shadow-lg py-2 px-4 sticky top-2 z-30">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              ref={buttonRef}
              className="mr-4 text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 md:hidden transition-transform hover:scale-110" 
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link href="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Organic Detector</h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link 
              href="/" 
              className={`text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 font-medium transition hover:scale-105 ${pathname === '/' ? 'border-b-2 border-blue-600 dark:border-blue-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/predict" 
              className={`text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 font-medium transition hover:scale-105 ${pathname === '/predict' ? 'border-b-2 border-blue-600 dark:border-blue-400' : ''}`}
            >
              Predict
            </Link>
            <Link 
              href="/tutorial" 
              className={`text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 font-medium transition hover:scale-105 ${pathname === '/tutorial' ? 'border-b-2 border-blue-600 dark:border-blue-400' : ''}`}
            >
              Tutorial
            </Link>
          </div>
          
          {/* Setting, Theme Toggle, and User Icon */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Dark/Light Theme Toggle */}
            <NightLightSwitch />
            
            <a href="#" className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition hover:scale-110 p-1 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
            <a href="#" className="text-blue-700 dark:text-blue-300 hover:text-blue-900 dark:hover:text-blue-100 transition hover:scale-110 p-1 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu with dark/light theme toggle */}
      <div 
        ref={menuRef}
        className={`absolute left-4 right-4 top-16 z-50 transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        } transition-all duration-200 ease-in-out md:hidden`}
      >
        <div className="bg-white dark:bg-gray-800 text-blue-800 dark:text-blue-200 p-4 rounded-md shadow-2xl">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className={`block px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all ${
                  pathname === '/' ? 'bg-blue-100 dark:bg-blue-900' : ''
                }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/predict" 
                className={`block px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all ${
                  pathname === '/predict' ? 'bg-blue-100 dark:bg-blue-900' : ''
                }`}
                onClick={closeMenu}
              >
                Predict
              </Link>
            </li>
            <li>
              <Link 
                href="/tutorial" 
                className={`block px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all ${
                  pathname === '/tutorial' ? 'bg-blue-100 dark:bg-blue-900' : ''
                }`}
                onClick={closeMenu}
              >
                Tutorial
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className={`block px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all ${
                  pathname === '/contact' ? 'bg-blue-100 dark:bg-blue-900' : ''
                }`}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
              <div className="px-4 py-2">
                <NightLightSwitch showLabel={true} className="w-full justify-start" />
              </div>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}