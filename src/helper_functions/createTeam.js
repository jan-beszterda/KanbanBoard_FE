export const createTeam = async (data = {}, userId) => {
  let response = await fetch("/api/team?creator_id=" + userId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.status === 200) {
    console.log("Team created successfully");
  }

  let result = await response.json();
  console.log(result);

  return result;
};
