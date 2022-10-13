import React from "react";
import { useEffect } from "react";
import Avatar from "react-avatar";
import {BiEdit} from 'react-icons/bi'
import { editUserName } from "../helper_functions/editTeams";
import { Link, useFetcher } from "react-router-dom";
import CreateBtn from './CreateBtn'

function ProfilePage() {
  const [user, setUser] = React.useState([])
  const userId = localStorage.getItem("active-user-id");

  const [editName,setEditName] = React.useState("");
  const [editNameModal,setEditNameModal] = React.useState(false);


  useEffect (() => {
  const loadUser = async () => {
    let response = await fetch("/api/user/" + userId);
    let data = await response.json();
    setUser(data);
  };
  loadUser();
}, [user]);


const onChange = (e) => {
  setEditName(e.target.value);
};

const onClick = () => {
  editUserName(userId, editName);
  setEditNameModal(false);
  
};

const openModal = () => {
  setEditNameModal(true);
};
const closeModal = () => {
  setEditNameModal(false);
};

if (user.lastName === null) {
  user.lastName = "";
}

const userName = user.firstName + " " + user.lastName;


  return (
    <div>
      <div className="w-[1070px] h-[450px] bg-light-grey rounded-md flex flex-row drop-shadow-sm gap-10 pl-10 pt-10  ">

        <div className=" w-[350px] h-[175px] bg-white rounded-md drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]" >

          <div className=" mx-5 my-5 ">
            <h1 className=" font-sans  font-bold mb-5">Welcome to Dashboard</h1>
            <p className=" mb-10">Let’s create teams for your projects!</p>
            <hr />
            <p className=" text-sm text-end mt-3 text-gray-600 italic">BoardIT - Team</p>

          </div>
        

        </div>

        <div className=" w-[600px] h-[380px] bg-white flex flex-row rounded-md drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] gap-5">

          <div className=" my-5 pl-10 pr-5  border-[1px] border-white border-r-gray-200">
          <div className=" flex flex-row  mb-5  ">
          <Avatar  color={Avatar.getRandomColor('sitebase', ['black', 'grey', 'orange'])} name={userName} size="80" round={true} />
          
          <h1 className=" pl-3 self-center text-2xl font-bold font-sans capitalize">{userName}</h1>
          <BiEdit onClick={openModal}  color="#FF8E7F" size={"20"} className="self-center ml-5 cursor-pointer "></BiEdit>
          {
            editNameModal ? (
              <CreateBtn btnTitle={"New name"} btnType={"Change"} edit={onClick} onChange={onChange} closeModal={closeModal} />
            ) : null
          }
          </div>

          <div>
            <p className=" text-gray-600 font-sans font-semibold mb-5 ml-2">About me</p>
            
              <textarea className=" h-[150px] text-sm border-[1px] border-dark-grey rounded-md py-2 px-2"  placeholder="Write something about yourself..."></textarea>
              

          
          </div>
          </div>

      
          <div className=" bg-white mt-10 flex flex-col gap-6">
          
          <div className=" flex flex-row  gap-[17px]">
          <p className=" font-sans text-gray-600 font-semibold">Email </p>
         <p className=" border-[1px] text-gray-400 italic  border-dark-grey text-sm pt-1 px-1 rounded-md w-[160px] pl-3 ">{user.email}</p>

          </div>
     
          <div className=" flex flex-row gap-[10px]">
          <p className=" font-sans text-gray-600 font-semibold">Phone </p>
         <p className=" border-[1px] text-gray-400 italic border-dark-grey  text-sm pt- px-1 rounded-md w-[160px] pl-3">xxx-xxx-xxx</p>

          </div>

        </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProfilePage;
