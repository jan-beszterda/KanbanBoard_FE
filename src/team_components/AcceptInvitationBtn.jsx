function AcceptInvitationBtn({ teamId, userId, stompClient }) {
  const handleSubmit = () => {
    const acceptInvitation = async () => {
      let response = await fetch(
        "/api/user/" + userId + "/accept_team_invite?team_id=" + teamId,
        {
          method: "PUT",
        }
      );
      return response;
    };
    acceptInvitation().then((response) => {
      if (response.ok) {
        stompClient.publish({ destination: "/app/team/" + teamId });
        stompClient.publish({ destination: "/app/teamlist/" + userId });
      }
    });
  };

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
