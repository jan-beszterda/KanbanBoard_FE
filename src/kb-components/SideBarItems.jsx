import React from "react";
import Signout from "./Signout";
import Extra from "../page_partials/Extra";
import { Link } from "react-router-dom";
import TeamList from "../team_components/TeamList";
import ProfilePage from "../kb-components/ProfilePage";
import Home from "../page_partials/Home";

function SideBarItems() {
  return (
    <div>
      <div className=" z-20 fixed flex flex-col w-60 h-screen py-8 bg-white border-r dark:bg-white dark:border-gray-200">
        <Link to={"/profilepage"}>
          <h2 className="  text-center text-3xl font-semibold text-gray-800 dark:text-black">
            Dashboard
          </h2>
        </Link>
        <hr className=" mt-[14.5px] border-1 border-gray-200" />
        <div className="flex flex-col items-center justify-between flex-1 mt-6">
          <nav>
            <Home />
            <Extra />
            <hr className="my-5 border-gray-200 dark:border-gray-200" />
            <TeamList />
          </nav>

          <Signout />
        </div>
      </div>
    </div>
  );
}

export default SideBarItems;
