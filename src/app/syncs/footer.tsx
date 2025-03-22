export default function Footer() {
  return (
    <div className="col-span-1 md:col-span-5 md:col-start-1 md:row-start-5 bg-white dark:bg-gray-800 bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg py-4 text-center text-sm">
      <div className="container mx-auto">
        <p className="text-gray-700 dark:text-gray-300">© 2025 My Website. All rights reserved.</p>
        <div className="mt-2 flex flex-col md:flex-row justify-center md:space-x-4 space-y-2 md:space-y-0">
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition">Privacy Policy</a>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition">Terms of Service</a>
          <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition">Contact Us</a>
        </div>
      </div>
    </div>
  );
}