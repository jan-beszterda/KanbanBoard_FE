const loadBoards = async (teamId) => {
  const response = await fetch("/api/board/for_team?team_id=" + teamId);
  const data = await response.json();
  return data;
};
