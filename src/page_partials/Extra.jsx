import React from "react";

function Extra() {
  return (
    <div>
      <a
        className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <span className="mx-4 font-medium">Notes</span>
      </a>

      <a
        className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <span className="mx-4 font-medium">Invitations</span>
      </a>

      <a
        className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <span className="mx-4 font-medium">Settings</span>
      </a>
    </div>
  );
}

export default Extra;
