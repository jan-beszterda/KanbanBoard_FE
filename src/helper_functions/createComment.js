export const createComment = async (comment, userId, cardId) => {
  let response = await fetch(
    "/api/comment/create?creator_id=" + userId + "&card_id=" + cardId,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    }
  );
  return response;
};
