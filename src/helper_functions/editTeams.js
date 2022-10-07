export const editTeamName = async (teamId, teamName) => {
    let response = await fetch("/api/team/" + teamId + "/" + teamName, {
      method: "PUT",
    });

    if (response.status === 200) {
      return response;
      console.log("Successfully edited team name");

    }
  
    let result = await response.json();
    console.log(result);
  
    return result;
  };
  