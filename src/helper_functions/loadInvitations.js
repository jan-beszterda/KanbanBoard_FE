export const loadInvitations = async (userId) => {
  const response = await fetch(
    "/api/team/invitations/for_user?user_id=" + userId
  );
  const data = await response.json();
  return data;
};
