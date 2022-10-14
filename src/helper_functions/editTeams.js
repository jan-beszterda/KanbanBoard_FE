export const editTeam = async (teamId, team) => {
  let response = await fetch("/api/team/" + teamId + "/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
  return response;
};
export const editUserName = async (userId, userName) => {
  let response = await fetch(
    "/api/user/" + userId + "/userNameEdit?newName=" + userName,
    {
      method: "PUT",
    }
  );
  return response;
}
