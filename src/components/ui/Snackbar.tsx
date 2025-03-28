"use client";

import { useEffect } from 'react';

interface SnackbarProps {
  message: string;
  type: 'success' | 'error';
  show: boolean;
  onClose: () => void;
}

export default function Snackbar({ message, type, show, onClose }: SnackbarProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fadeIn">
      <div className={`rounded-lg px-4 py-3 shadow-lg ${
        type === 'success' 
          ? 'bg-green-500 text-white' 
          : 'bg-red-500 text-white'
      }`}>
        <div className="flex items-center space-x-2">
          {type === 'success' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          <span className="font-medium">{message}</span>
        </div>
      </div>
    </div>
  );
}