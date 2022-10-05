import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import {signupFields} from "../constants/formFields";

function AddBoardBtn({name,btnName, teamId}) {

    const [boardName, setBoardName] = useState("");
    const [boardDescription, setBoardDescription] = useState("");



    const handleSubmit=(e)=> {

        console.log("teamId:");
        console.log(teamId)

        const newBoard = {
            "boardName": boardName,
            "boardDescription": boardDescription
        }

        console.log("newBoard:");
        console.log(newBoard);

            const signUpBoard = async (data = {}) => {
                let response = await fetch('/api/board/create?owner_team=' + teamId, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.status === 200) {
                    console.log('Board created successfully');
                }

                let result = await response.json();
                console.log(result);

                return result;
            }

        signUpBoard(newBoard).then((result) => {

            //Set localStorage for team id
            localStorage.setItem('active-board-id', result.boardId);
            let idTest = localStorage.getItem('active-board-id');
            console.log("Active board:")
            console.log(idTest);
            setShowModal(false);
        });

    }
    // End handleSubmit.

    const [showModal, setShowModal] = React.useState(false);
    return (
      <>
        <button
          className=" font-sans font-bold uppercase text-m ml-10  px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
            {btnName}
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl font-semibold">
                      {name}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">

                      </span>
                    </button>
                  </div>
                  {/*body*/}

                  
                  <div className="relative p-6  ">
                    <p className='mb-5 font-bold'>Title</p>
                    <input className=' border-2 border-gray-300 rounded-md' type="text" value={boardName} onChange={e => setBoardName(e.target.value)}/>
                  </div>
                  <div className="relative p-6 pt-3 ">
                    <p className='mb-5  font-bold '>Description</p>
                    <textarea  className=' h-40 border-2 border-gray-300 rounded-md' value={boardDescription} onChange={e => setBoardDescription(e.target.value)}/>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className=" text-gray-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-red-pink text-white active:bg-red-pink-dark font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Add Board
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        </>
    )
}

export default AddBoardBtn