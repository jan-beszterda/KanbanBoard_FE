import React from "react";
import { Link } from "react-router-dom";
import {BsFillPersonLinesFill} from "react-icons/bs";
function Home() {
  return (
    <div>
     
      <Link
        to={"/profilepage"}
        className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 "

        href="#"
      >
        <div className="flex flex-row gap-2 justify-center">
        <BsFillPersonLinesFill className=" self-center" />
        <span className=" font-medium">Home</span>
        </div>
        
      </Link>
    </div>
  );
}

export default Home;
