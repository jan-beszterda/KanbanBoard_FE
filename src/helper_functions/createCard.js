export const createCard = async (userId, boardId, columnId, card) => {
  let response = await fetch(
    "/api/card/create?creator_id=" +
      userId +
      "&board_id=" +
      boardId +
      "&column_id=" +
      columnId,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }
  );
  return response;
};
