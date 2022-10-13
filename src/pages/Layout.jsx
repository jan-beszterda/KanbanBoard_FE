import { useState, useEffect } from "react";
import NavBar from "../page_partials/NavBar";
import SideBar from "../page_partials/SideBar";
import { loadUser } from "../helper_functions/loadUser";
import React from "react";

function Layout({ children }) {
  const [activeUser, setActiveUser] = useState([]);
  let userIdFromLocaleStorage = localStorage.getItem("active-user-id");

  useEffect(() => {
    let load = async () => {
      let userLoad = await loadUser(userIdFromLocaleStorage);
      setActiveUser(userLoad);
    };
    load();
  }, [userIdFromLocaleStorage]);

if  (activeUser.lastName === null) {
    activeUser.lastName = "";
  }

  let fullName = activeUser.firstName + " " + activeUser.lastName;
  const capitalizeName = fullName.charAt(0).toUpperCase() + fullName.slice(1);


  return (
    <MyContext.Provider value={{activeUser,setActiveUser}}>
    <div className="min-w-full min-h-screen ">
      <NavBar name={capitalizeName}></NavBar>
      <SideBar />

      <main  className=" px-80 pt-28 flex">{children}</main>
    </div>
    </MyContext.Provider>
  );
}
export const MyContext = React.createContext();
export default Layout;
