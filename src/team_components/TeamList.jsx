import { useState, useEffect } from "react";

import AddTeamModal from "../kb-components/AddTeamModal";
import TeamItem from "../team_components/TeamItem";

import { loadTeams } from "../helper_functions/loadTeams";
import { createTeam } from "../helper_functions/createTeam";

function TeamList() {
  const [teams, setTeams] = useState([]);
  const [newTeam, setNewTeam] = useState({
    teamName: "",
    teamDescription: "",
  });
  const [showModal, setShowModal] = useState(false);
  const userId = localStorage.getItem("active-user-id");

  useEffect(() => {
    let load = async () => {
      let teamLoad = await loadTeams(+userId);
      setTeams(teamLoad);
    };
    load();
  }, [userId]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFIeldChange = (fieldName, fieldValue) => {
    setNewTeam({ ...newTeam, [fieldName]: fieldValue });
  };

  const addTeam = (e) => {
    e.preventDefault();
    if (newTeam.teamName && newTeam.teamDescription) {
      createTeam(newTeam, +userId).then((result) => {
        closeModal();
        setNewTeam({
          teamName: "",
          teamDescription: "",
        });
      });
    }
  };

  return (
    <div>
      <div className="flex justify-around">
        <h6 className="mx-4 font-medium">My Teams </h6>
        <button
          className="font-sans font-bold uppercase text-m ml-10  px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          +
        </button>
        {showModal ? (
          <AddTeamModal
            data={newTeam}
            onChange={handleFIeldChange}
            add={addTeam}
            closeModal={closeModal}
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-start items-center">
        {teams.map((team) => (
          <TeamItem teamId={team.id} key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
