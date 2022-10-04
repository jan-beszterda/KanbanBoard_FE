export const loadTeam = async (teamId) => {
  const response = await fetch("/api/team/" + teamId);
  const data = await response.json();
  return data;
};
