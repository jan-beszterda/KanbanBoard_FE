export const loadCard = async (cardId) => {
  const response = await fetch("/api/card/" + cardId);
  const data = await response.json();
  return data;
};
