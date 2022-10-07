export const removeColumn = async (boardId, columnId) => {
  let response = await fetch(
    "/api/board/" + boardId + "/remove_column?column_id=" + columnId,
    {
      method: "PUT",
    }
  );
  return response;
};
