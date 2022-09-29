import React from "react";
import NavBar from "../page_partials/NavBar";
import SideBar from "../kb-components/SideBar";
import BoardPage from "./BoardPage";

function Layout() {
  return (
    <div className="min-w-full min-h-screen  h-screen overflow-hidden">
      <NavBar />
      <SideBar />
      <main className=" px-96 pt-28">
        <BoardPage />
      </main>
    </div>
  );
}

export default Layout;
