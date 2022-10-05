export const loadBoard = async (boardId) => {
  const response = await fetch("/api/board/" + boardId);
  const data = await response.json();
  return data;
};
