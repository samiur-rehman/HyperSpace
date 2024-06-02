import Link from 'next/link';
import React from 'react';

const Popup = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 h-full w-full px-4 ">
    <div className="relative mx-auto shadow-xl rounded-md bg-white max-w-md">
      <div className="flex justify-end p-2">
        <Link
          href="/"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      <div className="p-6 pt-0 text-center">
        <svg
          className="w-20 h-20 text-gray-100 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
          HYPERSPACE is a future forward experiential attractions developer,
          building physical parks for a digital world.
        </h3>
        <Link
          href=""
          className="text-white bg-blue hover:bg-gray-100 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
        >
          Yes, Join it
        </Link>
        <Link
          href="/"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
        >
          No, cancel
        </Link>
      </div>
    </div>
  </div>
);

export default Popup;
