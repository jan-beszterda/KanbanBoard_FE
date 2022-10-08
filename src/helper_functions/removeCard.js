export const removeCard = async (cardId) => {
  let response = await fetch("/api/card/" + cardId, {
    method: "DELETE",
  });
  return response;
};
