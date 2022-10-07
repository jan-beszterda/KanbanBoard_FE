export const loadColumn = async (columnId) => {
    const response = await fetch("/api/column/" + columnId);
    const data = await response.json();
    return data;
  };