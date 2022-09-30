import { useState, useEffect } from "react";

export const useTeam = (teamId) => {
  const [team, setTeam] = useState({});

  useEffect(() => {
    const loadTeam = async (teamId) => {
      const response = await fetch("/api/team/" + teamId);
      const data = await response.json();
      setTeam(data);
    };
    loadTeam(teamId);
  }, []);
  return { team };
};
