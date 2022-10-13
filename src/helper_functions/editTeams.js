export const editTeamName = async (teamId, teamName) => {
  let response = await fetch(
    "/api/team/" + teamId + "/edit?teamName=" + teamName,
    {
      method: "PUT",
    }
  );
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
