export const createBoard = async (data,id) => {
    let response = await fetch("/api/board/create?owner_team=" + id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Board created successfully");
    }
    let result = await response.json();
    console.log(result);
    return result;
  };
  
