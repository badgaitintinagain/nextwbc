import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

export default function InfoCard({ title, description, icon, ctaText = "Learn More", ctaLink = "#" }: InfoCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-5 hover:shadow-lg transition-all">
      <div className="flex flex-col h-full">
        {icon && (
          <div className="text-blue-600 dark:text-blue-400 mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-medium text-blue-700 dark:text-blue-300 mb-3">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <a 
          href={ctaLink} 
          className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 
                  rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors mt-auto text-sm"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}