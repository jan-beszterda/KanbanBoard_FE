export const editColumnTitle = async (columnId, column) => {
  let response = await fetch("/api/column/" + columnId + "/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(column),
  });

  return response;
};
