import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";

function UpdateBoardBtn({ board, setBoard, stompClient }) {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setBoard({ ...board, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const editBoard = async () => {
      let response = await fetch("/api/board/" + board.id + "/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(board),
      });
      return response;
    };

    editBoard(board).then((response) => {
      if (response.ok) {
        stompClient.publish({ destination: "/app/board/" + board.id });
        setShowModal(false);
      }
    });
  };

  return (
    <>
      <FaPencilAlt
        className="cursor-pointer mx-2"
        color="#FF8E7F"
        size={"25px"}
        type="button"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Edit Board</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none" />
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6  ">
                  <p className="mb-5 font-bold">Title</p>
                  <input
                    className=" border-2 border-gray-300 rounded-md"
                    type="text"
                    name="boardName"
                    value={board.boardName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="relative p-6 pt-3 ">
                  <p className="mb-5  font-bold ">Description</p>
                  <textarea
                    className=" h-40 border-2 border-gray-300 rounded-md"
                    name="boardDescription"
                    value={board.boardDescription}
                    onChange={(e) => handleChange(e)}
                  />
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
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}

export default UpdateBoardBtn;
