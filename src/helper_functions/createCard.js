export const createCard = async (userId, columnId, card) => {
  let response = await fetch(
    "/api/card/edit?creator_id=" + userId + "&ccolumn_id=" + columnId,
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
