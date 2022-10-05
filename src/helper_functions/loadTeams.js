 export const loadTeams = async (userId) => {
  const response = await fetch("/api/team/for_user?user_id=" + userId);
  const data = await response.json();
  return data;
};
