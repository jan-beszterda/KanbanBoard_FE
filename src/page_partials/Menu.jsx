import React from "react";
import TeamList from "../team_components/TeamList";
import Signout from "../utility_components/Signout";
import Home from "../utility_components/Home";
import Extra from "./Extra";
function Menu() {
  return (
    <div>
      <div className=" fixed flex flex-col w-60 h-screen py-8 bg-white border-r dark:bg-white dark:border-gray-200">
        <h2 className="  text-center text-3xl font-semibold text-gray-800 dark:text-black">
          Dashboard
        </h2>
        <hr className=" mt-[14.5px] border-1 border-gray-200" />
        <div className="flex flex-col items-center justify-between flex-1 mt-6">
          <nav>
            <Home />
            <Extra />
            <hr className="my-5 border-gray-200 dark:border-gray-200" />
            <TeamList
              teams={[
                {
                  teamId: 1,
                  teamName: "Test",
                  teamDescription: "Test test",
                  boards: [
                    {
                      id: 1,
                      boardName: "Test board",
                      boardDescription: "Board testing",
                    },
                  ],
                },
              ]}
            />
          </nav>

          <Signout />
        </div>
      </div>
    </div>
  );
}

export default Menu;
