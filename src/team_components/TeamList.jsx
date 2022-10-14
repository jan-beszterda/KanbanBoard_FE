import { useState, useEffect } from "react";

import AddTeamModal from "../kb-components/AddTeamModal";
import TeamItem from "../team_components/TeamItem";

import { loadTeams } from "../helper_functions/loadTeams";
import { createTeam } from "../helper_functions/createTeam";
import { createStompClient } from "../helper_functions/createStompClient";

function TeamList() {
  const [teams, setTeams] = useState([]);
  teams.sort((a, b) => (a.id > b.id ? 1 : -1));
  const [newTeam, setNewTeam] = useState({
    teamName: "",
    teamDescription: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [updateTeamList, setUpdateTeamList] = useState(false);
  const [client, setClient] = useState();

  const userId = localStorage.getItem("active-user-id");

  useEffect(() => {
    let load = async () => {
      let teamLoad = await loadTeams(+userId);
      setTeams(teamLoad);
    };
    load();
  }, []);

  useEffect(() => {
    let stompClient = createStompClient("/topic/teamlist/" + userId, () =>
      setUpdateTeamList(true)
    );
    setClient(stompClient);
    return () => {
      stompClient.deactivate();
    };
  }, []);

  useEffect(() => {
    if (updateTeamList) {
      const load = async () => {
        let teamLoad = await loadTeams(+userId);
        setTeams(teamLoad);
      };
      load();
      setUpdateTeamList(false);
    }
  }, [updateTeamList]);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleFIeldChange = (fieldName, fieldValue) => {
    setNewTeam({ ...newTeam, [fieldName]: fieldValue });
  };

  const addTeam = () => {
    if (newTeam.teamName) {
      createTeam(newTeam, +userId).then((response) => {
        if (response.status === 200) {
          setNewTeam({
            teamName: "",
            teamDescription: "",
          });
          setUpdateTeamList(true);
          closeModal();
        }
      });
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold mr-5 px-2 ml-1 mb-3">My Teams</h3>
        <button
          className="font-sans font-bold uppercase text-m ml-5 px-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
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
      <div className="flex flex-col justify-start items-left overflow-auto">
        {teams.map((team) => (
          <TeamItem teamId={team.id} key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;
