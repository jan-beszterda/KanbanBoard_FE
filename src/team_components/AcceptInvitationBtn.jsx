import React from "react";

function AcceptInvitationBtn({ teamId, userId, callback }) {
  const handleSubmit = () => {
    const acceptInvitation = async () => {
      let response = await fetch(
        "/api/user/" + userId + "/accept_team_invite?team_id=" + teamId,
        {
          method: "PUT",
        }
      );
      if (response.status === 200) {
        console.log("Endpoint works!");
        console.log(response);
      }
      return response;
    };
    acceptInvitation().then(() => {
      callback();
    });
  };
  // End handleSubmit.

  return (
    <button
      className="font-sans font-bold uppercase text-m p-2 bg-white rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
      type="button"
      onClick={handleSubmit}
    >
      Accept
    </button>
  );
}

export default AcceptInvitationBtn;
