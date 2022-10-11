export const editTeamName = async (teamId, teamName) => {
  let response = await fetch(
    "/api/team/" + teamId + "/edit?teamName=" + teamName,
    {
      method: "PUT",
    }
  );
  return response;
};
