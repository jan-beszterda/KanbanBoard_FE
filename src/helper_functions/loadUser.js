export const loadUser = async (activeUserId) => {
    const response = await fetch("/api/user/" + activeUserId);
    const data = await response.json();
    return data;
  };
  
 