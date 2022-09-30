const { useState, useEffect } = require("react");

const useTeam = (teamId) => {
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
