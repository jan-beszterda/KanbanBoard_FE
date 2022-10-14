import { useState } from "react";

function AddColBtn({ name, btnName, boardId, stompClient }) {
  const [showModal, setShowModal] = useState(false);
  const [columnTitle, setColumnTitle] = useState("");

  const handleSubmit = () => {
    const newColumn = {
      columnTitle: columnTitle,
    };
    const createColumn = async (data = {}) => {
      let response = await fetch("/api/column/create?board_id=" + boardId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response;
    };

    createColumn(newColumn).then((response) => {
      if (response.status === 200) {
        stompClient.publish({ destination: "/app/board/" + boardId });
        setColumnTitle("");
        setShowModal(false);
      }
    });
  };

  return (
    <>
      <button
        className=" w-[248px] h-10 mt-5 font-sans font-normal text-sm bg-dark-grey px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {btnName}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6  ">
                  <p className="mb-5 font-bold">Title</p>
                  <input
                    className=" border-2 border-gray-300 rounded-md"
                    type="text"
                    value={columnTitle}
                    onChange={(e) => setColumnTitle(e.target.value)}
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
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default AddColBtn;
