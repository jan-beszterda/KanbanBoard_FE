export const editColumnTitle = async (columnId, columnTitle) => {
    let response = await fetch("/api/column/" + columnId + "/edit?columnTitle=" + columnTitle, {
      method: "PUT",
    });
  
    return response;
  };