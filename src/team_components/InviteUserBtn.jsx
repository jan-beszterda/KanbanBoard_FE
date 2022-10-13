import { useState } from "react";

function InviteUserBtn({ name, btnName, teamId, stompClient }) {
  const [userEmail, setUserEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    const handleInvitation = async () => {
      const inviteUser = async () => {
        let response = await fetch(
          "/api/team/" + teamId + "/invite_user?user_email=" + userEmail,
          {
            method: "PUT",
          }
        );
        return response;
      };
      const getUser = async () => {
        let response = await fetch("/api/user/get_by_email?email=" + userEmail);
        let result = await response.json();
        return result;
      };
      const invitee = await getUser();
      const invitation = await inviteUser();
      return [invitee, invitation];
    };
    handleInvitation().then(([invitee, invitation]) => {
      if (invitee && invitation) {
        stompClient.publish({ destination: "/app/teamlist/" + invitee.userId });
        stompClient.publish({ destination: "/app/team/" + teamId });
        setUserEmail("");
        setShowModal(false);
      }
    });
  };

  return (
    <>
      <button
        className="font-sans font-bold uppercase text-m mx-auto my-2 p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
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
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}

                <div className="relative p-6  ">
                  <p className="mb-5 font-bold">User E-mail</p>
                  <input
                    className=" border-2 border-gray-300 rounded-md"
                    type="text"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
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
                    Send Invite
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

export default InviteUserBtn;
