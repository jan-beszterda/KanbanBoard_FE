import React from "react";
import Avatar from "react-avatar";

function NavBar({ name }) {
  return (
    <div className="bg-white fixed h-16 pl-40 border-2 py-10 border-gray-100 w-full overflow-x-auto flex items-center justify-around pr-5 z-10">
      <div className="flex px-5 items-center ml-44">
        <input
          type="text"
          placeholder="Search for anything ..."
          className="bg-gray-100 border-0 rounded text-black px-10 py-2 pr-36 outline-none text-start text-sm"
        />
      </div>
      <div className=" ml-96">
        <Avatar
          color={Avatar.getRandomColor("sitebase", ["black", "grey", "orange"])}
          name={name}
          size="40"
          round={true}
        />
        <span className="ml-2 font-bold capitalize">{name}</span>
      </div>
    </div>
  );
}

export default NavBar;
