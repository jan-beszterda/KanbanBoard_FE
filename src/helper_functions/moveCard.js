export const moveCard = async (cardId, columnId1, columnId2) => {
  let response = await fetch(
    "/api/card/" + cardId + "/move?from=" + columnId1 + "&to=" + columnId2,
    {
      method: "PUT",
    }
  );
  return response;
};
