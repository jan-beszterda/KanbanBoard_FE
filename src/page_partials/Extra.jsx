import { Link } from "react-router-dom";
import {BsCardChecklist} from "react-icons/bs";
import {MdLibraryAdd} from "react-icons/md";
import {IoSettingsOutline} from "react-icons/io5";

function Extra() {
  return (
    <div>
      <a
        className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700 "
        href="#"
      >
        <div className="flex flex-row gap-2">
        <BsCardChecklist className=" self-center" />
        <span className="font-medium">Notes</span>
        </div>
      
      </a>

      <Link
        to="/invitations"
        className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
      >
        <div>
        <div className="flex flex-row gap-2">
        <MdLibraryAdd className=" self-center" />
        <span className="font-medium">Invitations</span>
        </div>
        </div>
        
      </Link>

      <a
        className="flex items-center px-4 py-2 mt-3 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700"
        href="#"
      >
        <div className="flex flex-row gap-2">
        <IoSettingsOutline className=" self-center" />
        <span className="font-medium">Settings</span>
        </div>
      </a>
    </div>
  );
}

export default Extra;
