import React from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <Link
        to={"/profilepage"}
        className="flex items-center py-2 mt-4 px-4  text-black hover:bg-blue-300 hover:rounded"
        href="#"
      >
        <span className="mx-4 font-medium">Home</span>
      </Link>
    </div>
  );
}

export default ProfilePage;
