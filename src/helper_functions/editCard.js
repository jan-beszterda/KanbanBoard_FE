export const editCard = async (cardId, card) => {
  const response = await fetch("/api/card/" + cardId + "/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });
  return response;
};
