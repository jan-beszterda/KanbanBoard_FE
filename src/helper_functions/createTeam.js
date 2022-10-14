export const createTeam = async (team, userId) => {
  let response = await fetch("/api/team?creator_id=" + userId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  });
  return response;
};
